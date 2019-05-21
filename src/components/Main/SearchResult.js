import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    withRouter
} from 'react-router';
import Navigation from "../Navigation/Navigation"
import SubNav from "./SubNav"
import { Dropdown } from "semantic-ui-react";

class SearchResult extends Component{
    render(){
        const { state } = this.props.history.location
        console.log(state)
        console.log(state.tutors[0].email)

        return(
<div className="bg-result-page">
< div className = "d-flex" >
    <div className="d-inline-block">
      <Navigation />
      </div>
      <div className="d-inline-block w-100 ">
   <SubNav/>
   < div className = "row result-adjust-posiiton" >
   <div className="container">
   <h1 className="text-warning text-center">LIST OF TUTORS MATCHED YOUR REQUEST</h1>
   <div class="search-bar-results horizontal">
        <form
          name="hemispherebundle_offer_search"
          id="search-form"
          // class="main-search border-less-inputs background-dark narrow"
          class="ui form"
          
        >
          <div class="fields">
            
            <div class="eight wide field">
              <Dropdown
                placeholder="Rating"
                fluid
                search
                selection
               
              />
            </div>

            <div class="eight wide field">
              <Dropdown
                placeholder="All price"
                fluid
                search
                selection
                options
                
              />
            </div>

            
          </div>
        </form>
        <div>
          
        </div>
       
      </div>
        {state.tutors.map(item=>{
              return(
            <div className="">
             
                  <section class="tutor-list-result" aria-label="testimonal">
                    <div className="row ">
                      <div class="col-md-5 text-dark">
                        <img
                          class="img-responsive-a"
                          src = "https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                          alt="hh"
                         
                        />
                        <p className="result-title">Name:<span className="result-content"> {item.name}</span></p>
                        
                        <p className="result-title"> Subject:<span className="result-content"> {item.subject}</span></p>
                      </div>
                      <div class="col-md-7">
                        <div aria-label="testimonial comment">
                        
                        
                         <p className="result-title">Rate per hour: <span className="result-content"> {item.hourly_rate}</span></p>
                         <blockquote className="text-dark"aria-label="testimonial comment">
                          "Lorem Ipsum is simply dummy text of the printing
                          and typesetting industryLorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took make a "
                         
                        </blockquote>
                        <button className="btn btn-chat">CHAT WITH TUTOR</button> <button className="btn btn-book">BOOK NOW</button>
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
   <a href="/" className="text-right">Back to homepage</a>
</div>





          


        );
    }
}

export default withRouter(SearchResult);