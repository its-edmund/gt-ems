import React from 'react';
import { Button } from 'semantic-ui-react';

import styles from './GettingInvolved.module.css'
import emergency from '../../assets/gt-emergency.png'

const data = [
	{
		"title": "GT Emergency Announcements",
		"body": "Phasellus et lectus ac arcu mollis elementum id malesuada urna. Etiam pulvinar magna ut auctor dignissim. Maecenas non nulla vehicula, molestie lorem id, vestibulum lacus.",
		"hyperlink": "",
		"image": emergency
	},
	{
		"title": "Stamps Health Care",
		"body": "Duis eu sollicitudin eros. Donec aliquam dolor eget rutrum fringilla. Fusce tempor lectus et ornare auctor. Duis mi ipsum, congue.",
		"hyperlink": "",
		"image": emergency
	},
	{
		"title": "American Red Cross",
		"body": "Maecenas mauris nunc, porttitor et lacinia in, varius vel tortor. Fusce vel dictum nisl, et convallis velit. Nulla fringilla, risus.",
		"hyperlink": "",
		"image": emergency
	},
	{
		"title": "Emergency Medical Services",
		"body": "In nec consequat ligula. Aliquam faucibus velit nunc, non viverra eros mattis et. Suspendisse potenti. Praesent pharetra, est in dignissim.",
		"hyperlink": "",
		"image": emergency
	},
]

const roles = [

]

const GettingInvolved = () => {
	return (
		<>
			<div className={styles.jumbotron}>
				<h1 className={styles.jumbotron_title}>Join the GT EMS Community!</h1>
				<h2 className={styles.jumbotron_subtitle}>Praesent congue sodales magna, vitae tincidunt tortor vehicula a. Ut ut velit. Praesent congue sodales magna, vitae tincidunt tortor vehicula a. Ut ut velit.</h2>
				<Button className={styles.jumbotron_button}>Sed In.</Button>
			</div>
			<h2 className={styles.open_roles_header}>Open roles</h2>
			<div className={styles.open_roles}>
				{roles.length === 0 ? <div className={styles.no_roles}>There aren't any roles right now. Check back later!</div> : roles.map((role) => {
					return 1;
				})}
			</div>
			<h2 className={styles.learnmore}>Learning more about our initiatives ✅</h2>
			<div className={styles.initiatives}>
				{data.map((initiative, i) => (
					<div className={styles.initiative}>
						<div className={styles.initiative_text}>
							<h2 className={styles.initiative_title}>{"Initiative " + (i + 1) + ": " + initiative.title}</h2>
							<p className={styles.initiative_body}>{initiative.body}</p>
						</div>
						<div className={styles.initiative_image} >
							<img alt="GT Emergency Notification Logo" clssName={styles.emergency} src={initiative.image} />
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default GettingInvolved;
