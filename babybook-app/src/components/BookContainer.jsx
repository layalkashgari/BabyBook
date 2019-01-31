import React, { Component } from 'react';
import Book from './Book'


class BookContainer extends Component {
  renderBooks(arr) {
    const Books = arr.map((Book, index) => {
      return ( 
        <div 
          key={index} 
          onMouseOver={ () => { this.props.updateDisplay(index) } }
          onDoubleClick={ () => { this.props.addLikedBook(Book.title) } }
          >
          <Book source={Book.source} title={Book.title}/>
        </div>
      )
    });

    return Books
  }
  render() {
    return (
      <div id="Book-cont">
        {this.renderBooks(this.props.Books)}
      </div>
    );
  }
}

export default BookContainer;