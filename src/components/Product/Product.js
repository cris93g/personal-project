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
    console.log(this.props.match.params);
    axios.get("api/me").then(response => {
      console.log(response.data);
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
        console.log(response.data);
        this.setState({
          food: response.data
        });
      })
      .catch(e => console.log(e.message));
  }

  addToCart = (quantity, food_id, user_id) => {
    console.log(quantity, food_id, user_id);
    axios
      .post("/api/addtocart", {
        quantity,
        food_id,
        user_id
      })

      .then(res => {
        console.log(res);
        // this.props.history.push("/");
      })
      .catch(console.log);
  };

  render() {
    console.log(this.state.food);
    console.log(this.props);
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
