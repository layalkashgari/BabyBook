import React, { Component } from 'react';
import Book from "./Book"; 
import Navbar from"./Navbar"; 


class Landing extends Component {
  constructor(){
    super()
    this.state = {
   
    }
  }

  render() {
    return (
      <div className= "landing">
        <h1>This is the landing </h1>

        <div> 
            <button onClick={this.props.handleCreateButton}> Create Your Own Book </button>
        </div>

     
      </div>

    
    );
  }
}

export default Landing;