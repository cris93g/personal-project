import React, { Component } from "react";
import axios from "axios";
import ProductCard from "../../shared/ProductCard";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [],
      user: {}
    };
  }
  componentDidMount() {
    axios.get("api/me").then(response => {
      this.setState({
        user: response.data
      });
    });
    // axios.get("/api/me").then(response => {
    //   console.log(response);
    // });
    axios
      .get(`api/food/${this.props.match.params.shopid}`)
      .then(response => {
        this.setState({
          food: response.data
        });
      })
      .catch(e => console.log(e.message));
  }

  addToCart = (quantity, food_id, user_id) => {
    axios
      .post("/api/addtocart", {
        quantity,
        food_id,
        user_id
      })

      .then(res => {
        // this.props.history.push("/");
      })
      .catch(console.log);
  };

  render() {
    return (
      <div className="product">
        {this.state.food.map(food => (
          <div className="product-cards" key={food.id}>
            <ProductCard
              food={food}
              key={food.id}
              text="Add To Cart"
              onSubmit={() => this.addToCart(1, food.id, 1)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Product;
