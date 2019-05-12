import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchform from "./SearchForm"

class MainSearch extends Component{

    render(){
        return (
             
            <div className="text-center bg-img bg-overlay">
                
                <div className="wrap">
                       
                  
                        <h3 className="title-font">FIND THE RIGHT TUTOR FOR YOU</h3>
    <Searchform />

                        
                
                        
                </div>
            </div>
                
                

        );
    }
}

export default MainSearch;


// <div class="row">
//     <div class="col-10">
//         <div class="countdown shadow clearfix">
//             <div class="card text-center ">
//                 <div class="row">
//                     <div class="col-4  box-count bord-right mt-2">
//                         <h5>Total Current Tutors</h5>
//                         <p class="figure-number animated zoomIn infinite">999</p>
//                     </div>
//                     <div class="col-4  box-count bord-right mt-2">
//                         <h5>Total Current Students</h5>
//                         <p class="figure-number">99,999</p>
//                     </div>
//                     <div class="col-4  box-count mt-2"><h5>Total Courses</h5>  <p class="figure-number">77</p></div>

//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
