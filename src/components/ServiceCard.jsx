import React from "react";

function ServiceCard(props) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <img src={props.imgURL} alt="" />
      </div>
    </div>
  );
};

export default ServiceCard;
