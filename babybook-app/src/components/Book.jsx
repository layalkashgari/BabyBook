import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Upload from './Upload';

import { setToken, setUser } from "../services/authService";
import { getUser, logout, getToken } from "../services/authService";


const API_URL = 'http://localhost:3000'

class Book extends Component {
  constructor() {
    super()
    this.state = {
      pageNum: '1',
     
    

    }


  }

  handleSaveButton(event) {

    console.log("\n\n\n\n\n\n handel submit btn" , this.state.motherName , 
    this.state.fatherName  )
    event.preventDefault();


    this.fetchdata({ content: this.state.fatherName, name: 'fatherName', page_id: this.state.page_id}) // this saves "the mothers name content " to the coloumn "name:"
    this.fetchdata({ content: this.state.motherName, name: "motherName", page_id: this.state.page_id }) // i did page id  // this motherName needs to be the same as the state name in order to update the state whenever the user wrtie sth 
    this.fetchdata({ content: this.state.babyName, name: "babyName", page_id: this.state.page_id }) // i did page id  // this motherName needs to be the same as the state name in order to update the state whenever the user wrtie sth 
    this.fetchdata({ content: this.state.choseIt, name: "chhoseIt", page_id: this.state.page_id }) // here
    this.fetchdata({ content: this.state.month1, name: "month1", page_id: this.state.page_id })
    this.fetchdata({ content: this.state.date, name: "date", page_id: this.state.page_id })
    this.fetchdata({ content: this.state.day, name: "day", page_id: this.state.page_id })
    this.fetchdata({ content: this.state.hospitalName, name: "hospitalName", page_id: this.state.page_id })
    this.fetchdata({ content: this.state.zodiac, name: "zodiac", page_id: this.state.page_id })
  }

// to create new texts 

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
 
  componentDidMount(){
    this.getData()
  }



  handleInput(event) {
    const input = event.target.value;
    const input_name = event.target.name
    const  imageurl = event.target.image; 
    const image = event.target.value; 
    this.setState({
      [input_name]: input,
      [imageurl]: image

    });
    console.log(event.target.value);
   
  }

  
 getData(){ 
  const url = API_URL + "/texts";
  fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data) // data im getting back 
      const motherName = data.find(text => text.name == "motherName") // loop and find the in the database
      const fatherName = data.find(text => text.name == "fatherName")  // can i add it here? 
      const babyName = data.find (text => text.name === "babyName")
      const choseIt = data.find (text => text.name === "choseIt") // here
      const date = data.find (text => text.name === "date")
      const day = data.find (text => text.name === "day")
      const time = data.find (text => text.name === "time")
      const hospitalName = data.find (text => text.name === "hospitalName")
      const month1 = data.find (text => text.name === "month1")
      const month2 = data.find (text => text.name === "month2") 
      // const bookName = data.find (text => text.name === "bookName") // move it to /books



      console.log(motherName, fatherName, babyName)


      this.setState({motherName: motherName.content,
        fatherName: fatherName.content,
        babyName: babyName.content,
        choseIt: choseIt.content,
      //  bookName: bookName.name,/// move it to /books fetch 
       month1: month1.content,
       month2: month2.content,
       day: day.content,
       date: date.content,
       time: time.content,
       hospitalName: hospitalName.content,
      })

    
    }).catch(e=> {console.log(e)})
}

// fetch for image upload 

setImgUrl(url) {
  this.setState({ imageurl: url });
}
 
getImage(){ 
  const url = API_URL + "/images";
  fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data) // data im getting back 
      const imageurl = data.find(image => image.image_url ) // loop and find the in the database
      
      this.setState({imageurl: imageurl.image_url
       
      })

    
    }).catch(e=> {console.log(e)})
}

// GET Images upload 

fetchImage(data){
  let userId = getUser().id
  let auth_token = getToken().auth_token // doesnt do nothing 
  const url = API_URL + "/images";

  fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({image: data , auth_token: auth_token })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data) // data im getting back 
    }).catch(e=> {console.log(e)})
}

componentDidMount(){
  this.getImage()
}



