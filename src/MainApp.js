import React, { Component } from "react";

import "./index.css";
import App from "./App";

import Login from "./components/Main/Login"
import Signup from "./components/Main/Signup"
import SearchResult from "./components/Main/SearchResult"
import { BrowserRouter as Router, Route } from "react-router-dom";


class MainApp extends Component {
    constructor() {
        super()
        this.state = {
            isLogin: false,
            current_user: "",
            isLoginFB:false,
            user_img:""
            

        }

    }

    LogOut = () => {
        this.setState({
            isLoginFB:false,
            isLogin: false,
            current_user: ""
        })
        localStorage.clear()
    }

    LogIn=(isLogin)=>{
        this.setState({isLogin: isLogin})
    }

    fLogInFB=(isLoginFB)=>{
        this.setState({isLoginFB: isLoginFB})
    }

    handleUserName=(user)=>{
        this.setState({
            current_user: user
        })
    }
    handleUserImg = (user) => {
        this.setState({
            user_img: user
        })
    }
    render(){
        const childProps={isLogin:this.state.isLogin,current_user:this.state.current_user,LogOut:this.LogOut,LogIn:this.LogIn,handleUserName:this.handleUserName,fLoginFB:this.fLogInFB,handleUserImg:this.handleUserImg,user_img:this.state.user_img}
        return (

                <div>
                <Route path="/login" exact render={(props) => <Login {...props} {...childProps} />} />
                <Route exact path="/" render={(props) => <App {...props} {...childProps} />} />
            <Route path="/signup" render={(props) => <Signup {...props} {...childProps} />} />
            <Route path="/results" render={(props) => <SearchResult {...props} {...childProps} />} />

            </div>
    );

}}

export default MainApp;

