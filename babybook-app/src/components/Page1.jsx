import React, { Component } from 'react';
import Book from "./Book"; 



class Page1 extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
  }

// to get and save the text the info users enter in the page when filling out 
handleInput(text) {
    const input = text.target.value;
    this.setState({
      input
    });
    console.log(text.target.value);
  }
  // takes the data from input and save it to database 
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.input);
  };

  

  render() {
    return (

<div className="Page1">

<div> <h1> this is the first page </h1></div>
<form onSubmit={this.handleSubmit.bind(this)}>
      <div className="UserInput">
      You were born at <input type="text" name="city" onChange={this.handleInput.bind(this)}/>
      You were <input type="text" name="number" onChange={this.handleInput.bind(this)}/> inches 


      <button onSubmit={this.handleSubmit.bind(this)}>save</button>
</div> 
</form>



     </div>
     

    
    );
  }
}
 

export default Page1;