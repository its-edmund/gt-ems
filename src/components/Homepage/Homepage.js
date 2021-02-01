import React, { useState } from "react";
import { Menu, Button, Card } from "semantic-ui-react";

import styles from "./Homepage.module.css";
import landingpic from "../../assets/landing_page_image.png";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.landing}>
          <div className={styles.titletext}>
            <h1 className={styles.title}>HOLD GME 🚀🚀🚀</h1>
            <h3 className={styles.subtitle}>
              Praesent congue sodales magna, vitae tincidunt tortor vehicula a.
              Ut ut velit.
            </h3>
            <Button className={styles.button}>Sed in.</Button>
          </div>
          <img
            className={styles.landingimg}
            src={landingpic}
            alt="Medical Image"
          />
        </div>
        <div className={styles.require_content}>
          <div className={styles.require_text}>
            <h2 className={styles.require_text_header}>Require Assistance?</h2>
            <p className={styles.require_text_body}>
              Nullam quis metus vel erat bibendum euismod sit amet sit amet
              justo. Donec laoreet commodo lacus, vel tristique erat faucibus
              sit amet. Suspendisse ante lacus, pretium eu purus at, dignissim
              ultrices dui. Cras vel mauris tristique libero bibendum gravida a
              id libero. Maecenas quis sollicitudin enim. Aliquam vel commodo
              leo, maximus ultrices lectus. Vivamus sit amet molestie tellus.
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
                  Emergency: XXX-XXX-XXXX <br /> Non-Emergency: XXX-XXX-XXXX{" "}
                  <br /> <br /> Address: 123 Street Name Suite 001 Atlanta, GA
                  30332 <br /> <br /> Business Office: XXX-XXX-XXXX <br />{" "}
                  Business Fax: XXX-XXX-XXXX <br /> Email: example@example.com
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
        </div>
        <div className={styles.map_content}>
          <h2 className={styles.map_text_header}>Incidence Map</h2>
          <p className={styles.require_text_body}>
            Nullam quis metus vel erat bibendum euismod sit amet sit amet justo.
            Donec laoreet commodo lacus, vel tristique erat faucibus sit amet.
            Suspendisse ante lacus, pretium eu purus at, dignissim ultrices dui.
            Cras vel mauris tristique libero bibendum gravida a id libero.
            Maecenas quis sollicitudin enim. Aliquam vel commodo leo, maximus
            ultrices lectus. Vivamus sit amet molestie tellus.
          </p>
          <Map />
        </div>
      </div>
    </>
  );
};

export default Homepage;
