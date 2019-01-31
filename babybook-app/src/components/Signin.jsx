import React, { Component } from "react";
import Input from "./common/Input";
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
    handleSubmit = (e) => {
        e.preventDefault()
        const buttonType = this.state.buttonType === "signin" ? "signup" : "signin";
        this.setState({
            buttonType: buttonType
        })
        this.handleLogin()
    };

  

    /* getCurrentUser(currentUser) {
        return this.state.data.email;
    }

    getToken(token) {
        return this.state.data.token;
    } */

    handleLogin(email, password) {
        let body = JSON.stringify({ email: this.state.data.email, password: this.state.data.password })

        console.log("handleLogin", body)
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        }).then((response) => { return response.json() })
            .then((session) => {
                //  is this right???? 
                //  if(response.status === 200) {
                //     return json ;
                //   } else {
                //     throw Error(`Request rejected with status ${response.status}`);
                //   }
                // })
                // .catch(console.error)

                // check response status
                // if 200, log in (show the proper page)
                // else if 401 (unauthorized), tell the user they're not authed
                console.log("Hi finish")
                this.addNewSession(session)
                // debugger;
            })

    }

//   checkAuth() {
//     if (response.status === 200) {

//         return reponse.json 
//     }
//     else if (response.status === 401 ){ 
//         return 


//     }
//       }
      


    addNewSession(session) {
        // debugger;
        // this.state = {
        //     buttonType: "signin",
        //     data: {
        //         email: "",
        //         password: "",
        //         user: "", 
        //         token:""
        //     },
        //     session: null
        // };

        // afham da 
        let newData = this.state = {
                    email: session.email,
                    user: session.name, 
                    token: session.auth_token
            };
        this.setState({
            data: newData,
        })
    }
   


    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    };

    renderInput = (name, label, type = "text") => {
        const { data } = this.state;

        return (
            <Input
                type={type}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
            />
        );
    };

    render() {
        return (



            <section className="section  bg-light" id="Signin">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>
                                    <span className="font-weight-bold">Say Hi</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <div className="form-kerri">
                                <form onSubmit={this.handleSubmit}>

                                    {/*  render if the user is not loged in */}
                                    {this.state.buttonType === "signin" ? (

                                        <div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    {this.renderInput("email", "Your Email*")}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    {this.renderInput("password", "Your password*", "password")}
                                                    {/* name of the inpt, label, type  */}
                                                </div>
                                            </div>
                                        </div>
                                    ) : ""
                                    }


                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* if the user is logged in render log in page */}

                                            {/* if its not */}
                                            {this.state.buttonType === "signin" ? <button className="btn btn-primary">  sign in </button> :
                                                <button className="btn btn-primary">  sign out </button>

                                            }




                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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

