import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";

import styles from './Navbar.module.css'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu secondary className={styles.links}>
      <Menu.Menu position="right">
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/GettingInvolved"
          name="how to get involved"
          active={activeItem === "how to get involved"}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/NewsAndEvents"
          name="news and events"
          active={activeItem === "news and events"}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/Resources"
          name="resources"
          active={activeItem === "resources"}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to="/AboutUs"
          name="about us"
          active={activeItem === "about us"}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
