import React, { Component } from 'react';
import Book from "./Book"; 
import Navbar from"./Navbar"; 
import Upload from"./Upload"; 



class Landing extends Component {
  constructor(){
    super()
    this.state = {
   
    }
  }

  render() {
    return (
      <div className= "landing">
     
<p> Photo books
In just 3 steps you can save your digital photos and tell your baby's stories in a photo book!Create your photo book by adding your digital photos. 

 </p>




        <div> 
            <button onClick={this.props.handleCreateButton}> Create Your Own Book </button>
        </div>

        


     
      </div>

    
    );
  }
}

export default Landing;