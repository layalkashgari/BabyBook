import React, { Component } from 'react';




class Page2 extends Component {
  constructor(){
    super()
    this.state = {
      click: false,
      babyName: '',
      choseit: ''
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

<h1>Who am I? </h1>
<div className="UserInput">
     <p> My name is <input type="text" name="city" onChange={this.handleInput.bind(this)}/>
     Chose it for me :  <input type="text" name="city" onChange={this.handleInput.bind(this)}/> inches </p> 
</div> 

      <button>save</button>

       


     </div>
     

    
    );
  }
}
 

export default Page2;