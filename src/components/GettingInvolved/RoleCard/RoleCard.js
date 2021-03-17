import React from 'react';
import { Button, Card } from 'semantic-ui-react';

import styles from './RoleCard.module.css';

const RoleCard = props => {
  return (
    <Card className={styles.role_card_container}>
      <Card.Content>
        <Card.Header className={styles.role_card_header}>{props.position}</Card.Header>
        <Card.Description className={styles.role_card_desc}>{props.pos_desc}</Card.Description>
        <Card.Header className={styles.role_card_header}>Requirements</Card.Header>
        <Card.Description className={styles.role_card_desc}>{props.requirements}</Card.Description>
        <div className={styles.role_card_button_container}>
          <Button className={styles.role_card_button}>
            <a
              target="_blank"
              rel="noreferrer"
              styles={{ textDecoration: 'none' }}
              href={props.button_url}
            >
              Apply
            </a>
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default RoleCard;
