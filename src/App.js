import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation/Navigation";
import MainContent from "./components/Main/MainContent";
import { BrowserRouter as Router, Route,Swith } from "react-router-dom";
import Login from "./components/Main/Login"
import {withRouter} from 'react-router-dom'

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      isLogin:false,
      current_user:""

    }
    
  }

  LogOut=()=>{
    this.setState({
      isLogin: false,
      current_user: ""
})
  }
  render(){

  return (
    <div className="d-flex">
    <div className="d-inline-block">
      <Navigation/>
      </div>
      <div className="d-inline-block">
    
      <MainContent isLogin={this.state.isLogin} current_user={this.state.current_user} LogOut={this.LogOut}/>
        
      </div>
      
       
    </div>
  );
  }
}

export default withRouter(App);
