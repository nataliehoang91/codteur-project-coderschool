import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



class TutorDisplay extends Component {
  render() {
    return (
        <div className="padding-title ">
            <div className="y-us-title text-center">
                <h2 className=" animated flash infinite ">Tutors</h2>

                <span class="y-us-title-border"></span>
            </div>
            <div className="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="featured-tutor text-center border" data-wide-target="" style={{cursor: "pointer"}}>
                    <img class="featured-tutor-profile-picture mt-4" src="https://s3-ap-southeast-1.amazonaws.com/tutoroo/AliceG_5b7df2e6d74ad.png" alt="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..." title="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..."/>
                        <h3 class="featured-tutor-name">
                            <a class="featured-tutor-link" title="Alice Italian private tutor in London" href="/learn-italian-with-alice-in-london-48676" data-wide="">
                                Alice
                                </a>
                        </h3>
                        <div class="featured-tutor-course ">Italian</div>
                        <div>
                            <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                            <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                            <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                            <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                            <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        </div>
                        <div class="featured-tutor-city mb-4"><span class="fa fa-map-marker"></span> London</div>
                        </div>
                </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="featured-tutor text-center border" data-wide-target="" style={{ cursor: "pointer" }}>
                    <img class="featured-tutor-profile-picture" src="https://s3-ap-southeast-1.amazonaws.com/tutoroo/AliceG_5b7df2e6d74ad.png" alt="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..." title="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..." />
                    <h3 class="featured-tutor-name">
                        <a class="featured-tutor-link" title="Alice Italian private tutor in London" href="/learn-italian-with-alice-in-london-48676" data-wide="">
                            Alice
                                </a>
                    </h3>
                    <div class="featured-tutor-course ">Italian</div>
                    <div>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                    </div>
                    <div class="featured-tutor-city"><span class="fa fa-map-marker"></span> London</div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="featured-tutor text-center border" data-wide-target="" style={{ cursor: "pointer" }}>
                    <img class="featured-tutor-profile-picture" src="https://s3-ap-southeast-1.amazonaws.com/tutoroo/AliceG_5b7df2e6d74ad.png" alt="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..." title="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..." />
                    <h3 class="featured-tutor-name">
                        <a class="featured-tutor-link" title="Alice Italian private tutor in London" href="/learn-italian-with-alice-in-london-48676" data-wide="">
                            Alice
                                </a>
                    </h3>
                    <div class="featured-tutor-course">Italian</div>
                    <div>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                    </div>
                    <div class="featured-tutor-city"><span class="fa fa-map-marker"></span> London</div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="featured-tutor text-center border" data-wide-target="" style={{ cursor: "pointer" }}>
                    <img class="featured-tutor-profile-picture" src="https://s3-ap-southeast-1.amazonaws.com/tutoroo/AliceG_5b7df2e6d74ad.png" alt="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..." title="Alice - London: Hi, I'm Alice. I have a BA in Languages and Li..." />
                    <h3 class="featured-tutor-name">
                        <a class="featured-tutor-link" title="Alice Italian private tutor in London" href="/learn-italian-with-alice-in-london-48676" data-wide="">
                            Alice
                                </a>
                    </h3>
                    <div class="featured-tutor-course">Italian</div>
                    <div>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                        <span class="star-active popup-star popup-star2"><i class="fa fa-star"></i></span>
                    </div>
                    <div class="featured-tutor-city"><span class="fa fa-map-marker"></span> London</div>
                </div>
            </div>
            </div>
        </div>
    );
  }
}

export default TutorDisplay;
