import React, { Component } from "react";
class Signin extends Component {
    constructor() {
        super();
        this.state = {
            buttonType: "signin",
            data: {
                email: "",
                password: "",
                user: "", 
                token:""
            },
            session: null
        };
    }


    
   
    
        render() {
            return (
        <div>

      {/* <input type="text" name="email" onChange={this.handleChange.bind(this)}/>
      <input type="passowrd" name="password" onChange={this.handleChange.bind(this)}/>
      <button onClick={() => this.handleLogin()} >Sign in</button>  */}
      
        </div>
      );
    }
  }

  export default Signin; 





// if(session[0] == "Password incorrect"){
//     Attr("youre password is incorrect ")
// }
// // check response status
// // if 200, log in (show the proper page)
// // else if 401 (unauthorized), tell the user they're not authed
// console.log("Hi finish")
// // this.addNewSession(session)
// // debugger;


    /* getCurrentUser(currentUser) {
        return this.state.data.email;
    }

    getToken(token) {
        return this.state.data.token;
    } */

    //   checkAuth() {
//     if (response.status === 200) {

//         return reponse.json 
//     }
//     else if (response.status === 401 ){ 
//         return 


//     }
//       }
      
