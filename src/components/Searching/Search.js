import React, { Component } from "react";
import {Link} from 'react-router-dom'
import classes from './search.module.css'

export class Search extends Component {
    state = {
        text: ''
    }
    onChange = (e) => {
        this.setState(() => {
            return {text: e.target.value}
        })
    }
    
  render() {
    return (
      <div className={classes.inputBar}>
          <input
            type="text"
            name="text"
            placeholder="Search Books...."
            value={this.state.text}
            onChange={this.onChange}
          />
          <Link to={`/searchResults/${this.state.text}`}>Search</Link>
      </div>
    );
  }
}

export default Search;
