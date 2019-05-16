import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  withRouter
} from 'react-router-dom';
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
      tutors: [],
      responseMessage:"",
      classMessage: ""
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
handleOnSeclectLocation = (e,data) =>{
  
  this.setState(
    {
      selectedLocation: data.value
    },
    () => {
      console.log(this.state.selectedLocation);
    }
  );
}

handleOnSeclectSubject = (e, data) => {

  this.setState({
      selectedSubject: data.value
    },
    () => {
      console.log(this.state.selectedSubject);
    }
  );
}
  componentDidMount() {
    this.getSubjectList();
    this.getLocationList();
  }

   handleSubmitSearch = async(e) => {
    e.preventDefault();
    let resp = await fetch(`http://localhost:5000/tutors?location=${this.state.selectedLocation}&subject=${this.state.selectedSubject}`);
    console.log(resp)
    let result = await resp.json();
     if (result.success == false) {
       this.setState({

         responseMessage: "Not Found",
         classMessage: 'alert-danger'

       }, () => console.log(this.state.responseMessage))
     }
    else if (result[0].success == true) {
    
    this.setState({
      tutors: result
    },() => console.log("oo",this.state.tutors))
    this.props.history.push({
      pathname: '/results',
      state: {
        tutors: this.state.tutors
      }
    });
  }
    
    
  }
  render() {
    console.log(this.props)
    const color = `alert ${this.state.classMessage}`;

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
                onChange={this.handleOnSeclectSubject}
                
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
                onChange = {
                  this.handleOnSeclectLocation
                }
                
              />
            </div>

            <div className="two wide field">
              
                <button
                  type="submit"
                  className="btn btn-default search-btn btn-block"
                  onClick={this.handleSubmitSearch}
                >
                  Search
                </button>
              
            </div>
          </div>
        </form>
        <div>
          
        </div>
        {
        this.state.responseMessage ? (
                    <div className={color}>
                        <button type="button" class="close " data-dismiss="alert" aria-hidden="true">
                            ×</button>
                        <span class="glyphicon glyphicon-ok"></span>

                        {this.state.responseMessage}
                    </div>

            ):
                
                    
           (<span></span>)
            
            
            
            }
      </div>
    
    );
  }
}

export default withRouter(SearchForm);

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
