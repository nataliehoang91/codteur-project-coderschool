import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    withRouter
} from 'react-router-dom';
import SubNav from "./SubNav";

class Register extends Component{
    state={
        isVerified:false,
        
        code:""
    }
     handleInput=(e)=>{
this.setState({
    code:e.target.value
})
     }

     handleOnClick=()=>{
         if (this.state.code="ABC"){
                 
                 this.setState({
                     isVerified: true
                 });
             }
         }
     

   
    render(){
        return(
            <div className="bg-result-page">
                
                   
                   <SubNav />
                        < div className="row result-adjust-posiiton" >
                            <div className="container">

                        <div className="row">
                            <div class="section_custom_heading  ">
                                <h4 class="responsive-step-pricing text-dark wow fadeIn">STEP 1: <span className="description-step">VERIFICATION AND APPROVAL ON YOUR QUALICATION</span></h4>
                                <div class="vc_empty_space">
                                    <span class="vc_empty_space_inner" />
                                </div>
                                <ul className="margin-li-text">
                                    <li className="litext">Lorem ipsum is placeholder text commonly used </li>
                                    <li className="litext">Lorem ipsum is placeholder text commonly used </li>
                                    <li className="litext">Lorem ipsum is placeholder text commonly used </li>
                                    <li className="litext">Lorem ipsum is placeholder text commonly used </li>
                                    <li className="litext">Lorem ipsum is placeholder text commonly used </li>
                                    <li className="litext">Lorem ipsum is placeholder text commonly used </li>

                                </ul>
                            </div>
                        </div>
                        <div class="vc_empty_space">
                            <span class="vc_empty_space_inner" />
                        </div>
                        <div class="vc_empty_space">
                            <span class="vc_empty_space_inner" />
                        </div>
                        <div className="row">
                            <div class="section_custom_heading  ">
                                <h2 class="responsive-step-pricing text-dark wow fadeIn">STEP 2: <span className="description-step">CHOOSE YOUR PRICING PLAN</span></h2>
                                <p>After your profile has been verified, you will receive the code. Please enter the code to receive your pricing plan</p>
                                
                                <input name="code" value={this.state.code} type="text" onChange={this.handleInput}/> <button onClick={this.handleOnClick}>Submit</button>
                            </div>
                        </div>
                        { this.state.isVerified ? (
                            <section id="pricing" class="pricing py-5" >
                                <div class="container">

                                    <div class="row">

                                        <div class="col-lg-4">
                                            <div class="card mb-5 mb-lg-0">
                                                <div class="card-body">
                                                    <h1 class="card-title text-uppercase text-center">SUBSCRIPTION</h1>
                                                    <h6 class="card-price text-center">VND199,000<span class="period">/month</span></h6>
                                                    <hr />
                                                    <ul class="fa-ul">
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>
                                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain</li>
                                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
                                                    </ul>
                                                    <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="card mb-5 mb-lg-0">
                                                <div class="card-body">
                                                    <h1 class="card-title text-uppercase text-center">SUBSCRIPTION</h1>
                                                    <h6 class="card-price text-center">VND1,999,000<span class="period">/YEAR</span></h6>
                                                    <hr />
                                                    <ul class="fa-ul">
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
                                                        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
                                                    </ul>
                                                    <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h1 class="card-title text-uppercase text-center">COMMISION</h1>
                                                    <h6 class="card-price text-center">VND49<span class="period">/month</span></h6>
                                                    <hr />
                                                    <ul class="fa-ul">
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong></li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free Subdomains</li>
                                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
                                                    </ul>
                                                    <a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>



                        ):(<span></span>)
                        
                        }
                        <div class="vc_empty_space">
                            <span class="vc_empty_space_inner" />
                        </div>
                        <div className="row">
                            <div class="section_custom_heading  ">
                                <h2 class="responsive-step-pricing text-dark wow fadeIn">STEP 3: <span className="description-step">PROCESSING PAYMENT</span></h2>
                            </div>
                        </div>



                            </div>
                            </ div>
                            </div>


















            
                
           
                    
            
        );
    }
}

export default withRouter(Register);
