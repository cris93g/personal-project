import React from "react";
import Button from "./Button";

const CartCard = props => {
  return (
    <div className="cartCard">
      <div className="image-container3">
        <img className="card-image3" src={props.food.image_url} />
      </div>
      <div className="description3">
        {props.food.name}
        <div>
          {props.food.category} {props.food.rating}
        </div>
        <div>${props.food.cost}</div>
        <div className="card-button">
          <Button onSubmit={props.onSubmit}> {props.text} </Button>
          <div className="updateButton">
            {"  "}
            <button className="updateButton1" onClick={props.onClick}>
              +
            </button>
            {"       "}
            {props.num}
            {"     "}
            <button className="updateButton2" onClick={props.onClick2}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
