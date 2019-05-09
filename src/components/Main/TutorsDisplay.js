import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



class TutorDisplay extends Component {
  render() {
    return (
        <div className="padding-title ">
            <div className="y-us-title text-center">
                <h2>Tutors</h2>

                <span class="y-us-title-border"></span>
            </div>
      <div class="d-flex justify-content-between">
            <div class="card-adjust">
                <img className="card-img border-adjuto-photo" src="/img/sample_tutor.png" alt="Card image cap"/>
                   <p>UI/UX</p>
  </div>
                <div class="card-adjust">
                <img className="card-img border-adjuto-photo" src="/img/sample_tutor.png" alt="Card image cap" />
                    <p>JS/React</p>
                
            </div>
                <div class="card-adjust">
                <img className="card-img border-adjuto-photo" src="/img/sample_tutor.png" alt="Card image cap" />
                    <p>Python</p>

            </div>
                <div class="card-adjust">
                <img className="card-img border-adjuto-photo" src="/img/sample_tutor.png" alt="Card image cap" />
                    <p>HTML/CSS</p>

            </div>
      </div>
        <div class="d-flex justify-content-around">
                <div class="card-adjust">
                <img className="card-img border-adjuto-photo" src="/img/sample_tutor.png" alt="Card image cap" />
                    <p>JS/React</p>
            </div>
                <div class="card-adjust">
                <img className="card-img border-adjuto-photo" src="/img/sample_tutor.png" alt="Card image cap" />
                    <p>Python</p>

            </div>
                <div class="card-adjust">
                <img className="card-img border-adjuto-photo" src="/img/sample_tutor.png" alt="Card image cap" />

                    <p>JS/React</p>
            </div>

        </div>
            <div class="d-flex justify-content-between">
                <div class="card-adjust">
                    <img className="card-img border-adjuto-photo" src="/img/sample_tutor.png" alt="Card image cap" />
                    <p>JS/React</p>
                </div>
                <div class="card-adjust">
                    <img className="card-img border-adjuto-photo" src="/img/sample_tutor.png" alt="Card image cap" />
                    <p>JS/React</p>

                </div>
                <div class="card-adjust">
                    <img className="card-img border-adjuto-photo" src="/img/sample_tutor.png" alt="Card image cap" />
                    <p>Python</p>

                </div>
                <div class="card-adjust ">
                    <img className="card-img  border-adjuto-photo" src="/img/sample_tutor.png" alt="Card image cap" />
                    <p>UI/UX</p>

                </div>
            </div>
        </div>
    );
  }
}

export default TutorDisplay;