// editData(){ 
//   const url = API_URL + "/texts";
//   fetch(url, {
//     method: 'PUT',
//     headers: {
//       "Content-Type": "application/json"
//     },
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data) // data im getting back 
//       const motherName = data.find(text => text.name == "motherName") // loop and find the in the database
//       const fatherName = data.find(text => text.name == "fatherName")  // can i add it here? 
//       const babyName = data.find(text => text.name == "babyName")  // here
//       const choseIt = data.find(text => text.name == "choseIt") 
//       const month1 = data.find(text => text.name == "month1") 
//       const month2 = data.find(text => text.name == "month2") 
//       const day = data.find(text => text.name == "day") 
//       const date = data.find(text => text.name == "date") 
//       const time = data.find(text => text.name == "time") 
//       const hospitalName = data.find(text => text.name == "hospitalName") 
//       const bookName = data.find(text => text.name == "bookName")  // move it 
//       // const date = data.find(text => text.name == "date") 
//       // const date = data.find(text => text.name == "date") 
//       // const date = data.find(text => text.name == "date") 
//       // const date = data.find(text => text.name == "date") 
//       // const date = data.find(text => text.name == "date") 


  
//       console.log(motherName, fatherName, babyName, choseIt)


//       this.setState({motherName: motherName.content,
//         fatherName: fatherName.content,
//         babyName: babyName.content,
//         choseIt: choseIt.content,
//         month1: month1.content,
//         month2: month2.content,
//         day: day.content,
//         date: date.content,
//         time: time.content,
//         hospitalName: hospitalName.content,
  
//       })

    
//     }).catch(e=> {console.log(e)})
// }







  handlePage3() {
    console.log('go to page three')
    this.setState({
      pageNum: '3'
    })
  }

  handlePage1() {
    console.log('go to page one')
    this.setState({
      pageNum: '1'

    })


  }

  handlePage2() {
    console.log('go to page two')
    this.setState({
      pageNum: '2'

    })


  }


  // handleNextButton2 (){ 
  //   console.log('go to page three')

  //   this.setState ({ 

  //     nextbtn: 'Page3'

  //   })

  // }

  

  render() {
    return (
      <div className="book">

      <div className= "page-header" > 
      <h1 className=""> Enjoy Creating Your Baby's Book  </h1> 
      {/* i want to to put the user name here user.name  */}
      </div> 


        <div className="nextbutton">

          {this.state.pageNum == '1' ? <Page1 page={this.props.currentBook ? this.props.currentBook.pages[0] : {}} handleInput={this.handleInput.bind(this)}  handleSaveButton={this.handleSaveButton.bind(this)} componentDidMount={this.componentDidMount.bind(this)} getData={this.getData.bind(this) }  getImage={this.getImage.bind(this)} fetchImage={this.fetchImage.bind(this)} motherName={this.state.motherName} fatherName={this.state.fatherName} /> : ''} 
          {/* passed the name to the page from book to page  need to do this   motherName={this.state.motherName} fatherName={this.state.fatherName}   */}
          {this.state.pageNum == '2' ? <Page2  handleInput={this.handleInput.bind(this)}  handleSaveButton={this.handleSaveButton.bind(this)} componentDidMount={this.componentDidMount.bind(this)} getData={this.getData.bind(this) } babyName={this.state.babyName} choseIt={this.state.choseIt}   /> : ''}
          {this.state.pageNum == '3' ? <Page3    handleInput={this.handleInput.bind(this)}  handleSaveButton={this.handleSaveButton.bind(this)} componentDidMount={this.componentDidMount.bind(this)} getData={this.getData.bind(this) } month1={this.state.month1} month2={this.state.month2}  day={this.state.day} date={this.state.date} time={this.state.time}  hospitalName={this.state.hospitalName} /> : ''}
          {/* {this.state.nextbtn == 'Page2' ? <Page2 handleNextButton={this.handleNextButton.bind(this)} /> : ''}
          {this.state.nextbtn == 'Page3' ? <Page3 handleNextButton={this.handleNextButton.bind(this)}/> : ''}
           */}

         
          

         


<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item"><a className="page-link" href="#" onClick={this.handlePage1.bind(this)}>Page 1</a></li>
    <li class="page-item"><a className="page-link" href="#" onClick={this.handlePage2.bind(this)}>Page 2</a></li>
    <li class="page-item"><a className="page-link" href="#" onClick={this.handlePage3.bind(this)}>Page 3 </a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
 
        </div>

        {

  // {this.state.nextbtn  ? <Page2/> : <Page1/> }

  /* <button onClick={this.handleSaveButton}> Save </button> 

{this.state.nextbtn === 'true' ? <Page2/> : <Page1/> } */}



      </div>

    );
  }
}

export default Book;