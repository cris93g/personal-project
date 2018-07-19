import React, { Component } from "react";
import axios from "axios";
import ShopsCard from "../../shared/ShopsCard";
import { Link } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: []
    };
  }
  componentDidMount() {
    axios
      .get("api/shops")
      .then(response => {
        console.log(response.data);
        this.setState({
          shops: response.data
        });
      })
      .catch(e => console.log(e.message));
  }

  render() {
    return (
      <div className="main">
        {this.state.shops.map(shop => (
          <div className="main-cards" key={shop.id}>
            <Link to={`/product/${shop.id}`}>
              <ShopsCard shop={shop} />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Main;
