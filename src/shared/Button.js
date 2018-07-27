import React from "react";

const Button = props => {
  return (
    <button className="my-button" onClick={props.onSubmit}>
      {props.children}
    </button>
  );
};

export default Button;
