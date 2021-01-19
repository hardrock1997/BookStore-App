import React, { Component } from "react";
import classes from './cartitem.module.css'

class CartHeading extends Component {
  render() {
    return (
      <div className={classes.heading}>
        <div>Title</div>
        <div>Price</div>
        <div>Inc Dec</div>
        <div>Quantity</div>
        <div>Remove</div>
        <div>Total</div>
      </div>
    );
  }
}

export default CartHeading;
