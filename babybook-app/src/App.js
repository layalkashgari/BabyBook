import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import SignupForm from "./components/SignupForm"; 
import Button from "./components/Button"; 

class App extends Component {
  constructor(){
    super();
    this.state = {
      shows: [],
      activeShow: null,
      modal: false

    }
  } 

  componentDidMount(){
    // fetch all the data from our API
    // update our state "shows" with that data
    console.log('fetching data');
    fetch('http://localhost:3000/shows')
      .then( response => response.json())
      .then( data => {
        console.log(data);

        this.setState({
          shows: data
        })
      })
      .catch( error => {
        console.log(error)
      })
  }

  setCurrentShow(show) {
    console.log('setting show');
    console.log(show);
    this.setState({
      activeShow: show
    })
    // when given a show, set state 'activeShow' to that show
  } 
// when clicked on signup setCurrentShow(signup)
  // if active show is "signup" render singup form 

createUser(user) { 
  const url = "http://localhost:3000/users"
  fetch(url, {
method: 'POST', 

  }
  
    
    )
}
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Button/> 
          {/* <SignupForm  setCurrentShow={this.setCurrentShow.bind(this)}  />  */}
         
        </header>

     
      </div>
    );
  }
}

export default App;
