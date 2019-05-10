import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import Login from "./Login";




class Navigation extends Component{
    constructor(props) {
        super(props);

        
        this.state = {
            isOpen: false,
            isLogin:false,
            userName:''
        };
    }

    handleToggle = ()=> {

        this.setState({
            isOpen: !this.state.isOpen
        }); 
    }

    closeNavbar=() => {
        if (document.getElementById('sidebar').style.display === 'none'){
            document.getElementById('sidebar').style.display = 'block'
            this.setState({
                isOpen: true
            }); 
        }
        else{
            document.getElementById('sidebar').style.display = 'none'
            this.setState({
                isOpen: false
            }); 
        }
    }
    
render(){
    const responseFacebook = response => {
        console.log(responseFacebook);
        if (response) {
            this.setState({ userName: response.name });

            this.setState({ isLogin: true });
        }
    };
    
    return(
        <div class="wrapper h-100">
         
    <nav id="sidebar" style={{display: `${this.state.isOpen ? 'block' : 'none'}`}} >


                <div class="sidebar-header">
                    <h3>Navigation</h3>
                    
                </div>
                <ul className="components">
                <div>
                    
                    <Login
                        responseFacebook={responseFacebook}
                        isLogin={this.state.isLogin}
                    />
                    
                </div>
                </ul>
                <ul className="components">
                    <li> <form class="form-inline my-2 my-lg-0">
                    <div className="wrap-search">
                        <div class="search-inside">
                            <input
                                type="text"
                                class="searchTerm"
                                placeholder="Search..."
                            />
                            <button type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                        </div>
                    </form></li>
                    
                </ul>
                
                <ul class="list-unstyled components">
                    <li>General</li>
                    <li class="active">
                        
                            
                        <a href="#"><i class="fas fa-home px-1"></i>Home</a>
                           
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fab fa-discourse px-1"></i>Courses</a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                            <li>
                                <a href="#">Page 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-users px-1"></i>Tutors</a>
                    </li>
                    <li className="pt-2">Extra</li>
                    <li>
                        <a href="#"><i class="fas fa-info-circle px-1"></i>Help Center</a>
                    </li>
                </ul>
                <ul className="list-unstyled"><li><i class="fas fa-sliders-h px-1"></i>Others</li></ul>
                
            </nav>
            <div id="content">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid" >
                        <button type="button" id="sidebarCollapse" class="btn btn-info" onClick={this.closeNavbar}>
                            
                            <span>{this.state.isOpen ? 'X' : <i class="fas fa-align-left"></i>}</span>
                        </button>

                    </div>
                </nav>
            </div>

        </div>
       
    )
}
}
 export default Navigation;