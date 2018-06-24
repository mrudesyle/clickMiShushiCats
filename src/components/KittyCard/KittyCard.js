import React from "react";
import "./KittyCard.css";

const KittyCard = props => (
  <div className="card">
    
      <a className="img-container">
        <img onClick={props.handleClick} alt={props.name} src={props.image} />
      </a>
  </div>
);

export default KittyCard;
