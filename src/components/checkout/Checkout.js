import React, { Component } from "react";
import { BookConsumer } from "../../context";
import Heading from "./heading";
import List from './list'
import Total from "./total";

class Checkout extends Component {
  render() {
    return (
      <div>
        <BookConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <h1>Your Order</h1>
                  <Heading />
                  <List value={value} />
                  <Total value={value} />
                </React.Fragment>
              );
            } else {
              return <div>Nothing to Order</div>;
            }
          }}
        </BookConsumer>
      </div>
    );
  }
}

export default Checkout;
