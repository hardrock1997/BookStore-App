import React, { Component } from "react";
import classes from "./booklist.module.css";
import {BookConsumer} from '../../context';
import Card from '../Card/Card'

class BookList extends Component {
  
  render() {
    const output = <BookConsumer>
    {value => {
      return value.books.map(book => {
        return <Card key={book.bookID} book={book} />
      })
    }}
    </BookConsumer>
  
    return (
      <div className={classes.container}>
        {output}
      </div>
    )
  }
}

export default BookList;
