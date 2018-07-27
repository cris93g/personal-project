var stripe = require("stripe")("sk_test_eROE1pkR0utGcbnT8VWLRPtW");
module.exports = {
  getShops(req, res) {
    const db = req.app.get("db");
    db.shops
      .find()
      .then(shops => res.status(200).json(shops))
      .catch(console.log);
  },

  getFood(req, res) {
    const db = req.app.get("db");
    const { shopid } = req.params;

    db.shopsFood([shopid])
      // .find()
      .then(food => res.status(200).json(food))
      .catch(console.log);
  },

  getCart(req, res) {
    const db = req.app.get("db");
    db.cart([1])
      // db.cart(req.session.user_id)
      .then(cart => {
        return res.status(200).json(cart);
      })
      .catch(console.log);
  },

  addToCart(req, res) {
    const db = req.app.get("db");
    let { quantity, food_id, user_id } = req.body;
    db.cartItem([quantity, food_id, user_id])
      .then(item => {
        return res.status(200).send(item);
      })
      .catch(console.log);
  },
  // addToCart(req, res) {
  //   const db = req.app.get("db");
  //   let { id, quantity} = req.body;
  //   db.cart
  //     .insert({
  //       food_id: id,
  //       quantity,
  //       user_id: req.session.user_id
  //     })
  //     .then(resp => {
  //       return res.status(200).json(resp);
  //     })
  //     .catch(console.log);
  // },
  // checkForUserOrAdd(req, res, next) {
  //   if (req.session.user) {
  //     return next();
  //   } else {
  //     const db = req.app.get("db");
  //     db.food.insert({ session_id: req.sessionID }).then(user => {
  //       req.session.user = user;
  //       return next();
  //     });
  //   }
  // },

  deleteFromCart(req, res) {
    const db = req.app.get("db");
    db.query("delete from cart where id = $1", req.params.id).then(() => {
      // db.getCart([1])
      db.cart(req.session.food_id)
        .then(cart => {
          return res.status(200).json(cart);
        })
        .catch(console.log);
    });
  },










  // deleteAllFromCart(req, res) {
  //   const db = req.app.get("db");
  //   db.query("delete from cart where user_id = $1", req.params.id).then(() => {
  //     // db.getCart([1])
  //     db.cart(req.session.food_id)
  //       .then(cart => {
  //         return res.status(200).json(cart);
  //       })
  //       .catch(console.log);
  //   });
  // },









  updateCart(req, res) {
    const db = req.app.get("db");
    let { quantity } = req.body;
    db.cart.update({ id: req.params.id }, { quantity }).then(() => {
      db.cart(req.session.user_id)
        .then(cart => {
          return res.status(200).json(cart);
        })
        .catch(console.log);
    });
  },
  checkout(req, res) {
    const { token, total } = req.body;
    const stripePayload = {
      amount: Math.round(Number(total) * 100),
      currency: "usd",
      description: "Deliveroo Charge",
      source: token,
      statement_descriptor: "Somehting somehting"
    };
    const charge = stripe.charges.create(stripePayload);
    charge
      .then(data => {
        res.sendStatus(200);
      })
      .catch(e => {
        res.status(e.statusCode).send(e.message);
      });
  }
};
