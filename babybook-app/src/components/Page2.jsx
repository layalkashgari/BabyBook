import React, { Component } from 'react';
// import Book from "./Book"; 
import ImageUpload from './ImageUpload';
import { setToken, setUser } from "../services/authService";
import { getUser, logout, getToken } from "../services/authService";




const API_URL = 'http://localhost:3000'



class Page2 extends Component {
  constructor(){
    super()
    this.state = {
      page_id: '2',
      click: false,
      babyName: '',
      choseIt: ''
    }
  }

// to get and save the text the info users enter in the page when filling out 
handleInput(text) {
    this.setState({
      input: text.target.value,
    })
    console.log(text.target.value);
  }


  // to get and save the text the info users enter in the page when filling out 
  handleInput(event) {
    const input = event.target.value;
    const input_name = event.target.name
    const uploaded_img = event.target.image
    this.setState({
      [input_name]: input
    });
    console.log(event.target.value);
  }

  fetchdata(data){
    let userId = getUser().id
    let auth_token = getToken().auth_token // doesnt do nothing 
    const url = API_URL + "/texts";

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({text: data ,  user_id: userId, name: "this doesnt show why/?", auth_token: auth_token })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data) // data im getting back 
      }).catch(e=> {console.log(e)})
  }


  // componentDidMoun

  

  


  render() {
    return (

      <div className="Page1">

        <div> <h1> this is the first page </h1></div>



        <form className="UserInput" onSubmit={(event) => this.props.handleSaveButton(event)}>
         
          My name is 
           <input type="text" name="babyName" value= {this.props.babyName}  placeholder="Baby's same" onChange={this.props.handleInput} /> Chose it for me:
           <input type="text" name="choseIt"  value= {this.props.choseIt}  placeholder="name of the person chose the name baby's name" onChange={this.props.handleInput} />

    {/* <label>Image: </label> <ImageUpload setImgUrl={this.setImgUrl.bind(this)} name="imageurl"  onChange={this.props.handleInput} /><br /> */}
 {/* <h3> please enter your book's name: <input type="text" name="babyName" onChange={this.handleInput.bind(this)} /> </h3> */}


          <button type="submit">save</button>
          {/* <button onClick={this.props.editData()}> EDITTTTT </button> */}

        </form>



      </div>



    );
  }
}


export default Page2;


//   render() {
//     return (

// <div className="Page2"> 

// <h1>Who am I? </h1>
// <div className="UserInput">
//      <p> My name is <input type="text" name="city" onChange={this.handleInput.bind(this)}/>
//      Chose it for me :  <input type="text" name="city" onChange={this.handleInput.bind(this)}/> inches </p> 
// </div> 

//       <button>save</button>

       


//      </div>
     

    
//     );
//   }
// }
 

// export default Page2;