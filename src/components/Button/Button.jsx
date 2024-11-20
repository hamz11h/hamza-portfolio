import React from "react";
import styles from "./Button.module.scss"; // Import SCSS styles

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children || "View Project"}
    </button>
  );
};

export default Button;
