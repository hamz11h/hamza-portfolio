import React from "react"; // Import React
import styles from "./container.module.scss"; // Import the styles

const Container = ({ children, className = "", style = {}, ...rest }) => {
  return (
    <div
      className={`${styles.container} ${className}`.trim()} // Combine styles and additional class names
      style={{ ...style }} // Merge additional inline styles
      {...rest} // Spread any other props
    >
      {children}
    </div>
  );
};

export default Container;
