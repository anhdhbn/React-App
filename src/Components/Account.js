import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import "./styleRegister.css";
import NavBar from "./NavBar";
import Cookies from 'js-cookie';

class Account extends Component {
    state = {
        loggedOut: false
    }
    render() {   
        if(this.state.loggedOut){
            return <Redirect to="/login" />
        }    
        return (
            <div id="nav" className="container conLogin">               
                <NavBar logined={true}/>
                <button type="submit" className="signupbtn" onClick={this.LogOut}>Log out</button>
            </div>
        );
    }
    LogOut = (event) => {
        this.setState({loggedOut: true});
        Cookies.remove('user');
    } 
}
export default Account;