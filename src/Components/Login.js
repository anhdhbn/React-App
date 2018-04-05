import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import "./styleLogin.css";
import NavBar from "./NavBar";
import {PostLogin} from "./Services/APIServices";

class Login extends Component {
    state = {
        user: "",
        psw: "",
        success: false
    };
    
    render(){   
        const {success} = this.state;
        if (success) {
            return <Redirect to="/" />
        }

        return(
            <div id="nav" className="container conLogin">
                <NavBar Login={true}/>
                <br/>
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required onChange={this.ChangeUser}/>
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required onChange={this.ChangePsw}/>
                <button type="submit" onClick={this.SubmitLogin}>Login</button>
                <label>
                    <input type="checkbox" defaultChecked="checked" name="remember"/>
                    Remember me ?
                </label>
            </div>
        );
    }

    ChangeUser = (event) => {
        this.setState({user: event.target.value});
    }

    ChangePsw = (event) => {
        this.setState({psw: event.target.value});
    }

    SubmitLogin = (event) => {
        console.log("click login");
        PostLogin(this.state.user, this.state.psw).then(object => {
            const {success} = object;
            this.setState({success: success});
        });
    }
}
export default Login;