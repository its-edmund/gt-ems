import React from "react";
import { Button } from "semantic-ui-react";

import styles from "./AboutUs.module.css";
import femaleFace from "../../assets/facefemale.png";
import maleFace1 from "../../assets/faceMale.png";
import maleFace2 from "../../assets/faceBeard.png";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.subcontainer}>
        <h3 className={styles.header}>Who Are We</h3>
        <p className={styles.body}>
          Fusce ullamcorper porttitor orci non malesuada. Nunc molestie metus in
          aliquam vulputate. Phasellus tempor mi at dui mattis, non pellentesque
          nunc lacinia. Morbi feugiat, mauris quis congue blandit, eros odio
          varius sapien, vitae hendrerit dui nibh in leo. Vivamus luctus, nibh
          id finibus blandit, turpis nisi elementum felis, vel pharetra orci
          massa ac leo. Vestibulum tempor urna ligula, id interdum felis laoreet
          eu. Curabitur facilisis elit non mi molestie, in suscipit sem mollis.
        </p>
        <h3 className={styles.header}>Our Mission</h3>
        <p className={styles.body}>
          Suspendisse dictum malesuada augue. Etiam ut facilisis ante. Nunc
          venenatis justo quis suscipit luctus. Vestibulum fermentum ornare
          tellus, facilisis porttitor mi. Pellentesque pretium lacinia mi id
          consectetur. Cras tempus est ut blandit auctor. Ut eros leo, mattis
          fringilla leo sed, suscipit congue ipsum. Curabitur urna velit,
          viverra id lectus in, dignissim elementum enim. Sed luctus vulputate
          justo eget viverra. Etiam rutrum velit et arcu lobortis, finibus
          feugiat risus suscipit. Mauris tincidunt aliquet ex, nec finibus urna
          convallis sit amet. Ut vel leo eu turpis varius iaculis quis non ex.
          In sit amet odio ut est finibus mattis. Suspendisse pellentesque
          tortor.
        </p>
        <h3 className={styles.header}>Our Mission</h3>
        <p className={styles.body}>
          Vivamus suscipit leo sed mi tempus, in eleifend diam varius. Nulla
          molestie iaculis tristique. Morbi maximus consequat velit a pulvinar.
          Sed blandit dignissim orci. Nunc rhoncus malesuada lectus. Fusce nec
          posuere sem. Donec faucibus sapien at orci vehicula maximus.
        </p>
      </div>
      <div className={styles.profiles}>
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
      </div>
      <Button className={styles.button}>Join The Team!</Button>
    </div>
  );
};

export default AboutUs;
