import React, { Component } from 'react';




class Page2 extends Component {
  constructor(){
    super()
    this.state = {
      click: false,
      input: ''
    }
  }

// to get and save the text the info users enter in the page when filling out 
handleInput(text) {
    this.setState({
      input: text.target.value,
    })
    console.log(text.target.value);
  }



  render() {
    return (

<div className="Page2"> 

<h1> This is the second page </h1>
<div className="UserInput">
      Your Sister picked your name because <input type="text" name="city" onChange={this.handleInput.bind(this)}/>
      and it was  <input type="text" name="city" onChange={this.handleInput.bind(this)}/> inches 
</div> 

      <button>save</button>

       


     </div>
     

    
    );
  }
}
 

export default Page2;