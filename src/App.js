import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import MainContent from "./components/Main/MainContent";
import { BrowserRouter as Router, Route,Swith } from "react-router-dom";
import Login from "./components/Main/Login"
import {withRouter} from 'react-router-dom'

class App extends React.Component{
  
  render(){
  console.log(this.props)
  return (
    <div className="d-flex">
    <div className="d-inline-block">
      <Navigation isLogin={this.props.isLogin} current_name={this.props.current_user} user_img={this.props.user_img}/>
      </div>
      <div className="d-inline-block">
    
        <MainContent isLogin={this.props.isLogin} current_user={this.props.current_user} LogOut={this.props.LogOut} user_img={this.props.user_img}/>
        
      </div>
      
       
    </div>
  );
  }
}

export default withRouter(App);
