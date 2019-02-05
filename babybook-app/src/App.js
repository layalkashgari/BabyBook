import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.jsx";
// import SignupForm from "./components/Signup";
// import Signin from './components/Login';
import Landing from './components/Landing';
import Book from './components/Book';
// import Page1 from './components/Page1';
// import Page2 from './components/Page2';
import AllBooks from './components/AllBooks'
import { getUser, logout, getToken } from "./services/authService";
import AuthForm from "./components/AuthForm";
import Profile from "./components/Profile";
import { setToken, setUser } from "./services/authService";

// import Login from "./components/Login";

// things i wanna do: if the user is not authintaced dont show "album book" in the navbar. if the user isauthinitaced 
// if error 401 show passowrd is wrong 
//if user is not authinticated say if its authinticaed show <landing/> 

class App extends Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      activeShow: null,
      showBook: false,
      bookData: [],
      nextbtn: 'page1',
      // home: true, // to go to the landing page if its true 
      books: false,
      user: null,
      form: 'home',
      // name: '',
      // email: '', 
      // password: ''
    }
  }
  // ghadeer's auth 
  checkForUser() {
    const user = getUser();
    if (user) {
      this.setState({ user });
    }
  }

  checkToken(){ 
    const token = getToken(); 
    if (token) { 
      this.setState({ token })
    }
  } 

  componentDidMount() {
    this.checkForUser();
    this.checkToken(); 
  }
  // to change the sign in and singup forms 


  changeForm = type => {
    console.log(type);

    this.setState({
      form: type,
      home: false,
      showBook: false
    });
  };

  changeComponenet = type => {
    console.log(type);

    this.setState({
      form: type,

    });
  };


  login = () => {

    // set a state to chane the active page 
    const user = getUser();
    console.log('iii', user)
    this.setState({
      user,
      form: 'home'
    });


  };

  logout = () => {
    logout();
    this.setState({ user: null });
  };



  // whena book created - create all pages needed 

  // 

  // create a page 

  goLanding = () => {
    console.log('go to the homepage')
    this.setState({
      home: !this.state.active,
      showBook: false,
      books: false
    })
  }

  showAllBooks() {
    console.log('show me all my books')
    this.setState({
      books: !this.state.books,
      home: false,
      showBook: false
    })
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



  // handleSignin() { 
  //   this.setState({signedin: true})
  // }



  // to render the book page - change the state to true 
  handleCreateButton() {
    console.log('auth token ', localStorage.getItem('authToken'));
    let userId = getUser().id
    let userToken = getToken().auth_token
    console.log('auth token ', localStorage.getItem('authToken'));
    console.log('user token', getToken());

    console.log("this the user id that I want to be linked with the book ", userId , "and token is" , userToken )
    console.log(" clicked on create your own book - go to the book component");
    this.setState({
      showBook: !this.state.showBook,
      home: !this.state.home,
      form: ''
    })
    // fetch to create a new book for the user 
    const url = `http://localhost:3000/books`
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user_id: userId, name: "this is a test from the client book", auth_token: getToken() })
      //  body: JSON.stringify(show) this is removed because i dont want to send anything - and the parameter is also deleted because im not sendind any data e.x. book name 

    })
      .then(response => response.json())
      .then(data => {
        console.log('DATA')
        console.log(data);
        const bookData = this.state.bookData.concat([data]);
        this.setState({
          bookData: bookData
        })
      })
      .catch(error => {
        console.log(error);
      })

  }

  // handleSaveButton(data) {
  //   console.log('save button clicked')
  //   this.setState({
  //     bookData: data
  //   });

  //   // this.handleSaveButton(this.state.bookData); // what does this doo ? 
  // }


  // to save the text and image
  // handleSaveButton(text, image) {
  /* 
    posts data to the database, the database
    sends that same data back.
    add that data to the 'bookData' state
  */
  //   console.log(book)
  //   const url = 'http://localhost:3000/books'
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(book)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // }

  // fetch data and for the sign up button
  // createUser(user) {
  //   const userData = {
  //     "user" : {
  //       "name" : this.state.name,
  //       "email": this.state.email, 
  //       "password":this.state.password
  //     }
  //   }
  //   const url = "http://localhost:3000/users"
  //   fetch(url, {
  //     method: 'POST',
  //     mode: "cors", // no-cors, cors, *same-origin
  //       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //       credentials: "same-origin", // include, *same-origin, omit
  //       headers: {
  //           "Content-Type": "application/json",
  //           // "Content-Type": "application/x-www-form-urlencoded",
  //       },
  //       redirect: "follow", // manual, *follow, error
  //       referrer: "no-referrer", // no-referrer, *client
  //       body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   })
  //   .then(response => response.json()); // parses response to JSON   
  // }

  handleNextButton() {
    console.log('go to the next page')
    this.setState({
      nextbtn: 'page2'
    })
  }


  render() {
    return (
      <div className="app">
        <header className="App-header">
        </header>
        <Navbar
          user={this.state.user}
          changeForm={this.changeForm}
          changeComponenet={this.changeComponenet}
          logout={this.logout}
          showAllBooks={this.showAllBooks}
          goLanding={this.goLanding} />
        {/* Ghadeers */}

        <div className="container">
          {this.state.user ? (
            <Profile user={this.state.user} />
          ) : (
              ''
            )}

          {/* {this.state.user ? (
            <Profile user={this.state.user} />
          ) : (
           ''
          )} */}

          {this.state.form === 'signup' ? <AuthForm form={this.state.form} onLogin={this.login} /> : false}
          {this.state.form === 'login' ? <AuthForm form={this.state.form} onLogin={this.login} /> : ''}

        </div>

        {this.state.form === 'home' ? <Landing handleCreateButton={this.handleCreateButton.bind(this)} /> : ''}

        {this.state.form === 'AlbumBooks' ? <AllBooks /> : false}

        {/* {this.state.home ? <Landing handleCreateButton={this.handleCreateButton.bind(this)} /> : false} */}



        {this.state.showBook ? <Book handleNextButton={this.handleNextButton.bind(this)} /> : false}

        {/* {chech for active page then render the landing page } */}
      </div>
    );
  }
}

export default App;


{/* <Navbar handleSignup={this.handleSignup.bind(this)}/> */ }
{/* {this.state.activeShow === 'signup' ? <SignupForm /> : ''} */ }



{/* <Landing/> */ }

{/* {this.state.nextbtn ? <Page2 /> : false}  */ }
