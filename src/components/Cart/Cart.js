import React, { Component } from "react";
import CartCard from "../../shared/CartCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setTotal } from "../../ducks/actionsCreators";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  
  componentDidMount() {
    axios.get("/api/cart").then(response => {
      this.setState({
        cart: response.data
      });
      this.updateTotal();
    });
  }

  deleteFromCart(food) {
    axios.delete(`/api/food/cart/${food.id}`).then(() =>
      axios.get("api/cart").then(response => {
        this.setState({
          cart: response.data
        });
        this.updateTotal();
      })
    );
    // .then(response => {
    //   this.setState({
    //     food: response.data
    //   })
    // this.setState({load: true})
    // });
  }
  updateTotal() {
    let total = this.state.cart
      .reduce((tot, cur) => tot + cur.cost * cur.quantity, 0)
      .toFixed(2);
    this.props.dispatch(setTotal(total));
  }
  updateQuantity = (id, quantity) => {
    if (quantity > 0) {
      axios
        .put("/api/update/" + id, { quantity })
        .then(() =>
          axios.get("api/cart").then(response => {
            this.setState({
              cart: response.data
            });
            this.updateTotal();
          })
        )
        // .then(res => {
        //   this.setState({ cart: res.data })
        //   // this.setState({loading: true});
        // })
        .catch(console.log);
    }
    // else {
    //   axios
    //     .delete(`/api/food/delete/${id}`)
    //     .then(response => {
    //       this.setState({ cart: response.data });
    //     })
    //     .catch(console.log);
    // }
  };

  render() {
    let cart = this.state.cart.map(food => {
      return (
        <div className="cart" key={food.id}>
          <div className="cart-cards">
            <CartCard
              food={food}
              key={food.id}
              text="Delete from Cart"
              onSubmit={() => this.deleteFromCart(food)}
              onClick={() => this.updateQuantity(food.id, food.quantity + 1)}
              num={food.quantity}
              onClick2={() => this.updateQuantity(food.id, food.quantity - 1)}
            />
          </div>
        </div>
      );
    });
    return (
      <div className="">
        <div className="cart_container">
          {cart}
          <div className="total">Total: ${this.props.total}</div>
        </div>
        <div className="order">
          <Link to={"/checkout"}>
            <button className="my-button2" onClick="">
              Confirm and Pay
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import CartCard from "../../shared/CartCard";
// import axios from "axios";

// class Cart extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       food: []
//     };
//   }
//   componentDidMount() {
//     axios.get("/api/food/cart").then(response => {
//       this.setState({
//         food: response.data
//       });
//     });
//   }
//   deleteFromCart(food) {
//     axios.delete(`/api/food/cart/${food.id}`).then(response => {
//       this.setState({
//         food: response.data
//       });
//     });
//   }

//   render() {

//     return (
//       <div className="cart">
//         {this.state.food.map(food => (
//           <div className="cart-cards" key={food.id}>
//             <CartCard
//               food={food}
//               key={food.id}
//               text="Delete from Cart"
//               onSubmit={() => this.deleteFromCart(food)}
//             />
//           </div>
//         ))}
//       </div>

//     );

//   }
// }

const mapStateToProps = state => {
  return {
    total: state.total
  };
};
export default connect(mapStateToProps)(Cart);
