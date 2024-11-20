import React from "react";
import styles from "./Navbar.module.scss"; // Import the SCSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLeft}>Hamza Nadeem</div>
      <div className={styles.navbarRight}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </div>
    </nav>
  );
};

export default Navbar;
