import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import SignupForm from "./components/SignupForm";
import Signin from './components/Signin';
import Landing from './components/Landing';
import Book from './components/Book';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

class App extends Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      activeShow: null,
      showBook: false,
      bookData: [],
      nextbtn: 'page1',
      home: false, // to go to the landing page if its true 
      showAll: false

    }
  }

  goLanding() {
    console.log('go to the homepage')
    this.setState({
      home: !this.state.active,
    })
  }


  showBooks() {
    console.log('show all books for this user ')
    this.setState({ showAll: !this.state.showAll })
  }



  // setCurrentShow(show) {
  //   console.log('setting show');
  //   console.log(show);
  //   this.setState({
  //     activeShow: show,
  //     signedin: false
  //   })
  // when given a show, set state 'activeShow' to that show
  // }
  // when clicked on signup setCurrentShow(signup)
  // if active show is "signup" render singup form 

  handleSignup() {
    this.setState({ activeShow: 'signup' })
    console.log('signup')
  }

  // handleSignin() { 
  //   this.setState({signedin: true})
  // }



  // to render the book page - change the state to true 
  handleCreateButton() {
    console.log(" clicked on create your own book - go to the book component");
    this.setState({
      showBook: !this.state.showBook
    })

  }

  handleSubmit(data) {
    this.setState({
      bookData: data
    });

    this.handleSaveButton(this.state.bookData);
  }

  handleSaveButton(book) {
    /* 
      posts data to the database, the database
      sends that same data back.
      add that data to the 'bookData' state
    */
    console.log(book)
    const url = 'http://localhost:3000/books'
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(book)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  // fetch data and for the sign up button
  createUser(user) {
    const url = "http://localhost:3000/users"
    fetch(url, {
      method: 'POST',

    }


    )
  }
  handleNextButton() {
    console.log('go to the next page')
    this.setState({
      nextbtn: 'page2'
    })
  }

  // handleNextButton() {
  //   console.log('go to the next page')
  //   this.setState({ nextbtn: !this.state.nextbtn })

  // }





  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        
        <Navbar goLanding={this.goLanding.bind(this)}/> 

        {this.state.home ? <Landing/> : false }

        {this.state.showBook ? <Book handleNextButton={this.handleNextButton.bind(this)} /> : <Landing handleCreateButton={this.handleCreateButton.bind(this)} />}
      </div>
    );
  }
}

export default App;


{/* <Navbar handleSignup={this.handleSignup.bind(this)}/> */ }
{/* {this.state.activeShow === 'signup' ? <SignupForm /> : ''} */ }



{/* <Landing/> */ }

{/* {this.state.nextbtn ? <Page2 /> : false}  */ }
