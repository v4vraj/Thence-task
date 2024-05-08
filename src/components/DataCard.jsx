import React from "react";

export const DataCard = ({
  title,
  subTitle,
  description,
  figure,
  additionalStyles,
  additionalHeadingStyles,
  additionalSubHeadingStyles,
}) => {
  return (
    <div className="card-container" style={{ ...additionalStyles }}>
      <div className="data">
        <img className="figure" src={figure} alt="" />
        <div className="d-flex align-items-end">
          <h2 style={{ ...additionalHeadingStyles }}>{title}</h2>
          <h4 style={{ ...additionalSubHeadingStyles }}>{subTitle}</h4>
        </div>
      </div>
      <div className="content">
        <p>{description}</p>
      </div>
    </div>
  );
};
