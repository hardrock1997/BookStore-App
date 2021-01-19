import React, { Component } from 'react'
import Card from '../Card/Card'

export class temp extends Component {
    constructor(props) {
        super(props);   
        this.state = {
          orgBooks: [],
        };
      }    

      componentDidMount() {
        this.getData();
      }
    
      getData() {
        this.setState({
          orgBooks: this.props.data,
        });
      }
    render() {

        return (
            <React.Fragment>
            {this.state.orgBooks.map((book) => {
              return <Card key={book.bookID} book={book} />;
            })}
          </React.Fragment>
        )
    }
}

export default temp
