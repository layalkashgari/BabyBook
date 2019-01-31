import React, { Component } from "react";
import Input from "./common/Input";
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

//   handleSignup(name, email, password) {
//     let body = JSON.stringify({ name: this.state.data.email, email: this.state.data.email, password: this.state.data.password })

//     console.log("handleSignup", body)
//     fetch('http://localhost:3000/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: body,
//     }).then((response) => { return response.json() })
//         .then((session) => {
//             console.log(session)
            
//         })

// }
//   handleSubmit = () => {
//     // fetch data 
//   };
//   renderInput = (name, label, type = "text") => {
//     const { data } = this.state;

//     return (
//       <Input
//         type={type}
//         name={name}
//         value={data[name]}
//         label={label}
//         onChange={this.handleChange}
//       />
//     );
//   };

renderInput = (name, label, type = "text") => {
    const { data } = this.state;
} 

  render() {
    return (
      <section className="section  bg-light" id="Signup">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  <span className="font-weight-bold"> Hi </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <div className="form-kerri">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      {this.renderInput("name", "Your Name*")}
                    </div>
                    <div className="col-lg-6">
                      {this.renderInput("email", "Your Email*")}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      {this.renderInput("password", "Your password...")}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <button className="btn btn-primary"> Submit </button>
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

export default Signup;
