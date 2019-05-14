import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Autosuggest from "react-autosuggest";

// Use your imagination to render suggestions.

class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      SubjectList: [],
      suggestions: [],
      value: ""
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

  escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  getSuggestions = value => {
    const escapedValue = this.escapeRegexCharacters(value.trim());
    const regex = new RegExp("^" + escapedValue, "i");

    return this.state.SubjectList.filter(subject => regex.test(subject.name));
  };

  getSuggestionValue = suggestion => {
    return suggestion.name;
  };

  shouldRenderSuggestions = () => {
    return true;
  };

  renderSuggestion = suggestion => {
    return <span>{suggestion.name}</span>;
  };

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Subject",
      value,
      onChange: this.onChange
    };
    return (
      <div class="search-bar-home horizontal">
        <form
          name="hemispherebundle_offer_search"
          id="search-form"
          class="main-search border-less-inputs background-dark narrow"
        >
          <div class="input-row">
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={this.getSuggestionValue}
              shouldRenderSuggestions={this.shouldRenderSuggestions}
              renderSuggestion={this.enderSuggestion}
              inputProps={inputProps}
            />

            <div class="form-group">
              <div class="input-group search-geocoder">
                <span class="algolia-places">
                  <input
                    type="text"
                    id="hemispherebundle_offer_search_location"
                    name="hemispherebundle_offer_search[location]"
                    class="location form-control ap-input"
                    placeholder="Subject"
                    autocomplete="off"
                    spellcheck="false"
                    role="combobox"
                    aria-autocomplete="both"
                    aria-expanded="false"
                    aria-owns="algolia-places-listbox-0"
                    dir="auto"
                  />
                  <pre aria-hidden="true" />
                  <span
                    class="ap-dropdown-menu"
                    role="listbox"
                    id="algolia-places-listbox-0"
                  >
                    <div class="ap-dataset-places" />
                  </span>
                </span>
              </div>
            </div>
            <div class="form-group">
              <select
                id="hemispherebundle_offer_search_sort"
                name="hemispherebundle_offer_search[sort]"
                title="Sort by"
                data-dropup-auto="false"
                class="form-control"
              >
                <option value="type">1 on 1</option>
                <option value="type">Group</option>
              </select>
            </div>
            <div class="form-group">
              <select
                id="hemispherebundle_offer_search_sort"
                name="hemispherebundle_offer_search[sort]"
                title="Sort by"
                data-dropup-auto="false"
                class="form-control"
              >
                <option value="city">Ha Noi</option>
                <option value="city">Ho Chi Minh City</option>
                <option value="city">Online</option>
              </select>
            </div>

            <div class="form-group">
              <select
                id="hemispherebundle_offer_search_sort"
                name="hemispherebundle_offer_search[sort]"
                title="Sort by"
                data-dropup-auto="false"
                class="form-control"
              >
                <option value="rating">Location</option>
              </select>
            </div>

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
