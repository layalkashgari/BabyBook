import React, { Component } from "react";
import Input from "./Input";
import Login from "./Login";
import Signup from "./Signup";
import { setToken, setUser } from "../services/authService";
class AuthForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        email: "",
        password: "",
        name: "" 
      }
    };
  }


  componentDidMount(){
      console.log(this.props.form , "\n\n\n\n ***********")
  }

  handleRequest(user) {
  console.log("\n\n\n\n\n\n" , "fetching data" , user)
    let apiUrl = "http://localhost:3000";

    apiUrl += this.props.form === "signup" ? "/users" : "/login";
    console.log(apiUrl);

   let data = this.props.form === "signup" ? { user } : user ; 
   // data in the stete?????? is equal to user 
  
    fetch(apiUrl, {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(data) // here user or data? 
    })
      .then(response => response.json())
      .then(data => {
        console.log('&&&&&&', data);
        setToken(data.auth_token);
        setUser(JSON.stringify(data)) // why not  setUser(data.name)
        this.props.onLogin();
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.handleRequest(this.state.data);
  };
  handleChange = ({ currentTarget: input }) => {
  
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });

    console.log(this.state.data)
  };

  renderInput = (name, lable, type = "text") => {
    const { data } = this.state;
    // const data = this.state.data

    return (
      <Input
        name={name}
        lable={lable}
        type={type}
        value={data[name]}
        onChange={this.handleChange}
      />
    );
  };

  render() {
    return (
      <div>
        {this.props.form === "signup" ? (
          <Signup
            renderInput={this.renderInput}
            handleSubmit={this.handleSubmit}
          />
        ) : ''}
{this.props.form === 'login' ? 
        (
          <Login
            renderInput={this.renderInput}
            handleSubmit={this.handleSubmit}
        /> ) : ''} 
        

      </div>
    );
  }
}

export default AuthForm;