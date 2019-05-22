import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";
import LoginFB from "./LoginFB";




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
  const username = localStorage.getItem('username')
  const profilepic = localStorage.getItem('profilepic')
    
    return(
        <div class="wrapper h-100">
         
    <nav id="sidebar" style={{display: `${this.state.isOpen ? 'block' : 'none'}`}} >


                <div class="sidebar-header"></div>
                
                    
                
                <ul className="components">
                <div>

                
                    {username?(
                    <div>
                <div class="user-pic">
          <img class="login-ava" src={profilepic}
            alt="User "/>
        </div>
        <div class="user-info text-center">
          < span class = "user-name" > 
            <strong>{username}</strong>
          </span>

          <p class="user-status">
            <i class="fa fa-circle text-success mr-1"></i>
            <span>Online</span>
          </p>
        </div>
        </div>
                    
                    

                    ):(<div className="mb-1">
                <div class="user-pic">
          <img class="login-ava" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
            alt="User "/>
        </div>
        <div class="user-info text-center">
          <span class="user-name">
            
          </span>

          <p class="user-status ">
            <i class="fa fa-circle mr-1"></i>
            <span>Offline</span>
          </p>
        </div>
        </div>)}

                    
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
                        <a href="#">Blogs</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle"><i class="fab fa-discourse px-1"></i>Courses</a>
                        <ul class="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Enrollment</a>
                            </li>
                            <li>
                                <a href="#">Study Record</a>
                            </li>
                            <li>
                                <a href="#">Materials</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="fas fa-users px-1"></i>Community</a>
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
                        <button type="button" id="sidebarCollapse" class="btn btn-side-nav" onClick={this.closeNavbar}>
                            
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