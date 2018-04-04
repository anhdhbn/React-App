import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import "./styleLogin.css";
import NavBar from "./NavBar";
class Login extends Component {
    render(){   
        return(
            <div id="nav" className="container conLogin">
                <NavBar/>
                <br/>
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                <button type="submit">Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember"/>
                    Remember me ?
                </label>
            </div>
        );
    }
}
export default Login;