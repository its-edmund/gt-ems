import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import {NavLink} from 'react-router-dom'
import classnames from 'classnames'

import styles from './Navbar.module.css';

const Navbar = () => {
	const [activeItem, setActiveItem] = useState("home");

	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<Menu className={styles.links} secondary>
			<Menu.Menu position="right">
				<Menu.Item
          className={classnames(styles.link, styles.Change, activeItem === "home" ? styles.active : "")}
          as={NavLink} to='/'
					name="home"
					active={activeItem === "home"}
					onClick={handleItemClick}
				/>
				<Menu.Item
          className={classnames(styles.link, styles.Change, activeItem === "how to get involved" ? styles.active : "")}
          as={NavLink} to='/GettingInvolved'
					name="how to get involved"
					active={activeItem === "how to get involved"}
					onClick={handleItemClick}
				/>
				<Menu.Item
          className={classnames(styles.link, styles.Change, activeItem === "news and events" ? styles.active : "")}
          as={NavLink} to='/NewsAndEvents'
					name="news and events"
					active={activeItem === "news and events"}
					onClick={handleItemClick}
				/>
				<Menu.Item
          className={classnames(styles.link, styles.Change, activeItem === "resources" ? styles.active : "")}
          as={NavLink} to='/Resources'
					name="resources"
					active={activeItem === "resources"}
					onClick={handleItemClick}
				/>
				<Menu.Item
          className={classnames(styles.link, styles.Change, activeItem === "about us" ? styles.active : "")}
          as={NavLink} to='/AboutUs'
					name="about us"
					active={activeItem === "about us"}
					onClick={handleItemClick}
				/>
			</Menu.Menu>
		</Menu>
	);
};

export default Navbar;
