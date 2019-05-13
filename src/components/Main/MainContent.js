import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";
import Footer from "./Footer";
import SubNav from "./SubNav";
import MainSearch from "./MainSearch";
import TutorDisplay from "./TutorsDisplay";
import ExtraInfo from "./ExtraInfo";
import Steps from "./Steps"
import Why from "./Why"
import Testimonials from "./Testimonials"


class MainContent extends Component{
render(){
    return(
        <div>
        <SubNav isLogin={this.props.isLogin} current_user={this.props.current_user} LogOut={this.props.LogOut}/>
     
      <MainSearch/>
      <TutorDisplay/>
        <Steps />
        <Testimonials/>
      
      
      <Why/>
      
        <ExtraInfo />
      <Footer/>
        </div>
    )
}
}
 export default MainContent;