import React from 'react';
import ReactPlayer from "react-player"

import styles from './Resources.module.css'
import Layout from '../Layout'

const Resources = () => {
	return (
		<Layout>
			<div className={styles.container}>
				<h1>Resources</h1>
				<div className={styles.video}>
					<ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
				</div>
			</div>
		</Layout>
	)
}

export default Resources;
