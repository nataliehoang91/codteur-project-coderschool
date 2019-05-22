import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div >
                <footer class="nb-footer">
                <div >
                        <div class="row">
                            

                                < div class = "col-lg-3 col-md-3 col-sm-6 padding-footer" >
                                    <div class="footer-info-single">
                                        <h2 class="title">Help Center</h2>
                                        <ul class="list-unstyled">
                                           
                                            <li><a href="http://www.nextbootstrap.com/" title=""><i class="fas fa-question"></i> FAQs</a></li>
                                            <li><a href="http://www.nextbootstrap.com/" title=""><i class="fas fa-map"></i> Sitemap</a></li>
                                            
                                        </ul>
                                    </div>
                                </div>

                            <div class="col-lg-3 col-md-3 col-sm-6 pl-5">
                                    <div class="footer-info-single">
                                        <h2 class="title">User information</h2>
                                        <ul class="list-unstyled">
                                        <li><a href="http://www.nextbootstrap.com/" title=""><i class="fas fa-address-card"></i> About Us</a></li>
                                            
                                            <li><a href="http://www.nextbootstrap.com/" title=""><i class="fas fa-trophy"></i> Tutor Qualification</a></li>
                                            <li><a href="http://www.nextbootstrap.com/" title=""><i class="fas fa-file-signature"></i> Contact Us</a></li>
                                            <li><a href="http://www.nextbootstrap.com/" title=""><i class="far fa-newspaper"></i> Press Corner</a></li>
                                        <li><a href="http://www.nextbootstrap.com/" title=""><i class="fas fa-graduation-cap"></i> Learning resources</a></li>
                                            </ul>
                                    </div>
                                </div>

                            <div class="col-lg-3 col-md-3 col-sm-6 pl-5">
                                    <div class="footer-info-single">
                                        <h2 class="title">Security & privacy</h2>
                                        <ul class="list-unstyled">
                                            <li><a href="http://www.nextbootstrap.com/" title=""><i class="fas fa-align-center"></i> Terms Of Use</a></li>
                                            <li><a href="http://www.nextbootstrap.com/" title=""><i class="fas fa-user-shield"></i> Privacy Policy</a></li>
                                            <li><a href="http://www.nextbootstrap.com/" title=""><i class="fas fa-comment-dollar"></i> Refund Policy</a></li>
                                            
                                        </ul>
                                    </div>
                                </div>

                            <div class="col-lg-3 col-md-3 col-sm-6">
                                    <div class="footer-info-single">
                                        <h2 class="title">Payment</h2>
                                    <p><i class="fas fa-receipt"></i>Terms & Conditions</p>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <section class="copyright">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <p>Copyright ©</p>
                                    </div>
                                    <div class="col-sm-6"></div>
                                </div>
                            </div>
                        </section>

            
            
            
            
            
                </footer>
            
            </div>
        )
}
}
export default Footer;