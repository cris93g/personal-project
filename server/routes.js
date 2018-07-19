const {
  getShops,
  getFood,
  addToCart,
  getCart,
  deleteFromCart,
  updateCart,
  checkForUserOrAdd
} = require("./foodCtrl");

module.exports = app => {
  app.get("/api/shops", getShops);
  // app.get("/api/food", getFood);
  app.get("/api/food/:shopid", getFood);
  app.get("/api/cart", getCart);
  app.post("/api/addtocart", addToCart);
  app.delete("/api/food/cart/:id", deleteFromCart);
  app.put("/api/update/:id", updateCart);
};
