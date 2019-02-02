import React, { Component } from 'react';
import Signup from './SignupForm';
import AllBooks from './AllBooks';
import Landing from './Landing';
// import Signin from './Signin'; 


class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      auth: false,
      showAll: false,

    }
  }
  toggleSignin() {
    console.log( 'sgin in button clicked')
    // const signedin = !this.state.auth;
    this.setState({auth: !this.state.auth})

  }



  render() {
    return (
      <div>
        <h1>Baby Book</h1>

        <button onClick={this.props.goLanding}> Home Page </button>
        <button onClick={this.props.handleSignup}> sign up </button>
      {/* <Signin 
      
      /> */}
     
        <button 
        
          onClick={() => this. toggleSignin()}
        > 
          {this.state.auth ? 'sign out' : 'sign in'}

         
        </button>



        <button onClick={this.props.showBooks}>Album Books</button>
        {this.state.showAll ? <AllBooks/> : ''}

      
      


        </div>

    );
  }
}

export default Navbar;