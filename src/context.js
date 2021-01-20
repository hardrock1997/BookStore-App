import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/navbar/Navbar";

const BookContext = React.createContext();

class BookProvider extends Component {
  state = {
    books: [],
    cart: [],
    cartTotal: 0,
    sortedBooks: [],
  };
  componentDidMount() {
    this.setBooks();
  }
  setBooks = () => {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json"
      )
      .then((res) => {
        let data = res.data.slice(0,400);    
        for (let i of data) {
          i.inCart = false;
          i.quantity = 0;
          i.total = 0;
        }
        this.setState(() => {
          return {books:[...data]}
        })
      })
  }
  getItem = (id) => {
    const product = this.state.books.find((item) => item.bookID === id);
    return product;
  };
  addToCart = (id) => {
    let tempBooks = [...this.state.books];
    const index = tempBooks.indexOf(this.getItem(id));
    const book = tempBooks[index];
    book.inCart = true;
    book.quantity = 1;
    const price = book.price;
    book.total = price;
    this.setState(
      () => {
        return {
          books: tempBooks,
          cart: [...this.state.cart, book],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  incrementHandler = (id) => {
    let tempCart = [...this.state.cart];
    const selectedBook = tempCart.find((item) => item.bookID === id);
    const index = tempCart.indexOf(selectedBook);
    const book = tempCart[index];
    book.quantity += 1;
    book.total = book.quantity * book.price;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrementHandler = (id) => {
    let tempCart = [...this.state.cart];
    const selectedBook = tempCart.find((item) => item.bookID === id);
    const index = tempCart.indexOf(selectedBook);
    const book = tempCart[index];
    book.quantity -= 1;
    if (book.quantity === 0) this.removeItemHandler(id);
    else {
      book.total = book.quantity * book.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeItemHandler = (id) => {
    let tempBooks = [...this.state.books];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.bookID !== id);
    const index = tempBooks.indexOf(this.getItem(id));
    let removedBook = tempBooks[index];
    removedBook.inCart = false;
    removedBook.quantity = 0;
    removedBook.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          books: [...tempBooks],
        };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clearCartHandler = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setBooks();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    this.setState(() => {
      return {
        cartTotal: subTotal,
      };
    });
  };
  render() {
    return (
      <BookContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          increment: this.incrementHandler,
          decrement: this.decrementHandler,
          removeItem: this.removeItemHandler,
          clearCart: this.clearCartHandler,
        }}
      >
        <Navbar />      
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

const BookConsumer = BookContext.Consumer;


export { BookProvider, BookConsumer };
