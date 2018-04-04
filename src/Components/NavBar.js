import React, { Component } from 'react';
import {Link} from "react-router-dom";
class NavBar extends Component {
    render(){
        return(
            <div className="topnav">
                <Link to="/" className="active">Home</Link>
                <Link to="/login" className="">Login</Link>
                <Link to="/register" className="">Register</Link>
            </div>
        );
    }
}
export default NavBar;