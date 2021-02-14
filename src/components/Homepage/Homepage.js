import React from "react";
import { Button, Card } from "semantic-ui-react";
import { useQuery, gql } from '@apollo/client';

import styles from "./Homepage.module.css";
import landingpic from "../../assets/landing_page_image.png";
import Map from "../Map/Map";

const HOMEPAGEQUERY = gql`
  query HomepageText {
    homepageText(id: "4tuLaiJsGbSYTlZVcUz8mj"){
      jumbotronTitle
      jumbotronSubtitle
      jumbotronButtonText
      jumbotronButtonLink
      emergencyContact
      paragraphOneTitle
      paragraphOneBody
      paragraphTwoTitle
      paragraphTwoBody
    }
  }
`

const Homepage = () => {
  const { data, errors, loading } = useQuery(HOMEPAGEQUERY);

  console.log(data);

  return (
    loading ? <></> : <>
      <div className={styles.main_container}>
        <div className={styles.landing}>
          <div className={styles.titletext}>
            <h1 className={styles.title}>{data.homepageText.jumbotronTitle}</h1>
            <h3 className={styles.subtitle}>
              {data.homepageText.jumbotronSubtitle}
            </h3>
            <Button className={styles.button}>
              {data.homepageText.jumbotronButtonText}
            </Button>
          </div>
          <img
            className={styles.landingimg}
            src={landingpic}
            alt="Medical Background Logo"
          />
        </div>
        <div className={styles.require_content}>
          <div className={styles.require_text}>
            <h2 className={styles.require_text_header}>{ data.homepageText.paragraphOneTitle }</h2>
            <p className={styles.require_text_body}>
              {data.homepageText.paragraphOneBody}
            </p>
            <Button className={styles.button}>Resources</Button>
          </div>
          <div className={styles.require_card_container}>
            <Card className={styles.require_card}>
              <Card.Content>
                <Card.Header className={styles.require_card_header}>
                  Content Information
                </Card.Header>
                <Card.Description className={styles.require_card_body}>
                  {data.homepageText.emergencyContact}
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
        </div>
        <div className={styles.map_content}>
          <h2 className={styles.map_text_header}>{ data.homepageText.paragraphTwoTitle}</h2>
          <p className={styles.require_text_body}>
            {data.homepageText.paragraphTwoBody}
          </p>
          <Map />
        </div>
      </div>
    </>
  );
};

export default Homepage;
