import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TutorDisplay.css";


class TutorDisplay extends Component {
  render() {
    return (
        <div className="mt-5">
        <h1>Tutors</h1>
      <div class="d-flex justify-content-between">
            <div class="card">
                <img className="card-img border" src="/img/sample_tutor.png" alt="Card image cap"/>
                   
  </div>
            <div class="card">
                <img className="card-img border" src="/img/sample_tutor.png" alt="Card image cap" />

                
            </div>
            <div class="card">
                <img className="card-img border" src="/img/sample_tutor.png" alt="Card image cap" />
               

            </div>
            <div class="card">
                <img className="card-img border" src="/img/sample_tutor.png" alt="Card image cap" />


            </div>
      </div>
        <div class="d-flex justify-content-around">
            <div class="card">
                <img className="card-img border" src="/img/sample_tutor.png" alt="Card image cap" />

            </div>
            <div class="card">
                <img className="card-img border" src="/img/sample_tutor.png" alt="Card image cap" />


            </div>
            <div class="card">
                <img className="card-img border" src="/img/sample_tutor.png" alt="Card image cap" />


            </div>

        </div>
            <div class="d-flex justify-content-between">
                <div class="card">
                    <img className="card-img border" src="/img/sample_tutor.png" alt="Card image cap" />

                </div>
                <div class="card">
                    <img className="card-img border" src="/img/sample_tutor.png" alt="Card image cap" />


                </div>
                <div class="card">
                    <img className="card-img border" src="/img/sample_tutor.png" alt="Card image cap" />


                </div>
                <div class="card">
                    <img className="card-img-top  border" src="/img/sample_tutor.png" alt="Card image cap" />


                </div>
            </div>
        </div>
    );
  }
}

export default TutorDisplay;
