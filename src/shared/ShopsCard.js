import React from "react";
// import Button from "./Button";

const ShopsCard = props => {
  return (
    <div className="shopsCard">
      <div className="image-container">
        <img className="card-image" src={props.shop.image_url} />
      </div>
      <div className="description">
        {props.shop.name}
        <div>{props.shop.adress}</div>
        <div>{props.shop.contact}</div>
      </div>

      {/* <div className="card-button">  */}
      {/* <button onClick={this.onEdit}>Edit</button> */}
      {/* <Button onSubmit={props.onSubmit}> {props.text} </Button> */}
      {/* </div> */}
    </div>
  );
};

export default ShopsCard;
