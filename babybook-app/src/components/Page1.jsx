import React, { Component } from 'react';
// import Book from "./Book"; 



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
      input: input
    });
    console.log(text.target.value);
  }
  // takes the data from input and save it to database 
  // handleSave(event) {
  //   event.preventDefault();
  //   this.props.handleSaveButton(this.state.input);
  // };

  

  render() {
    return (

<div className="Page1">

<div> <h1> this is the first page </h1></div>



<form  className="UserInput" onSubmit={this.props.handleSaveButton}>
    
 Hello Mum and Dad 
 
<input type="text" name="city" onChange={this.handleInput.bind(this)}/>

      <button>save</button>

</form>



     </div>
     

    
    );
  }
}
 

export default Page1;