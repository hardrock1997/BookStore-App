import React, { Component } from "react";
import Card from "../Card/Card";

export class temp extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    const search = this.props.search.toLowerCase();
    const filteredBooks = this.props.value.filter((book) => {
      if (book.title.toString().toLowerCase().includes(search)) return book;
      else return null;
    });
    this.setState({
      books: filteredBooks,
    });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.books.length ? (
          this.state.books.map((book) => {
            return <Card key={book.bookID} book={book} />;
          })
        ) : (
          <div>
            <strong>No items match your search</strong>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default temp;
