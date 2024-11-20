import React from "react";
import styles from "./Description.module.scss";

const Description = ({ description }) => {
  return (
    <div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Description;
