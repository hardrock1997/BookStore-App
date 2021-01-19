import React from "react";
import { BookConsumer } from "../../context";
import classes from "./card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <BookConsumer>
        {(value) => (
          <React.Fragment>
            <div className={classes.cardHeading}>
              <div>{props.book.title}</div>
              <div>
                {Array(Math.floor(+props.book.average_rating))
                  .fill()
                  .map((_, i) => (
                    <div>⭐</div>
                  ))}
                +
              </div>
            </div>
            <div className={classes.cardContent}>
              <div className={classes.authors}><strong>{props.book.authors}</strong></div>
              <div className={classes.footer}>
                <div>Price INR: {props.book.price}</div>
                <button
                  className={classes.link}
                  disabled={props.book.inCart ? true : false}
                  onClick={() => {
                    value.addToCart(props.book.bookID);
                  }}
                >
                  {props.book.inCart ? 'Item Added to Cart' : 'Add to cart'}
                </button>
                
              </div>
            </div>
          </React.Fragment>
        )}
      </BookConsumer>
    </div>
  );
};

export default Card;
