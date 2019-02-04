import React, { Component } from 'react';
import Signup from './Signup';
import AllBooks from './AllBooks';
import Landing from './Landing';
// import Signin from './Signin'; 


// class Navbar extends Component {
//   constructor(){
//     super()
//     this.state = {
//       auth: false,
//       showAll: false,

//     }
//   }

const Navbar = ({ user, changeForm, logout, goLanding, showAllBooks }) => {
  return (


  // render() {
  //   return (
  //     <div >
        <ul> 
        {/* <div className="navbar"> */}
        <h1>Baby Book</h1>
      
        {/* <li> <button className="btn btn-primary" onClick={this.props.goLanding}> Home Page </button></li> */}
       {/* <li> <button  className="btn btn-primary" onClick={this.props.handleSignup}> sign up </button></li>  */}
      {/* <Signin 
      
      /> */}
     
       {/* <li> <button  className="btn btn-primary"
        
          onClick={() => this. toggleSignin()}
        > 
          {this.state.auth ? 'sign out' : 'sign in'}

         
        </button> </li> */}



        {/* <li> <button  className="btn btn-primary" onClick={this.props.showAllBooks}>Album Books</button></li>
        {this.state.showAll ? <AllBooks/> : ''} */}

      {/* </div> */}
       <ul className="navbar-nav">
       {/* <button className="btn btn-primary" onClick={() => goLanding()}> Home Page </button>
       <button  className="btn btn-primary" onClick={() =>showAllBooks()}>Album Books</button> */}
      <button> 
       <li
                className="nav-item active"
                onClick={() => changeForm("home")}
              >
                <div className="nav-link">Home</div>
              </li> </button>

              <h1> </h1>
              <button> 
                 <li
                
                onClick={() => changeForm("AlbumBooks")}
              >
                <div className="nav-link">Album Books</div>
              </li> </button>

          {// if the user is not authenticated
          !user && (
            <React.Fragment>
              <button> 
              <li
                className="nav-item active"
                onClick={() => changeForm("login")}
              >
                <div className="nav-link">Login</div>
              </li> </button>

             <h1> </h1>

             <button> 
              <li
                className="nav-item active"
                onClick={() => changeForm("signup")}
              >
                <div className="nav-link">Signup</div>
              </li>

              </button>
           
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <button>
              <li className="nav-item active" onClick={() => logout()}>
                <div className="nav-link">Logout</div>
              </li></button> 

              <h1> </h1>
              
            </React.Fragment>
          )
          
          // if the user authenticated
          }

        </ul>

        </ul>
      





        // </div>

    );
  }


export default Navbar;

//   toggleSignin() {
//     console.log( 'sgin in button clicked')
//     // const signedin = !this.state.auth;
//     this.setState({auth: !this.state.auth})

//   }