import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    withRouter
} from 'react-router-dom';
import { Dropdown } from "semantic-ui-react";

class Register extends Component{
    
    postTutorRegister = (data) => {
        const url = "http://localhost:5000/tutor";
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.success) {

                    this.setState({ message: "Successful", classMessage: 'alert-success' })
                }
                else {

                    this.setState({ message: "Unsuccessful", classMessage: 'alert-danger' })
                }
            }
            )
    }
    render(){
        return(

            <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from earning your own money!</p>
                        
                    </div>
                    <div class="col-md-9 register-right">
                       
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Apply as a Tutor</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text"  class="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                       
                                        <div class="form-group">
                                            <div class="maxl">
                                                <label class="radio inline">
                                                    <input type="radio" name="gender" value="male" checked/>
                                                        <span> Male </span> 
                                                </label>
                                                    <label class="radio inline">
                                                        <input type="radio" name="gender" value="female"/>
                                                            <span>Female </span> 
                                                </label>
                                            </div>
                                        </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <input type="email" class="form-control" placeholder="Your Email *" value="" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *" value="" />
                                                </div>
                                                
                                               
                                                <input type="submit" class="btnRegister" value="Register" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                    </div>
            
        );
    }
}

export default withRouter(Register);
