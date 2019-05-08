import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navigation.css";



class Navigation extends Component{
    constructor(props) {
        super(props);

        
        this.state = {
            isOpen: true
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
    return(
        <div class="wrapper">
         
    <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Navigation</h3>
                </div>
                <ul className="components">
                    <li> <form class="form-inline my-2 my-lg-0">
                    <div className="wrap-search">
                        <div class="search-inside">
                            <input
                                type="text"
                                class="searchTerm"
                                placeholder="What are you looking for?"
                            />
                            <button type="submit" class="searchButton">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                        </div>
                    </form></li>
                    
                </ul>
                <ul class="list-unstyled components">
                    <p>Heading</p>
                    <li class="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                        <ul class="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">Home 1</a>
                            </li>
                            <li>
                                <a href="#">Home 2</a>
                            </li>
                            <li>
                                <a href="#">Home 3</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
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
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <ul><li>Others</li></ul>
                
            </nav>
            <div id="content">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
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