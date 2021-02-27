import React from 'react';
import { Button } from 'semantic-ui-react';
import { useQuery, gql } from '@apollo/client';

import styles from './AboutUs.module.css';
import Layout from '../Layout';

const QUERY = gql`
  query AboutUsTexts {
    aboutUsTextCollection {
      items {
        title
        paragraph
      }
    }
    personCollection {
      items {
        profilePicture {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        name
        position
        biography
      }
    }
  }
`;

const AboutUs = () => {
  const { data, loading } = useQuery(QUERY);

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        {loading ? (
          <div className={styles.no_roles}>Loading Data...</div>
        ) : (
          data.aboutUsTextCollection.items.map((section, i) => (
            <div className={styles.subcontainer} key={i}>
              <h3 className={styles.header}>{section.title}</h3>
              <p className={styles.body}>{section.paragraph}</p>
            </div>
          ))
        )}
        <div className={styles.profiles}>
          {loading ? (
            <div className={styles.no_roles}>Loading Data...</div>
          ) : (
            data.personCollection.items.map((person, i) => (
              <div className={styles.profile} key={i}>
                <img alt="person face" className={styles.faces} src={person.profilePicture.url} />
                <div>
                  <h4 className={styles.profile_header}>{person.position}</h4>
                  <p className={styles.profile_name}>{person.name}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <Button className={styles.button}>Join The Team!</Button>
      </div>
    </Layout>
  );
};

export default AboutUs;
