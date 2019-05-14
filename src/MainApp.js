import React, { Component } from "react";

import "./index.css";
import App from "./App";

import Login from "./components/Main/Login"
import Signup from "./components/Main/Signup"
import { BrowserRouter as Router, Route } from "react-router-dom";


class MainApp extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: false,
            current_user: ""

        }

    }

    LogOut = () => {
        this.setState({
            isLogin: false,
            current_user: ""
        })
    }

    LogIn=(isLogin)=>{
        this.setState({isLogin: isLogin})
    }

    handleUserInfo=(user)=>{
        this.setState({
            current_user: user
        })
    }
    render(){
        const childProps={isLogin:this.state.isLogin,current_user:this.state.current_user,LogOut:this.LogOut,LogIn:this.LogIn,handleUserInfo:this.handleUserInfo}
        return (

                <div>
                <Route path="/login" exact render={(props) => <Login {...props} {...childProps} />} />
                <Route exact path="/" render={(props) => <App {...props} {...childProps} />} />
                <Route path="/signup" render={(props) => <Signup {...props} {...childProps} />} />

                </div>
        );
    
}}

export default MainApp;

