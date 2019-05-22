import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    withRouter
} from 'react-router';

const name = localStorage.getItem('current_user')

class SubNav extends Component{
    constructor() {
        super();

        this.state = {};

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll=()=> {

        this.setState({ scroll: window.scrollY });
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }


    render(){

      const username = localStorage.getItem('username')
       const profilepic = localStorage.getItem('profilepic')
       let url=this.props.match.url;

       
        return(

            <div id="navbartoggle" className={(this.state.scroll > 600 ) || (url==='/results')? "is-black nav-bg" : "nav-bg"}>
                <div class=" d-flex justify-content-between py-2">
                    <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 margin-logo">
                        <img class="mainlogo img-responsive ml-3" src="/img/logonew.png" alt="logo"></img>

                        </div>
                    <div>
                    {username ?(
                        <span className="text-white"><img className="ava-on-nav mr-2" src={profilepic} alt="ava"/>{username}</span>):
                        (<span></span>)}

                    {!username ?(
                            <a href={"/login/"}><button class="btn btn-become-login my-2 my-sm-0" type="submit">Login</button></a>) : (<button class="btn btn-become-login my-2 my-sm-0" type="submit" onClick={this.props.LogOut}>Logout</button >)}
                        <a href="/register"><button class="btn btn-become-tutor my-2 my-sm-0" type="submit">Become a Tutor</button></a>



                    </div>
                    </div>

            </div>
        );
    }
}



export default withRouter(SubNav);




