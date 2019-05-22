import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    withRouter
} from 'react-router';
import Navigation from "../Navigation/Navigation"
import SubNav from "./SubNav"
import { Dropdown } from "semantic-ui-react";

const LearningHours = [
  { key: "1", value: "1", text: "1" },
  { key: "2", value: "2", text: "2" },
  { key: "3", value: "3", text: "3" }

];

class SearchResult extends Component{

  state={
    selectedHour:"",
    amount:0

  }

  handleOnSeclectHour = (e, data) => {
    e.preventDefault()
    console.log(data);
    this.setState(
      {
        selectedHour: data.value

      },
      () => {
        console.log("Selected Hour: ", this.state.selectedHour);
      }
    );
  };




    render(){
      // const LearningHours = [
      //   { key: "1", value: "1", text: "1" },
      //   { key: "2", value: "2", text: "2" },
      //   { key: "3", value: "3", text: "3" }

      // ];
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
            
            </div>

            <div class="eight wide field">
             
            </div>

            
          </div>
        </form>
        <div className="text-right">
                        <a href="/">Back to homepage</a>
        </div>
       
      </div>
        {state.tutors.map(item=>{
              return(
            <div className="">
             
                  <section class="tutor-list-result" aria-label="testimonal">
                    <div className="row ">
                      <div class="col-md-4 text-dark">
                        <img
                          class="img-responsive-a"
                          src = "https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                          alt="hh"
                         
                        />
                        <p className="result-title">Name:<span className="result-content"> {item.name}</span></p>
                        
                        <p className="result-title"> Subject:<span className="result-content"> {item.subject}</span></p>
                        <p className="result-title">Rate per hour: <span className="result-content">VND {item.hourly_rate.toLocaleString()}</span></p>

                      </div>
                      <div class="col-md-7">
                        <div aria-label="testimonial comment">
                        
                        
                         <blockquote className="text-dark"aria-label="testimonial comment">
                            <p className="font-weight-bold">Background Sumamry</p>
                          {item.description}
                        </blockquote>
                        
                          <div class="search-bar-results horizontal">
                            <form
                              name="hemispherebundle_offer_search"
                              id="search-form"
                              // class="main-search border-less-inputs background-dark narrow"
                              class="ui form"

                            >
                              <div class="fields">

                                <div class="eight wide field d-flex align-items-center mr-5">
                                  <label className="mr-3">Hours</label>
                                  <Dropdown
                                    placeholder="Hours"
                                    fluid
                                    search
                                    selection
                                    options={LearningHours}
                                    onChange={this.handleOnSeclectHour}

                                  />

                                  
                                </div>

                                <div class="eight wide field d-flex align-items-center ">
                                  <label className="mr-3">Estimated Payment</label><span> VND{(this.state.selectedHour*item.hourly_rate).toLocaleString()}</span>
                                </div>
                                
                              </div>
                              <div className="field">
                              <div class="sixteen wide field ">
                                <label className="mr-1 text-left">Note to Tutor</label><textarea></textarea>
                              </div>
                              </div>
                            </form>
                            <div>

                            </div>

                          </div>
                          <div className="text-right">
                            <button className="btn btn-chat">CHAT WITH TUTOR</button> <a href="/enrollment"><button className="btn btn-book">BOOK NOW</button></a>
                          </div>
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
  
</div>





          


        );
    }
}

export default withRouter(SearchResult);