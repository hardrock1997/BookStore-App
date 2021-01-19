import React from "react";
import classes from './checkout.module.css'

function items(props) {
  return (
    <div className={classes.row}>
      <div>
        <strong>{props.item.title}</strong>
      </div>
      <div>Rs {props.item.price}</div>
      <div>{props.item.quantity}</div>
      <div>Rs {props.item.total}</div>
    </div>
  );
}

export default items;
