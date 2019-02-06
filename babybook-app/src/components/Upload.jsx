import React, { Component } from 'react';
import axios from 'axios';

class Upload extends Component {
constructor(){
    super()

    this.state = {
        selectedFile: null,
        image_url: ''
    }
}

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
        console.log(event.target);
        // insures this keyword inside this methods keeps the 
    }

    fileUploadHandler = () => {
        const fd = new FormData(); // fd is a default JS object 
        fd.append(
            'image',
             this.state.selectedFile)
             console.log(this)
        fd.append('page_id', this.props.page)
        axios.post('http://localhost:3000/images', fd ,{ // post it to the url // data that should be sent to my DB 
        onUploadProgress: progressEvent => { 
            console.log('upload progress' +  Math.round(progressEvent.loaded / progressEvent.total * 100) + '%' )
        }} )
        .then(res => {
            this.setState({
                image_url: res.data.image_url
            })
            console.log(res.data.image_url);
  //   response as a promise 
  // 
         
    });  
    } 




    handleFile(event) {
        this.setState({
            image: event.target.files[0]
        })
    }

    


    render() {
        return (
            <div className="upload">
            <input 
            style={{display: 'none'}} 
            type="file" 
            onChange={this.fileSelectedHandler}
            ref={fileInput => this.fileInput = fileInput}/>  
            {/* // so react give me a reference to this input  */}


                {/* // <input style={{display: 'none'}}  */}
                {/* // type="file"
                //  onChange={this.fileSelectedHandler} 
                //  /> */}

                <button onClick={() => this.fileInput.click()}> Pick File</button>
                <button onClick={this.fileUploadHandler}>Upload</button>

                {this.state.image_url ? <img src={this.state.image_url} alt=""/> : ''}
                 
                 <input type="file" name="image" onChange={this.handleFile.bind(this)} />
        

            </div>
        )
    }
}  

export default Upload;



{/*                 
                {/* {/* <input type="file" onChange={this.fileChangedHandler}> */}
// <button onClick={this.uploadHandler}>Upload!</button> */} */}
