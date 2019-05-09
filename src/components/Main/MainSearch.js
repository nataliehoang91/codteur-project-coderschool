import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainSearch.css";


class MainSearch extends Component{

    render(){
        return (
            <div>
            <div class="text-center bg-img">
                
                <div class="wrap">
                       
                    <div class="search">
                            <h1>FIND YOUR TUTOR</h1>
                        <input
                            type="text"
                           
                            placeholder="Location"
                        />
                        <input
                            type="text"
                            
                            placeholder="Subjects"
                        />
                        <button type="submit">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
            
                <div class="row">
                    <div class="col-10">
                        <div class="countdown shadow clearfix">
                            <div class="card text-center ">
                                <div class="row">
                                    <div class="col-4  box-count bord-right mt-2">
                                        <h5>Total Current Tutors</h5>
                                        <p class="figure-number">999</p>
                                    </div>
                                    <div class="col-4  box-count bord-right mt-2">
                                        <h5>Total Current Students</h5>
                                        <p class="figure-number">99,999</p>
                                    </div>
                                    <div class="col-4  box-count mt-2"><h5>Total Courses</h5>  <p class="figure-number">77</p></div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainSearch;