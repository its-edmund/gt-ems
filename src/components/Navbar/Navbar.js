import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
	const [activeItem, setActiveItem] = useState("");

	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<Menu secondary>
			<Menu.Menu position="right">
				<Menu.Item
          as={NavLink} to='/'
					name="home"
					active={activeItem === "home"}
					onClick={handleItemClick}
				/>
				<Menu.Item
          as={NavLink} to='/GettingInvolved'
					name="how to get involved"
					active={activeItem === "how to get involved"}
					onClick={handleItemClick}
				/>
				<Menu.Item
          as={NavLink} to='/NewsAndEvents'
					name="news and events"
					active={activeItem === "news and events"}
					onClick={handleItemClick}
				/>
				<Menu.Item
          as={NavLink} to='/Resources'
					name="resources"
					active={activeItem === "resources"}
					onClick={handleItemClick}
				/>
				<Menu.Item
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
