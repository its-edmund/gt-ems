import React from 'react';
import { Button, Card } from 'semantic-ui-react';

import styles from './GettingInvolved.module.css'
import emergency from '../../assets/gt-emergency.png'

const GettingInvolved = () => {
	return (
		<>
			<div className={styles.jumbotron}>
				<h1 className={styles.jumbotron_title}>Join the GT EMS Community!</h1>
				<h2 className={styles.jumbotron_subtitle}>Praesent congue sodales magna, vitae tincidunt tortor vehicula a. Ut ut velit. Praesent congue sodales magna, vitae tincidunt tortor vehicula a. Ut ut velit.</h2>
				<Button className={styles.jumbotron_button}>Sed In.</Button>
			</div>
			<h2 className={styles.learnmore}>Learning more about our initiatives</h2>
			<div className={styles.initiatives}>
				<div className={styles.initiative}>
					<div className={styles.initiative_text}>
						<h2 className={styles.initiative_title}>Initiative 1</h2>
						<p className={styles.initiative_body}>Praesent congue sodales magna, vitae tincidunt tortor vehicula a. Ut ut velit. Praesent congue sodales magna, vitae tincidunt tortor vehicula a. Ut ut velit.</p>
					</div>
					<div className={styles.initiative_image} >
						<img className={styles.emergency} src={emergency} />
					</div>
				</div>
			</div>
		</>
	)
}

export default GettingInvolved;
