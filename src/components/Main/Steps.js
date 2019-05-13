import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Steps extends Component {
  render() {
    return (
      <div className="pt-4 steps-bg ">
        <div class="vc_empty_space">
          <span class="vc_empty_space_inner" />
        </div>
        <div className="row">
          <div class="section_custom_heading  ">
            <h2 class="responsive-h5 text-dark">Easy Steps</h2>
          </div>
        </div>
        <div className="row">
          <div className="section_custom_heading">
            <h2 className="subject-title-description text-dark">
              Just take few minutes
            </h2>
          </div>
        </div>

        <div class="under-title-border"> </div>

        <div className="row ">
          <div
            className="col-6  how-it-works-step-left"
            id="how-it-works-step-1 "
          >
            <div class="how-it-works-step-content-left">
              <header class="how-it-works-step-header">
                <h3 class="heading-3">1. Request Tutor</h3>
              </header>
              <p class="how-it-works-text ">
                Tell us what you want to learn, and where and when you want to
                learn it. Let us know if you have any specific learning
                accommodations or needs.
              </p>
            </div>
                   
          </div>
          <div className="col-6 how-it-works-step-graphic-right">
            <img
              src="img/step-1.png"
              alt=""
              class="how-it-works-image"
            />
                    <div class="vc_empty_space">
                        <span class="vc_empty_space_inner" />
                    </div>
                    <div class="vc_empty_space">
                        <span class="vc_empty_space_inner" />
                    </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-6 how-it-works-step-graphic-left">
            <img
                        src="img/step-2.png"
              alt=""
              class="how-it-works-image"
            />
                    <div class="vc_empty_space">
                        <span class="vc_empty_space_inner" />
                    </div>
                    <div class="vc_empty_space">
                        <span class="vc_empty_space_inner" />
                    </div>
          </div>
                

          <div
            id="how-it-works-step-2"
            class="how-it-works-step-right is-active  col-6"
          >
            
            <div class="how-it-works-step-content">
              <header class="how-it-works-step-header">
                <h3 class="heading-3">2. Receive personalized matches</h3>
              </header>
              <p class="how-it-works-text">
                We send your request to Gooroos who are a good fit, and you’ll
                get responses from tutors who are willing to help.
              </p>
            </div>

          </div>
        </div>
            <div className="row">
                <div
                    className="col-6 how-it-works-step-left is-active"
                    id="how-it-works-step-1"
                >
                    <div class="how-it-works-step-content-left">
                        <header class="how-it-works-step-header">
                            <h3 class="heading-3">3. Book and have a great first session - guaranteed!</h3>
                        </header>
                        <p class="how-it-works-text">
                            Book your favorite Gooroo match and learn with them in person! If you’re not satisfied for any reason with your first session, get another match and session - on us.
              </p>
                    </div>
                   
                </div>
                <div className="col-6 how-it-works-step-graphic-right">
                    <img
                        src="img/step-3.png"
                        alt=""
                        class="how-it-works-image"
                    />
                    <div class="vc_empty_space">
                        <span class="vc_empty_space_inner" />
                    </div>
                    <div class="vc_empty_space">
                        <span class="vc_empty_space_inner" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 how-it-works-step-graphic-left">
                    <img
                        src="img/step-4.png"
                        alt=""
                        class="how-it-works-image"
                    />
                    <div class="vc_empty_space">
                        <span class="vc_empty_space_inner" />
                    </div>
                    <div class="vc_empty_space">
                        <span class="vc_empty_space_inner" />
                    </div>
                </div>

                <div
                    id="how-it-works-step-2"
                    class="how-it-works-step-right is-active  col-6"
                >
                   
                    <div class="how-it-works-step-content">
                        <header class="how-it-works-step-header">
                            <h3 class="heading-3">4. Receive feedback</h3>
                        </header>
                        <p class="how-it-works-text">
                            We send your request to us who are a good fit, and you’ll
                            get responses from tutors who are willing to help.
              </p>
                    </div>
                    
                </div>
            </div>
      </div>
    );
  }
}
export default Steps;

// <div class="col-sm-12 col-md-12 side-content">
//     <div class="bs-vertical-wizard">
//         <ul>
//             <li class="complete">
//                 <a href="#">1 <i class="ico fa fa-check ico-green"></i>
//                     <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cumque.</span>
//                 </a>
//             </li>

//             <li class="complete prev-step">
//                 <a href="#">2<i class="ico fa fa-check ico-green"></i>
//                     <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cumque.</span>
//                 </a>
//             </li>

//             <li class="complete">
//                 <a href="#">3 <i class="ico fa fa-check ico-green"></i>
//                     <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cumque.</span>
//                 </a>
//             </li>
//             <li class="complete prev-step">
//                 <a href="#">4 <i class="ico fa fa-check ico-green"></i>
//                     <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cumque.</span>
//                 </a>
//             </li>
//             <li class="complete prev-step">
//                 <a href="#">5 <i class="ico fa fa-check ico-green"></i>
//                     <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cumque.</span>
//                 </a>
//             </li>
//             <li class="complete prev-step">
//                 <a href="#">6 <i class="ico fa fa-check ico-green"></i>
//                     <span class="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cumque.</span>
//                 </a>
//             </li>
//             <li class="complete prev-step">

//             </li>
//         </ul>
//     </div>
// </div>
