import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginFB from "../Navigation/LoginFB"

class Login extends Component {
  state = {
    email: "",
    password: "",
    message:"",
    isLoginFB:false,
    
    classMessage: ""
  };

  postUserLogin = data => {
    console.log(JSON.stringify(data))
    fetch("http://localhost:5000/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data =>
        this.setState({ isLogin: data.isLogin }, () => {
          if (this.state.isLogin) {
            localStorage.setItem("username", data.current_user);
            this.props.LogIn(true);
            this.props.handleUserName(data.current_user);
            console.log(data.current_user)
            this.props.history.push('/');
            }
          else{
            this.setState({ message: "Please signup", classMessage: 'alert-danger' })
          }
          
        })
      );
  };

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
  handleSubmit = event => {
    event.preventDefault();
    const { email, password,message } = this.state;
    this.postUserLogin({ email, password,message });
  };
  render() {
    const color = `alert ${this.state.classMessage}`;
    const responseFacebook = response => {
      console.log(response);
      if (response) {
        
        this.setState({
          
          isLoginFB: true
        }, () => console.log(response.picture.data.url));
        localStorage.setItem("username", response.name);
        localStorage.setItem("profilepic", response.picture.data.url);
        this.props.LogIn(true)
        this.props.handleUserName(response.name);
        this.props.handleUserImg(response.picture.data.url)
        this.props.history.push('/');
      }
     
    };
    return (
      <div className="container">
        {!this.props.isLogin ? (
          <div className={color}>
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">
              ×</button>
            <span class="glyphicon glyphicon-ok"></span>

            {this.state.message}
          </div>

        ) : (this.props.history.push('/'))



        }



        <div class="row justify-content-center form-white">
          <div class="col-md-6 mt-5">
            <div class="card bg-login bg-white">
              <div class="card-body">
                <h3 class="text-center default-text py-3">
                  <i class="fa fa-lock" /> Login:
                </h3>
                <div class="  text-center">
                  <LoginFB
                  responseFacebook={responseFacebook}
                        isLogin={this.state.isLogin}
                  />
                  <a href="a" class="btn btn-block btn-google">
                    {" "}
                    <i className="fab fa-google-plus-g" />   Login via google
                  </a>

                  <p class="divider-text">
                    <span class="bg-light">OR</span>
                  </p>
                </div>
                <div class="md-form">
                  <i class="fa fa-envelope prefix grey-text" />
                  <input
                    name="email"
                    type="text"
                    id="defaultForm-email"
                    placeholder="Your Email"
                    class="form-control"
                    onChange={this.handleInputOnChange}
                  />
                </div>
                <div class="md-form">
                  <i class="fa fa-lock prefix grey-text" />
                  <input
                    name="password"
                    type="password"
                    id="defaultForm-pass"
                    placeholder="Your Password"
                    class="form-control"
                    onChange={this.handleInputOnChange}
                  />
                </div>
                <div class="text-center">
                  <button
                    class="btn login-form-button waves-effect waves-light text-dark font-weight-bold"
                    onClick={this.handleSubmit}
                  >
                    LOGIN
                  </button>
                  <p class="divider-text">
                    <span class="bg-light">OR</span>
                  </p>
                  <a href="/signup">
                    <button className="btn login-form-button waves-effect waves-light text-dark font-weight-bold">Sign Up</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
