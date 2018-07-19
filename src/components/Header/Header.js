import React, { Component } from "react";
import "../../App";
import { Link } from "react-router-dom";

class Header extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     slide: false
  //   };
  //   this.handleSlide = this.handleSlide.bind(this);
  // }
  // handleSlide() {
  //   this.setState({ slide: !this.state.slide });
  // }


  
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }
 
  render() {
    return (
      <div className="Header">
        <div>
          <Link to="/main">
            <img
              src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats/static/images/homepage/burger-image-550-0f1a479683.png"
              alt="logo"
              
            />
          </Link>
          <Link to='/product'>
          
          </Link>
        </div>
        <h1>DELIVOOO</h1>

        <div className="menu">
          <Link to="/user">
            <i className="fas fa-user" />
          </Link>
          <Link to="/cart">
            <i className="fas fa-shopping-cart" />
          </Link>
          <input type="search" className="input1"/>
        </div>
        {/* <div className={"App"}> */}
       {/* <nav className="nav"> */}
         {/* <span className="logo">Start Bootstrap</span> */}
         {/* <div className="links-container"> */}
         
           {/* <span onClick={this.handleSlide} className="ham"> &#9776; */}
           {/* </span> */}
         {/* </div> */}
       {/* </nav> */}
       {/* <div classsName="link2"> */}
       {/* <span className={!this.state.slide ? "links" : <Link to="/user"> */}
            {/* <i className="fas fa-user" /> */}
          {/* </Link>}></span> */}
          {/* <span className={!this.state.slide ? "links" : <Link to="/cart"> */}
            {/* <i className="fas fa-shopping-cart" /> */}
          {/* </Link> }></span> */}
       {/* </div> */}
     {/* </div> */}
      </div>
    );
  }
}

export default Header;
