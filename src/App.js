import React, { Component } from 'react';
import {Switch, Route} from "react-router-dom";
import BookList from './components/BookList/BookList'
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout'
import SearchResults from './components/SearchResults/SearchResults'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/searchResults/:searchTerm" component={SearchResults} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App
