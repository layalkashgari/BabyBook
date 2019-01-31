import React, { Component } from 'react';
import Signup from './SignupForm';
import Signin from './Signin'; 


class Nav extends Component {
  constructor(){
    super()
    this.state = {
      auth: false
    }
  }
  // toggleSignin() {
  //   const signedin = !this.state.auth;
  //   this.setState({auth: signedin})

  // }

  render() {
    return (
      <div>
        <h1>Baby Book</h1>

        <Signup/> 
        
        <button onClick={this.state.Signup}> sign up </button>
      <Signin 
      
      />
     
        {/* <button id="favorite-btn" 
          className={this.state.auth ? 'sign in' : 'sign out'} 
          onClick={() => this. toggleSignin()}
        > 
          {this.state.auth ? 'sign out' : 'sign in'}
        </button> */}

      
      </div>
    );
  }
}

export default Nav;