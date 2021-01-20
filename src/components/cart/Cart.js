import React, { Component } from "react";
import CartList from "./CartList";
import CartHeading from "./CartHeading";
import { BookConsumer } from "../../context";
import CartTotal from './CartTotal'
import classes from "./cartitem.module.css";

class Cart extends Component {
  render() {
    return (
      <div>
        <BookConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <CartHeading />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </React.Fragment>
              );
            } else {
              return <div className={classes.empty}>Cart is Empty</div>;
            }
          }}
        </BookConsumer>
      </div>
    );
  }
}

export default Cart;
