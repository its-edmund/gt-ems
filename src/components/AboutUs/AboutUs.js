import React from "react";
import { Button } from "semantic-ui-react";
import { useQuery, gql } from '@apollo/client';

import styles from "./AboutUs.module.css";
import femaleFace from "../../assets/facefemale.png";
import maleFace1 from "../../assets/faceMale.png";
import maleFace2 from "../../assets/faceBeard.png";
import Layout from '../Layout';

const QUERY = gql`
  query AboutUsTexts {
    aboutUsTextCollection {
      items {
        title
        paragraph
      }
    }
  }
`

const PEOPLE_QUERY = gql`
  query People {
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
`

const AboutUs = () => {
  const { data, errors, loading } = useQuery(QUERY);
  console.log(errors);
  const { peopleData, peopleErrors, loadingPeople } = useQuery(PEOPLE_QUERY);
  console.log(peopleErrors);
  return (
    <Layout>
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      {loading ? <div className={styles.no_roles}>Loading Data...</div> : data.aboutUsTextCollection.items.map((section) => (
          <div className={styles.subcontainer}>
            <h3 className={styles.header}>{section.title}</h3>
            <p className={styles.body}>{section.paragraph}</p>
          </div>
        ))}
      {loadingPeople ? <div className={styles.no_roles}>Loading Data...</div> : peopleData.personCollection.items.map((person) => (
        <div className={styles.profiles}>
          <div className={styles.profile}>
          <img alt="person face" clssName={styles.faces} src={person.profilePicture} />
            <div>
              <h4 className={styles.profile_header}>person.position</h4>
              <p className={styles.profile_name}>person.name</p>
            </div>
          </div>
        </div>
      ))}
      {/* <div className={styles.profiles}>
        <div className={styles.profile}>
          <img className={styles.faces} src={femaleFace} alt="Female Face" />
          <div>
            <h4 className={styles.profile_header}>President</h4>
            <p className={styles.profile_name}>Linda Smith</p>
          </div>
        </div>
        <div className={styles.profile}>
          <img className={styles.faces} src={maleFace1} alt="Male Face 1" />
          <div>
            <h4 className={styles.profile_header}>Vice President</h4>
            <p className={styles.profile_name}>John Klein</p>
          </div>
        </div>
        <div className={styles.profile}>
          <img className={styles.faces} src={maleFace2} alt="Male Face 2" />
          <div>
            <h4 className={styles.profile_header}>Secretary</h4>
            <p className={styles.profile_name}>Ryan Lopez</p>
          </div>
        </div>
      </div> */}
      <Button className={styles.button}>Join The Team!</Button>
    </div>
    </Layout>
  );
};

export default AboutUs;
