import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class SubNav extends Component{
    constructor(props) {
        super(props);

        this.state = {};

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({ scroll: window.scrollY });
    }
    componentDidMount() {
      
        window.addEventListener('scroll', this.handleScroll);
    }

    handleLoginToggle=()=>{

    }
    render(){
        

        return(
            <div id="navbartoggle" className={this.state.scroll > 500 ? "is-black nav-bg" : "nav-bg"}>
                <div class=" d-flex justify-content-between py-2">
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 margin-logo">
                        <img class="mainlogo img-responsive ml-3" src="/img/logonew.png" alt="logo"></img>
                        
                        </div>
                    <div>
                    {!this.props.isLogin ?(
                            <a href={"/login/"}><button class="btn btn-become-tutor my-2 my-sm-0" type="submit">Login</button></a>) : (<button class="btn btn-become-tutor my-2 my-sm-0" type="submit" onClick={this.props.LogOut}>Logout</button >)}
                        <button class="btn btn-become-tutor my-2 my-sm-0" type="submit">Become a Tutor</button>
                        {this.props.isLogin.current_user}

                    </div>
                    </div>
            
</div>
        );
    }
}



export default SubNav;




