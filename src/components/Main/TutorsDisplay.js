import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class TutorDisplay extends Component {
state={
  TutorList:""
}
  getTutorList= async () => {
    let response = await fetch(
      "https://backend-codteur-project.herokuapp.com/tutor"
    );
    let data = await response.json();
    this.setState(
      {
        TutorList: data
      },
      () => console.log("Tutor List: ", this.state.TutorList))
  };
 

  componentDidMount(){
    this.getTutorList();
  }
  render() {
    
    const SampleTutorList1=this.state.TutorList.slice(0,4)
    const SampleTutorList2 = this.state.TutorList.slice(4, 8)
    const SampleTutorList3 = this.state.TutorList.slice(8, 12)
    let sampleAva = ["/img/sample_tutor1.png", "/img/sample_tutor2.png", "/img/sample_tutor3.png","/img/sample_tutor4.png"]
    console.log(SampleTutorList1, SampleTutorList2, SampleTutorList3)
    
    return (
      <div>
        <div class="vc_empty_space">
          <span class="vc_empty_space_inner" />
        </div>
        <div class="vc_empty_space">
          <span class="vc_empty_space_inner" />
        </div>
        <div className="row">
          <div class="section_custom_heading  ">
            <h2 class="responsive-h5 text-dark">
              Connecting People with Private Tutors
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="section_custom_heading">
            <h2 className="subject-title-description text-dark">
              A community of more than 1000 qualified tutors
            </h2>
          </div>
        </div>

        <div class="under-title-border"> </div>
        <div class="vc_empty_space">
          <span class="vc_empty_space_inner" />
        </div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide tutor-display-margin"
          
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            />
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
            />
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="2"
            />
          </ol>
          <div class="carousel-inner">

          
            <div class="carousel-item active">
              <div className="row justify-content-center">
                {SampleTutorList1 &&  SampleTutorList1.map((item,index) => {
                  return (

                    <div
                      class="featured-tutor text-center "
                      data-wide-target=""
                      style={{ cursor: "pointer" }}
                    >

                      <img
                        class="featured-tutor-profile-picture"
                        src={`/img/sample_tutor${index+1}.png`}
                        alt="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..."
                        title="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..."
                      />
                      <h3 class="featured-tutor-name">
                        <a
                          class="featured-tutor-link"
                          title="Alice Italian private tutor in London"
                          href="/learn-italian-with-alice-in-london-48676"
                          data-wide=""
                        >
                          {item.name}
                      </a>
                      </h3>
                      <div class="featured-tutor-course ">{item.subject}</div>

                      <div class="featured-tutor-city mb-4">
                        <span class="fas fa-map-marker-alt" />{" "} {item.yearexp} years
                    </div>
                    </div>

                  )
                })}
                  

                
              </div>
            </div>


            <div class="carousel-item">
              <div className="row justify-content-center">
                {SampleTutorList2 && SampleTutorList2.map((item, index) => {
                  return (

                    <div
                      class="featured-tutor text-center "
                      data-wide-target=""
                      style={{ cursor: "pointer" }}
                    >

                      <img
                        class="featured-tutor-profile-picture"
                        src={`/img/sample_tutor${index + 1}.png`}
                        alt="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..."
                        title="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..."
                      />
                      <h3 class="featured-tutor-name">
                        <a
                          class="featured-tutor-link"
                          title="Alice Italian private tutor in London"
                          href="/learn-italian-with-alice-in-london-48676"
                          data-wide=""
                        >
                          {item.name}
                        </a>
                      </h3>
                      <div class="featured-tutor-course ">{item.subject}</div>

                      <div class="featured-tutor-city mb-4">
                        <span class="fas fa-map-marker-alt" />{" "} {item.yearexp} years
                    </div>
                    </div>

                  )
                })}



              </div>
            </div>
            <div class="carousel-item">
              <div className="row justify-content-center">
                {SampleTutorList3 && SampleTutorList3.map((item, index) => {
                  return (

                    <div
                      class="featured-tutor text-center "
                      data-wide-target=""
                      style={{ cursor: "pointer" }}
                    >

                      <img
                        class="featured-tutor-profile-picture"
                        src={`/img/sample_tutor${index + 1}.png`}
                        alt="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..."
                        title="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..."
                      />
                      <h3 class="featured-tutor-name">
                        <a
                          class="featured-tutor-link"
                          title="Alice Italian private tutor in London"
                          href="/learn-italian-with-alice-in-london-48676"
                          data-wide=""
                        >
                          {item.name}
                        </a>
                      </h3>
                      <div class="featured-tutor-course ">{item.subject}</div>

                      <div class="featured-tutor-city mb-4">
                        <span class="fas fa-map-marker-alt" />{" "} {item.yearexp} years
                    </div>
                    </div>

                  )
                })}



              </div>
            </div>



























          
          
            </div>












          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true" />
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true" />
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default TutorDisplay;

