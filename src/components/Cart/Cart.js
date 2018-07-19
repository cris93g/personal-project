import React, { Component } from "react";
import CartCard from "../../shared/CartCard";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  componentDidMount() {
    axios.get("/api/cart").then(response => {
      console.log(response);

      this.setState({
        cart: response.data
      });
    });
  }

  deleteFromCart(food) {
    axios.delete(`/api/food/cart/${food.id}`).then(() =>
      axios.get("api/cart").then(response => {
        console.log(response);
        this.setState({
          cart: response.data
        });
      })
    );
    // .then(response => {
    //   this.setState({
    //     food: response.data
    //   })
    // this.setState({load: true})
    // });
  }
  updateQuantity = (id, quantity) => {
    if (quantity > 0) {
      axios
        .put("/api/update/" + id, { quantity })
        .then(() =>
          axios.get("api/cart").then(response => {
            console.log(response);
            this.setState({
              cart: response.data
            });
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
    console.log(this.state.cart);
    let cart = this.state.cart.map(food => {
      return (
        <div className="cart">
          <div className="cart-cards" key={food.id}>
            <CartCard
              food={food}
              key={food.id}
              text="Delete from Cart"
              onSubmit={() => this.deleteFromCart(food)}
              onClick={() => this.updateQuantity(food.id, food.quantity + 1)}
              num={  food.quantity  }
              onClick2={() => this.updateQuantity(food.id, food.quantity - 1)}
            
            />
           
          </div>
        </div>
      );
    });
    let total = this.state.cart.reduce(
      (tot, cur) => tot + cur.cost * cur.quantity,
      0
    );
    return (
      <div className="">
        <div className="cart_container">
          {cart}
          <div className="total">Total: ${total}</div>
        </div>
        <div className="order">
        <button className="my-button2" onClick="">Confirm and Pay
    </button>
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
export default Cart;
