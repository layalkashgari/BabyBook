import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';


class Book extends Component {
  constructor() {
    super()
    this.state = {
      pageNum: '1'

    }
  }

  // 

  // handleSaveButton(show) {
  //   /* 
  //     posts data to the database, the database
  //     sends that same data back.
  //     add that data to the 'shows' state
  //   */
  //  console.log(show)
  //  const url = 'http://localhost:3000/books'
  //  fetch(url, {
  //      method: 'POST',
  //      headers: {
  //        "Content-Type": "application/json"
  //      },
  //      body: JSON.stringify(show)
  //    })
  //    .then(response => response.json())
  //    .then(data => {
  //      console.log('DATA')
  //      console.log(data);
  //      const updatedShows = this.state.shows.concat([data]);
  //      console.log(updatedShows)
  //      this.setState({
  //        shows: updatedShows,
  //        activeShow: data,
  //        modal: false,
  //        search: false
  //      })
  //    })
  //    .catch(error => {
  //      console.log(error);
  //    })
  // }




  // to go to the secnd page when clicked on next button here 
  // handleNext() {
  //   console.log('go to the next page')
  //   this.setState({
  //     pageNum: this.state.pageNum + 1


  //   })

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
        <h1> Enjoy Creating Your Book - Book component

        </h1>



        <div className="nextbutton">

          {this.state.pageNum == '1' ? <Page1 /> : ''}
          {this.state.pageNum == '2' ? <Page2 /> : ''}
          {this.state.pageNum == '3' ? <Page3 /> : ''}
          {/* {this.state.nextbtn == 'Page2' ? <Page2 handleNextButton={this.handleNextButton.bind(this)} /> : ''}
          {this.state.nextbtn == 'Page3' ? <Page3 handleNextButton={this.handleNextButton.bind(this)}/> : ''}
           */}

          <button onClick={this.handlePage1.bind(this)}>Page 1</button>
          <button onClick={this.handlePage2.bind(this)}>Page 2</button>

          <button onClick={this.handlePage3.bind(this)}>Three </button>


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