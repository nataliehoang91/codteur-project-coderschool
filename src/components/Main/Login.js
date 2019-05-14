import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    message:""
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
            sessionStorage.setItem("current_user", data.current_user);
            this.props.LogIn(true,data.current_user);
            this.props.history.push('/');
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
    return (
      <div className="container">
        <div class="row justify-content-center form-white">
          <div class="col-md-6 mt-5">
            <div class="card bg-login bg-white">
              <div class="card-body">
                <h3 class="text-center default-text py-3">
                  <i class="fa fa-lock" /> Login:
                </h3>
                <div class="  text-center">
                  <a href="a" class="btn btn-block btn-facebook">
                    {" "}
                    <i class="fab fa-facebook-f" />   Login via facebook
                  </a>
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
                    class="btn login-form-button waves-effect waves-light"
                    onClick={this.handleSubmit}
                  >
                    Next
                  </button>
                  <p class="divider-text">
                    <span class="bg-light">OR</span>
                  </p>
                  <a href="/signup">
                    <button>Sign Up</button>
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
