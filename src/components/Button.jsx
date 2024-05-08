import React from "react";

export const Button = ({
  additionalStyles,
  label,
  sublabel,
  onClick,
  iconBefore,
  iconAfter,
}) => {
  return (
    <button
      className="btn outline-btn"
      type="button"
      style={{ ...additionalStyles }}
      onClick={onClick}
    >
      {iconBefore && <span className="button-icon before">{iconBefore}</span>}
      <div className="button-text">
        <span className="main-label">{label}</span>
        {sublabel && <span className="sub-label">{sublabel}</span>}
      </div>
      {iconAfter && <span className="button-icon after">{iconAfter}</span>}
    </button>
  );
};
