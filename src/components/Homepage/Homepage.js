import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";

import styles from "./Homepage.module.css";
import landingpic from "./landing_page_image.png";

const Homepage = () => {
  return (
    <>
      <div className={styles.landing}>
        <div className={styles.titletext}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <h3 className={styles.subtitle}>Praesent congue sodales magna, vitae tincidunt tortor vehicula a. Ut ut velit.</h3>
          <Button className={styles.button}>Sed in.</Button>
        </div>
        <img
          className={styles.landingimg}
          src={landingpic}
          alt="Medical Image"
        />
      </div>
      <div className={styles.require}>
        <h2>Require Assistance?</h2>
      </div>
    </>
  );
};

export default Homepage;
