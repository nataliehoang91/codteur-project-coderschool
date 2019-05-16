import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    withRouter
} from 'react-router';
import Navigation from "../Navigation/Navigation"
import SubNav from "./SubNav"


class SearchResult extends Component{
    render(){
        const { state } = this.props.history.location
        console.log(state)
        console.log(state.tutors[0].email)

        return(

< div className = "d-flex" >
    <div className="d-inline-block">
      <Navigation />
      </div>
      <div className="d-inline-block ">
   <SubNav/>
        {state.tutors.map(item=>{
              return(
            <div>
            <p>{item.email}</p>
            
            
            
            </div>
            
              )
        
        
        })}
      </div>
      
       
    </div>






          


        );
    }
}

export default withRouter(SearchResult);