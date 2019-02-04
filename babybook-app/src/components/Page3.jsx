import React, { Component } from 'react';

class Page3 extends Component {
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

<div className="Pag31"> 

<h1> This is the third page page </h1>
<div className="UserInput">
     <p>  Lorem ipsum dolor sit amet  <input type="text" name="city" onChange={this.handleInput.bind(this)}/>
      consectetur agnam reprehenderit, laboriosam quibusdam sint totam consequuntur harum veritatis.  <input type="text" name="city" onChange={this.handleInput.bind(this)}/> inches </p>
</div> 

      <button onChange={this.handleInput.bind(this)}>save</button>


     </div>
     

    
    );
  }
}
 

export default Page3;