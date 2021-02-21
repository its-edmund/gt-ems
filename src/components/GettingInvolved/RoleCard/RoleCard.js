import React from "react";
import { Button, Card } from "semantic-ui-react";

import styles from "./RoleCard.module.css";

const RoleCard = () => {
  return (
    <Card className={styles.role_card_container}>
      {/* <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header className={styles.role_card_header}>Trainee</Card.Header>
        <Card.Description className={styles.role_card_desc}>
          Nullam quis metus vel erat bibendum euismod sit amet sit amet justo.
          Donec laoreet commodo lacus.
        </Card.Description>
        <Card.Header className={styles.role_card_header}>
          Requirements
        </Card.Header>
        <Card.Description className={styles.role_card_desc}>
          Donec laoreet commodo lacus.
        </Card.Description>
        <div className={styles.role_card_button_container}>
          <Button className={styles.role_card_button}>Apply</Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default RoleCard;
