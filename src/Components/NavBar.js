import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./styleRegister.css";
class NavBar extends Component {
    render(){
        if(this.props.logined){
            return(
                <div className="topnav">
                    <Link to="/" className={this.props.Home ? "active" : ""}>Home</Link>
                    <Link to="/account" className={this.props.Account ? "active" : ""}>Account</Link>
                </div>
            );
        }
        else{
            return(
                <div className="topnav">
                    <Link to="/" className={this.props.Home ? "active" : ""}>Home</Link>
                    <Link to="/login" className={this.props.Login ? "active" : ""}>Login</Link>
                    <Link to="/register" className={this.props.Register ? "active" : ""}>Register</Link>
                </div>
            );
        }
        
    }
}
export default NavBar;