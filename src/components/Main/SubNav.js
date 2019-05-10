import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SubNav extends Component{
    render(){
        return(
            <div className="border nav-bg">
                <div class=" d-flex justify-content-between py-2">
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 ml-5">
                        <img class="logo img-responsive ml-5" src="/img/logo2.png" alt="logo"></img>
                        <span class=" ml-3">TUTOR FINDER</span>
                        </div>
                    <div>
                        <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Become a Tutor</button>

                    </div>
                    </div>
            
</div>
        );
    }
}



export default SubNav;




