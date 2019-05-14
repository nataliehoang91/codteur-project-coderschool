import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Autosuggest from "react-autosuggest";
import { Dropdown } from "semantic-ui-react";

// Use your imagination to render suggestions.

class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      SubjectList: []
     
    };
  }
  getSubjectList = async () => {
    let response = await fetch("http://localhost:5000/subjects");
    let data = await response.json();
    this.setState(
      {
        SubjectList: data
      },
      () => console.log(this.state.SubjectList)
    );
  };

  componentDidMount() {
    this.getSubjectList();
  }

  

  render() {

    const learningMethodOptions = [
      { key: "1", value: "1", text: "Private" },
      { key: "2", value: "2", text: "Group" }
    ];

    const cityOptions = [
      { key: "1", value: "1", text: "Ho Chi Minh" },
      { key: "2", value: "2", text: "Hanoi" },
      { key: "3", value: "3", text: "Da Nang" }
    ];
    
    const locationOptions = [
      { key: "1", value: "1", text: "Quan 1" },
      { key: "2", value: "2", text: "Quan 2" },
      { key: "3", value: "3", text: "Quan 3" },
    ];

    return (
      <div class="search-bar-home horizontal">
        <form
          name="hemispherebundle_offer_search"
          id="search-form"
          // class="main-search border-less-inputs background-dark narrow"
          class="ui form"
        >
          <div class="fields">
            <div class="five wide field">
              <Dropdown
                placeholder="Select Subject"
                fluid
                search
                selection
                options={this.state.SubjectList}
              />
            </div>
            <div class="three wide field">
              <Dropdown
                placeholder="Select Method"
                fluid
                search
                selection
                options={learningMethodOptions}
              />
            </div>
            <div class="three wide field">
              <Dropdown
                placeholder="Select City"
                fluid
                search
                selection
                options={cityOptions}
              />
            </div>

            <div class="three wide field">
              <Dropdown
                placeholder="Select City"
                fluid
                search
                selection
                options={locationOptions}
              />
            </div>

            <div className="two wide field">
              <button type="submit" class="btn btn-default search-btn btn-block">
                Search
              </button>
            </div>
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
