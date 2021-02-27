/* eslint-disable no-unused-expressions */

import React, { useState, useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import {
  Link,
  NavLink,
} from 'react-router-dom';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import MobileNavbar from './MobileNavbar';
library.add(fab);

export const Navbar = ({ color, logo, menu, social }) => {
  const [navLinks, setNavLinks] = useState([
    { name: 'HOME', to: '/' },
    { name: 'ARTICLES', to: '/articles' },
    { name: 'ABOUT ME', to: '/about' },
    { name: 'CONTACT', to: '/contact' },
  ]);
  const [socialIcon, setSocialIcon] = useState([
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/nazeh-taha/',
      icon: ['fab', 'linkedin-in'],
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/nazeh200/',
      icon: ['fab', 'facebook-f'],
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nazeh_taha/',
      icon: ['fab', 'instagram'],
    },
    {
      name: 'Twitter',
      url: 'http://nazehtaha.herokuapp.com/',
      icon: ['fab', 'twitter'],
    },
  ]);
  const [background, setBackground] = useState('rgb(25, 25, 25)');
  const [logoUrl, setLogoUrl] = useState('https://svgshare.com/i/KHh.svg');
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    menu ? setNavLinks(menu) : [];
    color ? setBackground(color) : null;
    logo ? setLogoUrl(logo) : null;
    social ? setSocialIcon(social) : [];
  }, [menu, color, logo, social]);
  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  });

  if (width < 1150) {
    return (
      <MobileNavbar
        width={width}
        logoUrl={logoUrl}
        background={background}
        navLinks={navLinks}
        socialIcon={socialIcon}
      />
    );
  }

  return (
    <div style={{ width: '100%', position: 'fixed', zIndex: '100' }}>
      <Controller>
        <Scene triggerHook="onLeave" duration={300} pin>
          {(progress) => (
            <Timeline totalProgress={progress} paused>
              <Tween
                from={{ height: '120px' }}
                to={{ height: '80px', background: background }}
              >
                <div className={styles.header}>
                  <div className={styles.navLogo}>
                    <Link to="/">
                      <div className="logo-container">
                        <Timeline totalProgress={progress} paused>
                          <Tween
                            from={{ height: '150px' }}
                            to={{ height: '70px' }}
                          >
                            {/* <img
                                className={styles.LogoImg}
                                src={logoUrl}
                                alt="logo"
                              /> */}
                          </Tween>
                        </Timeline>
                      </div>
                    </Link>
                  </div>

                  <div className={styles.navLinks}>
                    <ul>
                      {navLinks.map((link, i) => (
                        <li key={i}>
                          <NavLink
                            exact
                            to={link.to}
                            activeStyle={{color: 'rgba(0,0,0,1)'}}
                          >
                            {link.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.navSocial}>
                    <ul>
                      {socialIcon.map((icon, i) => (
                        <li key={i}>
                          <a target="_blank" rel="noreferrer" href={icon.url}>
                            <FontAwesomeIcon icon={icon.icon} />
                          </a>
                          <span className={styles.tooltiptext}>
                            {icon.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Tween>
            </Timeline>
          )}
        </Scene>
      </Controller>
    </div>
  );
};