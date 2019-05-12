import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SearchForm extends Component {
  render() {
    return (
      <div class="search-bar-home horizontal">
        <form
          name="hemispherebundle_offer_search"
         
          id="search-form"
          class="main-search border-less-inputs background-dark narrow">
          <div class="input-row">
                    <input
                        className="input-search-style"
                        id="hemispherebundle_offer_search_latitude"
                        name="hemispherebundle_offer_search[latitude]"
                        placeholder="Offline/Online"
                        class="location"
                    />
                    <input
                        className="input-search-style"
                        id="hemispherebundle_offer_search_latitude"
                        name="hemispherebundle_offer_search[latitude]"
                        placeholder="1 On 1/Group"
                        class="location"
                    />
                    
            <input
                        className="input-search-style"
              id="hemispherebundle_offer_search_latitude"
              name="hemispherebundle_offer_search[latitude]"
              placeholder="Enter course"
              class="location"
            />
            <input
                        className="input-search-style"
              id="hemispherebundle_offer_search_longitude"
              name="hemispherebundle_offer_search[longitude]"
              placeholder="Choose Location"
              class="location"
            />
                    
                    <button type="submit" class="btn btn-default search-btn">
                        Search
              </button>
          
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;

// <div class="panel with-nav-tabs panel-default">
//     <div class="panel-heading">
//         <ul class="nav nav-tabs">
//             <li class="active"><a href="#tab1default" data-toggle="tab">1-ON-1</a></li>
//             <li><a href="#tab2default" data-toggle="tab">GROUP</a></li>

//         </ul>
//     </div>
//     <div class="panel-body">
//         <div class="tab-content">
//             <div class="tab-pane fade in active" id="tab1default">

//             </div>
//             <div class="tab-pane fade" id="tab2default">
//                 <form>
//                     <div className="form-group my-3">

//                         <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Course" />
//                         <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Location" />
//                     </div>
//                 </form>

//             </div>

//         </div>
//     </div>
// </div>
