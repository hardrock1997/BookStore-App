import React, { Component } from 'react';
import classes from "../BookList/booklist.module.css";
import {BookConsumer} from '../../context';
import {withRouter} from 'react-router-dom';
import Temp from './temp'

export class SearchResults extends Component {    
    render() {
        const output = <BookConsumer>
        {value => {
          return <Temp value={value.books} search={this.props.location.pathname.split('/')[2]}/> 
        }}
      </BookConsumer>
        return (
          <div className={classes.container}>
            {output}
          </div>
        )
        }
}

export default withRouter(SearchResults)
