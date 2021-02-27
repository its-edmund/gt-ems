import React from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faSlack,
} from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.contact_form}>
          <h1 className={styles.headers}>Contact Us!</h1>
          <Form>
            <h2 className={styles.form_labels}>Email</h2>
            <Form.Input placeholder="Email" />
            <h2 className={styles.form_labels}>Message</h2>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              placeholder="Message"
            />
            <Button className={styles.submit_button}>Submit</Button>
          </Form>
        </div>
        <div className={styles.social_media}>
          <h1 className={styles.headers}>Connect With Us!</h1>
          <div className={styles.social_media_icons_group}>
            <div className={styles.social_media_icons}>
              <FontAwesomeIcon
                className={styles.icon}
                size="5x"
                icon={faInstagram}
              />
            </div>
            <div className={styles.social_media_icons}>
              <FontAwesomeIcon size="5x" icon={faLinkedin} />
            </div>
            <div className={styles.social_media_icons}>
              <FontAwesomeIcon size="5x" icon={faFacebookF} />
            </div>
            <div className={styles.social_media_icons}>
              <FontAwesomeIcon size="5x" icon={faSlack} />
            </div>
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <h1 className={styles.tagline}>
        <a target="_blank" rel="noreferrer" className={styles.link} href="https://dscgt.club">
          Made with 💙 by DSC@GT!
        </a>
      </h1>
    </footer>
  );
};

export default Footer;
