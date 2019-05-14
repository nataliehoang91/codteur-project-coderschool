import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Signup extends Component {
   
    state = {username: "",
    email: "",
    password: "",
    message: "",
    classMessage:"",
    
}

    postUserSignup=(data)=> {
        const url = "http://localhost:5000/signup";
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    sessionStorage.setItem('current_user', data.username);
                    this.setState({ message: "Successful", classMessage: 'alert-success'})
                }
                else {
                    
                    this.setState({ message: "UnSuccessful", classMessage:'alert-danger' })
                }
            }
            )
    }

    handleInputOnChange = e => {
        console.log(e.target.name, e.target.value);
        this.setState(
            {
                [e.target.name]: e.target.value
            },
            () => {
                console.log(this.state);
            }
        );
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { username, email, password } = this.state;
        this.postUserSignup({ username, email, password });
    }
    render() {
        const color = `alert ${this.state.classMessage}`;
        return (
            <div className="container">
            {this.state.message ? (
                    <div className={color}>
                        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
                            ×</button>
                        <span class="glyphicon glyphicon-ok"></span>

                        {this.state.message}
                    </div>

            ):
                
                    
           (<span></span>)
            
            
            
            }
              
                




                <div class="row justify-content-center form-white">

                    <div class="col-md-6 mt-5">
                        <div class="card bg-login">
                            <div class="card-body">
                                <h3 class="text-center default-text py-3"><i class="fa fa-lock"></i> Login:</h3>
                                <div class="  text-center">
                                    <a href="a" class="btn btn-block btn-facebook"> <i class="fab fa-facebook-f"></i>   Login via facebook</a>
                                    <a href="a" class="btn btn-block btn-google"> <i className="fab fa-google-plus-g"></i>   Login via google</a>

                                    <p class="divider-text">
                                        <span class="bg-light">OR</span>
                                    </p>
                                    <p className="text-dark">Create New Account</p>
                                </div>
                                <div class="md-form">
                                    <i class="fas fa-user-alt prefix grey-text"></i>
                                    <input name="username" type="text" id="defaultForm-email" placeholder="Your Username" class="form-control" onChange={this.handleInputOnChange} />

                                </div> <div class="md-form">
                                    <i class="fa fa-envelope prefix grey-text"></i>
                                    <input name="email" type="text" id="defaultForm-email" placeholder="Your Email" class="form-control" onChange={this.handleInputOnChange} />

                                </div>
                                <div class="md-form">
                                    <i class="fa fa-lock prefix grey-text"></i>
                                    <input name="password" type="password" id="defaultForm-pass" placeholder="Your Password" class="form-control" onChange={this.handleInputOnChange} />

                                </div>
                                <div class="text-center">
                                    <button class="btn login-form-button waves-effect waves-light" onClick={this.handleSubmit}>Submit</button>
                                    <a href="/"> <button class="btn login-form-button waves-effect waves-light" >Proceed to homepage </button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Signup;
