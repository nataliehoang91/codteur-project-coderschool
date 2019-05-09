import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Steps.css"
class Steps extends Component {
    render(){
        return(
            <div>
            <h1>Easy Steps</h1>
                            <div class="row">
                    
                    <div class="col-sm-12 col-md-12 side-content">
                        <div class="bs-vertical-wizard">
                            <ul>
                                <li class="complete">
                                    <a href="#">1 <i class="ico fa fa-check ico-green"></i>
                                        <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cumque.</span>
                                    </a>
                                </li>

                                <li class="complete prev-step">
                                    <a href="#">2<i class="ico fa fa-check ico-green"></i>
                                        <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cumque.</span>
                                    </a>
                                </li>
                                
                                <li class="complete">
                                    <a href="#">3 <i class="ico fa fa-check ico-green"></i>
                                        <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cumque.</span>
                                    </a>
                                </li>
                            <li class="complete prev-step">
                                <a href="#">4 <i class="ico fa fa-check ico-green"></i>
                                    <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cumque.</span>
                                </a>
                            </li>
                            <li class="complete prev-step">
                                <a href="#">5 <i class="ico fa fa-check ico-green"></i>
                                    <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cumque.</span>
                                </a>
                            </li>
                            <li class="complete prev-step">
                                <a href="#">6 <i class="ico fa fa-check ico-green"></i>
                                    <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cumque.</span>
                                </a>
                            </li>
                            <li class="complete prev-step">

                            </li>
                            </ul>
                        </div>
                    </div>

                    

                </div>
        
        
            </div>
        
        
	
            
        );
    }
}
export default Steps;