import React from "react";
import Button from "./Button";

const ProductCard = props => {
  return (
    <div className="productCard">
      <div className="image-container2">
        <img className="card-image2" src={props.food.image_url} />
      </div>
      <div className="description2">
        {props.food.name}
        <div>
          {props.food.category} {props.food.rating}
        </div>
        <div>${props.food.cost}</div>
        <div className="card-button">
          <Button onSubmit={props.onSubmit}> {props.text} </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
