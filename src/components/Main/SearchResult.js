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
   <div className="row">
   <div className="container">
   <h1>LIST OF TUTORS MATCHED YOUR REQUEST</h1>
        {state.tutors.map(item=>{
              return(
            <div className="bg-result-page">
             
                  <section class="testimonial" aria-label="testimonal">
                    <div class="row">
                      <div class="col-md-5">
                        <img
                          class="img-responsive-a"
                          src=""
                          alt="hh"
                         
                        />
                      </div>
                      <div class="col-md-7">
                        <div aria-label="testimonial comment">
                        <p>{item.name}</p>
                        <p>{item.phonenumber}</p>
                        <p>{item.subject}</p>
                          {item.email}
                          <cite aria-label="author of testimonial">
                          
                          </cite>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
           
            
            
            
            
            
              )
        
        
        })}
      </div>
      </div>
       </div>
    </div>






          


        );
    }
}

export default withRouter(SearchResult);