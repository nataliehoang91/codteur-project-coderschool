import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Signup extends Component {
   

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
        const { username, password } = this.state;
        this.postUserLogin({ username: username, password: password });
    }
    render() {
        return (
            <div className="container">

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
