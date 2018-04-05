import React, { Component } from 'react';
import NavBar from "./NavBar";
import {Redirect} from "react-router-dom";
import {PostRegister} from "./Services/APIServices";
import Cookies from 'js-cookie';

class Register extends Component {
    state = {
        name: "",
        user: "",
        email: "",
        psw: "",
        psw2: "",
        success: false,
        error: ""
    }
    render() {
        const {success} = this.state;
        const {error} = this.state;
        if(Cookies.get('user')){
            return <Redirect to="/" />
        }
        if (success) {
            return <Redirect to="/login" />
        }
        return (
            <div className="container conReg">
                <NavBar Register={true} />
                <h1>Sign Up</h1>
                <p style={{ color: (error? 'red' : 'black')}}>{error? error : "Please fill in this form to create an account."}</p>
                <hr />

                <label htmlFor="name"><b>Full Name</b></label>
                <input type="text" placeholder="Enter Your Name" name="name" required onChange={this.ChangeName} />

                <label htmlFor="user"><b>User Name</b></label>
                <input type="text" placeholder="Enter User Name" name="user" required onChange={this.ChangeUser} />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required onChange={this.ChangeEmail} />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required onChange={this.ChangePsw} />

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required onChange={this.ChangePsw2} />

                <label>
                    <input type="checkbox" defaultChecked="checked" name="remember" style={{ marginBottom: 15 + 'px' }} />
                    Remember me
                </label>

                <p>By creating an account you agree to our <a href="" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p>

                <div className="clearfix">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn" onClick={this.SubmitAccount}>Sign Up</button>
                </div>
            </div>
        );
    }

    componentDidMount() {

    }

    ChangeName = (event) => {
        this.setState({name: event.target.value});
    }

    ChangeUser = (event) => {
        this.setState({user: event.target.value});
    }

    ChangeEmail = (event) => {
        this.setState({email: event.target.value});
    }

    ChangePsw = (event) => {
        this.setState({psw: event.target.value});
    }

    ChangePsw2 = (event) => {
        this.setState({psw2: event.target.value});
    }

    SubmitAccount = () => {
        if(this.state.psw === this.state.psw2)
        {
            PostRegister(this.state.name, this.state.user, this.state.email, this.state.psw).then(object => {
                const {success} = object;
                if(success){
                    this.setState({success: success});
                }
                else{
                    this.setState({error: "Đăng kí thất bại, kiểm tra lại server"});
                }               
            });
        }
        else{
            this.setState({error: "Vui lòng nhập 2 pass giống nhau"});
        }
    }
}

export default Register;