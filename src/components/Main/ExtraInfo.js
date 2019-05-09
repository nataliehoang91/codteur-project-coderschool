import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ExtraInfo extends Component{
    render(){
        return(
            <div>
            <h1>Courses</h1>
            <div class="card-group border test">
         
                <div class="card">
                        <img class="card-img-top" src="https://cdn-images-1.medium.com/max/1600/1*Lk7YWiSeDYGd-ITVUXbBbA.png" alt="Card image cap"/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            
                        </div>
  </div>
                    <div class="card">
                        <img class="card-img-top" src="https://www.shareicon.net/download/2015/09/11/99500_css3.svg" alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                               
                            </div>
  </div>
                        <div class="card">
                    <img class="card-img-top" src="https://miro.medium.com/max/444/1*pv6LE99Taf7usoD34Bgv4w.png" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    
                                </div>
  </div>
                <div class="card">
                    <img class="card-img-top" src="http://www.stephanybatista.com/wp-content/uploads/2016/01/nodejs1.png" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>

                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://aptonic.com/blog/wp-content/uploads/2015/08/python-logo.png" alt="Card image cap" />
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

