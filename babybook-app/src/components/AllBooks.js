import React, { Component } from 'react';


class AllBooks extends Component {
  constructor(){
    super()
    this.state = {
     books: []
    }
  }


  // fetchBooks(){
  //   const url = API_URL + '/books';
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(data => this.setState({books: data}))
  //     .catch(console.log)
  // }

  // componentDidMount(){
  //   this.fetchBooks();
  // }

  render() {
    return (
      <div>
        {/* <h1>Baby Book</h1> */}

        <h1> here are all the books youve created</h1>
        



   


     
      </div>

    
    );
  }
}

export default AllBooks;