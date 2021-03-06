import React from "react";
import "./styles.scss";

const Tooltip = (props) => {
  return (
    <div data-testid="tooltip-container" className="tooltip">
      {props.children}
      <span className="tooltiptext">{props.message}</span>
    </div>
  );
};

export default Tooltip;
