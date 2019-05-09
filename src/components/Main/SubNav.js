import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SubNav extends Component{
    render(){
        return(
            <div className="border">
                <div class=" d-flex justify-content-between py-2">
                    <div class="logo col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <img class="img-responsive ml-5" src="/img/logo.png" alt="logo"></img>
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




