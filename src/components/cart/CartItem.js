import React from "react";
import classes from "./cartitem.module.css";

function CartItem(props) {
  return (
    <div className={classes.row}>
      <div><strong>{props.item.title}</strong></div>
      <div>Rs {props.item.price}</div>
      <div className={classes.plus}>
        <button
          onClick={() => {
            props.value.decrement(props.item.bookID);
          }}
        >
          -
        </button>
        <div>{props.item.quantity}</div>
        <button
          onClick={() => {
            props.value.increment(props.item.bookID);
          }}
        >
          +
        </button>
      </div>
      <div>{props.item.quantity}</div>
      <div> 
        <button className={classes.remove} onClick={() => {
            props.value.removeItem(props.item.bookID)
        }}>Remove</button>
      </div>
      <div>Rs {props.item.total}</div>
    </div>
  );
}

export default CartItem;
