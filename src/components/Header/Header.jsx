import React from "react";
import styles from "./Header.module.scss"; // Import the SCSS module

const Header = ({ title, subtitle }) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.headerTitle}>{title}</h1>
    </div>
  );
};

export default Header;
