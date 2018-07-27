import React, { Component } from "react";
import { Link } from "react-router-dom";



class Confirmation extends Component {
  render() {
    return <div className="confirmation">
    <h1>Thank you for your order</h1>
    <Link to={"/main"}>
            <button className="my-button3" onClick="" >
              Back To Home
            </button>
          </Link>
    </div>
  }
}
export default Confirmation;
