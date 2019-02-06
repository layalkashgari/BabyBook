import React, { Component } from 'react';
import { setToken, setUser } from "../services/authService";
import { getUser, logout, getToken } from "../services/authService";



const API_URL = 'http://localhost:3000'


class OneBook extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }

fetchOneBook() { 
    console.log('in feetchhh')
    const url = API_URL + "/books?auth_token=/:id" + getToken();
    fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }      //  body: JSON.stringify(show) this is removed because i dont want to send anything - and the parameter is also deleted because im not sendind any data e.x. book name 

    })
      .then(response => response.json())
      .then(data => {
        console.log('DATA')
        console.log(data);
        this.setState({
          books: data
        })

      })
      .catch(error => {
        console.log(error);
      })
  }


  componentDidMount() {
    this.fetchAllBooks();
  } 

  render() {
    return (
      <div>
        <h1> ajeeb al name 7g al book  </h1>
        {/* <div className="tile" >
        {this.renderBooks(this.state.books)} 
        </div> */}

<div className="tile">

    
      <h2>  {this.renderBooks(this.state.books)} </h2>
    </div>



      </div>

    );
  }
}



  export default OneBook;