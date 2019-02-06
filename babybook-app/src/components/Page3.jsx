import React, { Component } from 'react';
// import Book from "./Book"; 
import ImageUpload from './ImageUpload';
import { setToken, setUser } from "../services/authService";
import { getUser, logout, getToken } from "../services/authService";




const API_URL = 'http://localhost:3000'



class Page3 extends Component {
  constructor(){
    super()
    this.state = {
      page_id: '3',
      click: false,

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
//       everyone was waiting for me to between  <input type="text" name="month1" placeholder="Month" value= {this.props.month1} placeonChange={this.props.handleInput}/>
//       and 
//       <input type="text" name="month2" placeholder="Month" value= {this.props.month2} onChange={this.props.handleInput}/> and I came on 
//       <input type="text" name="day" placeholder="Day" value= {this.props.day} onChange={this.props.handleInput}/>  
//       <input type="text" name="date" placeholder="Date" value= {this.props.date}  onChange={this.props.handleInput}/> at 
//       <input type="text" name="time" placeholder="Time"  value= {this.props.time} onChange={this.props.handleInput}/> at
//      <input type="text" name="hospitalName" value= {this.props.hospitalName} placeholder="Hospital Name" onChange={this.props.handleInput}/>  My zodiac sign is  
//      <input type="text" name="zodiac" value= {this.props.zodiac}  placeholder="Zodiac sigh" onChange={this.props.handleInput} /> and Dad 

//        <button type="submit">save</button>
// </form> 




      </div>



    );
  }
}


export default Page3;


//   render() {
//     return (

// <div className="Page3"> 

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
// new
// import React, { Component } from 'react';
// // import Book from "./Book"; 
// import ImageUpload from './ImageUpload';
// import { setToken, setUser } from "../services/authService";
// import { getUser, logout, getToken } from "../services/authService";




// const API_URL = 'http://localhost:3000'



// class Page3 extends Component {
//   constructor(){
//     super()
//     this.state = {
//       page_id: '2',
//       click: false,
//       month1: '',
//      month2: ''
//     }
//   }

// // to get and save the text the info users enter in the page when filling out 
// handleInput(text) {
//     this.setState({
//       input: text.target.value,
//     })
//     console.log(text.target.value);
//   }


//   // to get and save the text the info users enter in the page when filling out 
//   handleInput(event) {
//     const input = event.target.value;
//     const input_name = event.target.name

//     this.setState({
//       [input_name]: input
//     });
//     console.log(event.target.value);
//   }

//   fetchdata(data){
//     let userId = getUser().id
//     let auth_token = getToken().auth_token // doesnt do nothing 
//     const url = API_URL + "/texts";

//     fetch(url, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({text: data ,  user_id: userId, name: "this doesnt show why/?", auth_token: auth_token })
//     })
//       .then(response => response.json())
//       .then(data => {
//         console.log(data) // data im getting back 
//       }).catch(e=> {console.log(e)})
//   }


//   // componentDidMoun

  

  


//   render() {
//     return (

//       <div className="Page1">

//         <div> <h1> this is the first page </h1></div>


// <form className="UserInput" onSubmit={(event) => this.props.handleSaveButton(event)}>
//       everyone was waiting for me to between  <input type="text" name="month1" placeholder="Month" placeonChange={this.props.handleInput}/>
//       and 
//       <input type="text" name="month2" placeholder="Month" onChange={this.props.handleInput}/> and I came on 
//       <input type="text" name="day" placeholder="Day" onChange={this.props.handleInput}/>  
//       <input type="text" name="date" placeholder="Date" onChange={this.props.handleInput}/> at 
//       <input type="text" name="time" placeholder="Time" onChange={this.handleInput.bind()}/> at
//      <input type="text" name="hospitalName" placeholder="Hospital Name" onChange={this.handleInput.bind()}/>  My zodiac sign is  
//      <input type="text" name="zodiac" value= {this.props.motherName}  placeholder="Zodiac sigh" onChange={this.props.handleInput} /> and Dad 

//        <button type="submit">save</button>
// </form> 




//       </div>



//     );
//   }
// }


// export default Page3;


//   // render() {
// //     return (

// // <div className="Page3"> 

// // <h1>Who am I? </h1>
// // <div className="UserInput">
// //      <p> My name is <input type="text" name="city" onChange={this.handleInput.bind(this)}/>
// //      Chose it for me :  <input type="text" name="city" onChange={this.handleInput.bind(this)}/> inches </p> 
// // </div> 

// //       <button>save</button>

       


// //      </div>
     

    
// //     );
// //   }
// // }
 

// // export default Page3;


// // import React, { Component } from 'react';

// // class Page3 extends Component {
// //   constructor(){
// //     super()
// //     this.state = {
// //       click: false
    
// //     }
// //   }

// // // to get and save the text the info users enter in the page when filling out 
// // handleInput(event) {
// //   const input = event.target.value;
// //   const input_name = event.target.name
// //   const uploaded_img = event.target.image
// //   this.setState({
// //     [input_name]: input
// //   });
// //   console.log(event.target.value);
// // }


  

// //   render() {
// //     return (

// // <div className="Page1"> 

// // {/* states: month1, month2,  day, date, time, hospitalName */}

// // <h1> I'm finally here </h1>
// // <form className="UserInput" onSubmit={(event) => this.props.handleSaveButton(event)}>
// //       everyone was waiting for me to between  <input type="text" name="month1" placeholder="Month" placeonChange={this.props.handleInput}/>
// //       and 
// //       <input type="text" name="month2" placeholder="Month" onChange={this.props.handleInput}/> and I came on 
// //       <input type="text" name="day" placeholder="Day" onChange={this.props.handleInput}/>  
// //       <input type="text" name="date" placeholder="Date" onChange={this.props.handleInput}/> at 
// //       <input type="text" name="time" placeholder="Time" onChange={this.handleInput.bind()}/> at
// //      <input type="text" name="hospitalName" placeholder="Hospital Name" onChange={this.handleInput.bind()}/>  My zodiac sign is  
// //      <input type="text" name="zodiac" value= {this.props.motherName}  placeholder="Zodiac sigh" onChange={this.props.handleInput} /> and Dad 
// // </form> 

// //       <button onChange={this.handleInput.bind()}>save</button>


// //      </div>
     

    
// //     );
// //   }
// // }
 

// // export default Page3;