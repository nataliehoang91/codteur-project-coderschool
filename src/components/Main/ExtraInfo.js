import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ExtraInfo extends Component{
    render(){
        return(
            <div className="pt-5">
                <div className="y-us-title text-center">
            <h2>Courses</h2>
                
                <span class="y-us-title-border"></span>
                </div>
            <div class="card-group pt-4 border-bottom justify-content-around">
         
                <div class="card-course">
                        <img class="card-img-course" src="https://cdn-images-1.medium.com/max/1600/1*Lk7YWiSeDYGd-ITVUXbBbA.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            
                        </div>
  </div>
                    <div class="card-course">
                        <img class="card-img-course" src="https://www.shareicon.net/download/2015/09/11/99500_css3.svg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                               
                            </div>
  </div>
                    <div class="card-course">
                    <img class="card-img-course" src="https://miro.medium.com/max/444/1*pv6LE99Taf7usoD34Bgv4w.png" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    
                                </div>
  </div>
                    <div class="card-course">
                    <img class="card-img-course" src="http://www.stephanybatista.com/wp-content/uploads/2016/01/nodejs1.png" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>

                    </div>
                </div>
                    <div class="card-course">
                    <img class="card-img-course" src="https://aptonic.com/blog/wp-content/uploads/2015/08/python-logo.png" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>

                    </div>
                </div>
                        </div>

            </div>
        );
    }
}
export default ExtraInfo;

