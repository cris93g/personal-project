import React from "react";
// import Button from "./Button";

const UserCard = props => {
  return (
    <div className="userCard">
      <div className="image-container4">
        <img className="card-image4" src={props.f.preview} />
      </div>

      {/* <div className="card-button">  */}
      {/* <button onClick={this.onEdit}>Edit</button> */}
      {/* <Button onSubmit={props.onSubmit}> {props.text} </Button> */}
      {/* </div> */}
    </div>
  );
};

export default UserCard;
