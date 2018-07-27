import React from "react";
import { Switch, Route } from "react-router-dom";
import User from "./components/User/User";
import Main from "./components/Main/Main";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product/Product";
import Checkout from "./components/Checkout/Checkout";
import Confirmation from "./components/Confirmation/Confirmation";

export default (
  <Switch>
    <Route exact path="/" component={Main} />

    <Route path="/user" component={User} />
    <Route path="/cart" component={Cart} />
    <Route path="/main" component={Main} />
    <Route path="/product/:shopid" component={Product} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/confirmation" component={Confirmation} />
  </Switch>
);
