import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ExtraInfo extends Component {
  render() {
    return (
      <div className="subject-list ">
        <div class="vc_empty_space">
          <span class="vc_empty_space_inner" />
        </div>
        <div className="row">
          <div class="section_custom_heading ">
            <h2 class="responsive-h5">Subjects</h2>
          </div>
        </div>
        <div className="row">
          <div className="section_custom_heading">
            <h2 className="subject-title-description">
              Here are a few of the subjects are the most popular.
            </h2>
          </div>
        </div>

        <div class="under-title-border"> </div>

        <div class="vc_empty_space">
          <span class="vc_empty_space_inner" />
        </div>
        <div className="row">
          <div className="col-4 text-center">
            <div class="wpb_wrapper ">
              <div class="b_icon_list">
                <i class="img">
                  <img
                    className="subject-logo"
                    src="/img/rails.png"
                    alt="logo"
                  />
                </i>
                <p className="subject-title">Ruby on Rails</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="wpb_wrapper ">
              <div class="b_icon_list">
                <i class="img">
                  <img
                    className="subject-logo"
                    src="/img/swift.png"
                    alt="logo"
                  />
                </i>
                <p className="subject-title">Swift</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            {" "}
            <div class="wpb_wrapper ">
              <div class="b_icon_list">
                <i class="img">
                  <img
                    className="subject-logo"
                    src="/img/python.png"
                    alt="logo"
                  />
                </i>
                <p className="subject-title">Python</p>
              </div>
            </div>
          </div>
        </div>
        <div class="vc_empty_space">
          <span class="vc_empty_space_inner" />
        </div>
        <div className="row">
          <div className="col-4">
            <div class="wpb_wrapper ">
              <div class="b_icon_list">
                <i class="img">
                  <img className="subject-logo" src="img/js.png" alt="logo" />
                </i>
                <p className="subject-title">JavaScript</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="wpb_wrapper ">
              <div class="b_icon_list">
                <i class="img">
                  <img className="subject-logo" src="/img/php.png" alt="logo" />
                </i>
                <p className="subject-title">PHP</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            {" "}
            <div class="wpb_wrapper ">
              <div class="b_icon_list">
                <i class="img">
                  <img
                    className="subject-logo"
                    src="/img/react.png"
                    alt="logo"
                  />
                </i>
                <p className="subject-title">React</p>
              </div>
            </div>
          </div>
        </div>
        <div class="vc_empty_space">
          <span class="vc_empty_space_inner" />
        </div>
        <div className="row">
          <div className="col-4">
            <div class="wpb_wrapper ">
              <div class="b_icon_list">
                <i class="img">
                  <img className="subject-logo" src="img/html.png" alt="logo" />
                </i>
                <p className="subject-title">HTML5</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div class="wpb_wrapper ">
              <div class="b_icon_list">
                <i class="img">
                  <img
                    className="subject-logo"
                    src="img/jquery.png"
                    alt="logo"
                  />
                </i>
                <p className="subject-title">Jquery</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            {" "}
            <div class="wpb_wrapper ">
              <div class="b_icon_list">
                <i class="img">
                  <img
                    className="subject-logo"
                    src="img/mysql.png"
                    alt="logo"
                  />
                </i>
                <p className="subject-title">MySQL</p>
              </div>
            </div>
          </div>
        </div>
        <div class="vc_empty_space">
          <span class="vc_empty_space_inner" />
        </div>
      </div>
    );
  }
}
export default ExtraInfo;

// <div className="pt-5">
//     <div className="y-us-title text-center">
//         <h2>Courses</h2>

//         <span class="y-us-title-border"></span>
//     </div>
//     <div class="card-group pt-4 border-bottom justify-content-around">

//         <div class="card-course">
//             <img class="card-img-course" src="https://cdn-images-1.medium.com/max/1600/1*Lk7YWiSeDYGd-ITVUXbBbA.png" alt="Card image cap" />
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>

//             </div>
//         </div>
//         <div class="card-course">
//             <img class="card-img-course" src="https://www.shareicon.net/download/2015/09/11/99500_css3.svg" alt="Card image cap" />
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>

//             </div>
//         </div>
//         <div class="card-course">
//             <img class="card-img-course" src="https://miro.medium.com/max/444/1*pv6LE99Taf7usoD34Bgv4w.png" alt="Card image cap" />
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>

//             </div>
//         </div>
//         <div class="card-course">
//             <img class="card-img-course" src="http://www.stephanybatista.com/wp-content/uploads/2016/01/nodejs1.png" alt="Card image cap" />
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>

//             </div>
//         </div>
//         <div class="card-course">
//             <img class="card-img-course" src="https://aptonic.com/blog/wp-content/uploads/2015/08/python-logo.png" alt="Card image cap" />
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>

//             </div>
//         </div>
//     </div>

// </div>
