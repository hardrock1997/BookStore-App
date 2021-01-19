import React, { Component } from "react";
import classes from './checkout.module.css'

export class heading extends Component {
  render() {
    return (
        <div className={classes.table}>
          <div>Title</div>
          <div>Quantity</div>
          <div>Price</div>        
          <div>Total</div>
        </div>
    );
  }
}

export default heading;
