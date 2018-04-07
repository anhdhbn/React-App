import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import "./styleLogin.css";
import NavBar from "./NavBar";
import { PostLogin } from "./Services/APIServices";
import {GetToken} from "./Services/APIServices";
import Cookies from 'js-cookie';

class Login extends Component {
    state = {
        user: "",
        psw: "",
        success: false,
        error: ""
    };

    render() {
        const { success } = this.state;
        const {error} = this.state;
        if(Cookies.get('user')){
            return <Redirect to="/" />
        }

        if (success) {
            return <Redirect to="/" />
        }

        return (


            <div id="nav" className="container conLogin">
                

                <NavBar Login={true} />

                <p style={{ color: (error ? 'red' : 'black') }}>{error ? error : "Please fill in this form to login your account"}</p>
                <hr />

                <br />
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required onChange={this.ChangeUser} />
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required onChange={this.ChangePsw} />
                <button type="submit" onClick={this.SubmitLogin}>Login</button>
                <label>
                    <input type="checkbox" defaultChecked="checked" name="remember" />
                    Remember me ?
                </label>
            </div>
        );
    }

    ChangeUser = (event) => {
        this.setState({ user: event.target.value });
    }

    ChangePsw = (event) => {
        this.setState({ psw: event.target.value });
    }

    SubmitLogin = (event) => {
        PostLogin(this.state.user, this.state.psw).then(object => {
            const { success } = object;
            if (success) {
                Cookies.set('user', this.state.user,  { expires: 7, path: '/' });
                GetToken(this.state.user, this.state.psw).then(object => {
                    const {access_token} = object;
                    localStorage.setItem("access_token", access_token);
                    this.setState({ success: success });
                });
                
            }
            else {
                const { error } = object;
                this.setState({ error: error });
            }
        });
    }
}
export default Login;