import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Dropdown } from "semantic-ui-react";

// Use your imagination to render suggestions.

class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      SubjectList: [],
      LocationList: [],
      CityList: [],
      selectedSubject:"",
      selectedLocation: "",
      tutors: []
    };
  }
  getSubjectList = async () => {
    let response = await fetch("http://localhost:5000/subject");
    let data = await response.json();
    this.setState(
      {
        SubjectList: data
      },
      () => console.log(this.state.SubjectList)
    );
  };

  getLocationList = async () => {
    let response = await fetch("http://localhost:5000/location");
    let data = await response.json();
    this.setState(
      {
        LocationList: data
      },
      () => console.log(this.state.LocationList)
    );
  };
handleOnSeclect = (e,data) =>{
  
  
  
  this.setState(
    {
      selectedSubject: data.value
    },
    () => {
      console.log(this.state.selectedValue);
    }
  );
}
  componentDidMount() {
    this.getSubjectList();
    this.getLocationList();
  }

  handleSubmit = async(e) => {
    e.preventDefault();
    let resp = await fetch(`http://localhost:5000/tutors?location=${this.state.selectedSubject}`);
    let result = await resp.json();
    console.log(result)
    this.setState({
      tutors: result
    },() => console.log(this.state.tutors))
      
    // Make a fetch request.
    // get the data
    // this.setState( data you receive )
  }
  render() {
    let SubjectListSelection = this.state.SubjectList.map(subject => { return { key:subject.id, value: subject.id, text:subject.name} });
    let LocationListSelection = this.state.LocationList.map(item => { return { key: item.id, value: item.id, text: item.name } });

    const learningMethodOptions = [
      { key: "1", value: "1", text: "Private" },
      { key: "2", value: "2", text: "Group" }
    ];

    const cityOptions = [
      { key: "1", value: "1", text: "Ho Chi Minh"},
      {
        key: "2", value: "2", text: "Hanoi"},
      { key: "3", value: "3", text: "Da Nang"}
    ];

    

    return (
      <div class="search-bar-home horizontal">
        <form
          name="hemispherebundle_offer_search"
          id="search-form"
          // class="main-search border-less-inputs background-dark narrow"
          class="ui form"
          onSubmit={e => this.handleSubmit(e)}
        >
          <div class="fields">
            <div class="five wide field">
              <Dropdown
                placeholder="Select Subject"
                fluid
                search
                selection
                options={SubjectListSelection}
                onChange={this.handleOnSeclect}
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
                options={LocationListSelection}
                
              />
            </div>

            <div className="two wide field">
              <a href={"/login/"}>
                <button
                  type="submit"
                  class="btn btn-default search-btn btn-block"
                >
                  Search
                </button>
              </a>
            </div>
          </div>
        </form>
        <div>
          { this.state.tutors.map (t => <li> {t.name} </li>)}
        </div>
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
