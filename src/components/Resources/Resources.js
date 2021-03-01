import React from 'react';
//import ReactPlayer from 'react-player';
import { gql, useQuery } from '@apollo/client';
import VideoSlider from './VideoSlider.js';
import { SliderData } from './SliderData.js';
import './Slider.css';


import styles from './Resources.module.css';
import Layout from '../Layout';

//<ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />

const QUICK_LINKS_QUERY = gql`
  query Quick_Link_Collection {
    quickLinkCollection {
      items {
        title
        description
        logo {
          url
          description
        }
        url
      }
    }
    usefulVideoCollection {
      items {
        videoUrl
        explanation
        title
      }
    }
  }
`;


const Resources = () => {
  const { loading, data } = useQuery(QUICK_LINKS_QUERY);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>Resources</h1>
        <div className={styles.video}>
          <h2 className = {styles.title}>Title</h2>
          <VideoSlider slides={SliderData}/>
        </div>
        <h2 className={styles.quick_links}>Quick Links</h2>
        <div className={styles.quick_links_container}>
          {loading ? (
            <div className={styles.no_roles}>Loading Data...</div>
          ) : (
            data.quickLinkCollection.items.map((quickLink, i) => (
              <div className={styles.quick_link} key={i}>
                <div className={styles.quick_link_text}>
                  <a
                    style={{ textDecoration: 'none' }}
                    href={quickLink.url}
                    className={styles.quick_link_title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {quickLink.title}
                  </a>
                  <p className={styles.quick_link_body}>{quickLink.description}</p>
                </div>
                <div className={styles.quick_link_image}>
                  <img
                    alt={quickLink.logo.description}
                    clssName={styles.emergency}
                    src={quickLink.logo.url}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Resources;