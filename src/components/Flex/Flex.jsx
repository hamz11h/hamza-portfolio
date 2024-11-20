import React from "react";
import cx from "clsx";
import styles from "./flex.module.scss";

const Flex = ({
  className,
  children,
  align,
  justify,
  direction,
  block,
  gap,
  wrap,
  style,
  compact,
}) => {
  const childNodes = React.Children.toArray(children);
  const nodes = childNodes.map((child, i) => {
    return compact ? (
      <React.Fragment key={`space-child-${i}`}>{child}</React.Fragment>
    ) : (
      <div key={`space-child-${i}`}>{child}</div>
    );
  });

  if (childNodes.length === 0) {
    return null;
  }

  const gapStyle = (React.CSSProperties = {
    gap,
    flexWrap: direction !== "vertical" && wrap,
  });

  return (
    <div
      className={cx(
        className,
        block ? styles.spaceFlex : styles.space,
        styles[`align-${align}`],
        direction === "vertical" && styles.vertical,
        justify && styles[`justify-${justify}`]
      )}
      style={{ ...gapStyle, ...style }}
    >
      {nodes}
    </div>
  );
};

export default Flex;

Flex.defaultProps = {
  align: "center",
  gap: 16,
  wrap: "wrap",
};
