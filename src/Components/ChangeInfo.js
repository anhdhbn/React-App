import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import "./styleLogin.css";
import NavBar from "./NavBar";
import { changeInfo } from "./Services/APIServices";
import {GetInfo} from "./Services/APIServices";
import Cookies from 'js-cookie';

class ChangeInfo extends Component {
    state = {
        success: false,
        error : "",
        cancel: false
    }
    componentDidMount(){
        this.GetInfoUser();       
    }

    render() {        
        const {error} = this.state;
        if(this.state.success){
            return <Redirect to="/account" />
        }
        if(this.state.cancel){
            return <Redirect to="/account" />
        }
        return (
            <div className="container conReg">
                <NavBar logined={true}  />
                <h2>Change Info</h2>
                <p style={{ color: (error? 'red' : 'black')}}>{error? error : "Please fill in this form to change your account."}</p>
                <hr />

                <label htmlFor="name"><b>Full Name</b></label>
                <input type="text" placeholder={this.state.name} name="name" required onChange={this.ChangeName} value={this.state.name}/>

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder={this.state.email} name="email" required onChange={this.ChangeEmail} value={this.state.email}/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required onChange={this.ChangePsw} value={this.state.psw}/>

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required onChange={this.ChangePsw2} value={this.state.psw2}/>

                <div className="clearfix">
                    <button type="button" className="cancelbtn" onClick={this.cancel}>Cancel</button>
                    <button type="submit" className="signupbtn" onClick={this.ChangeInfoBtn}>Change</button>
                </div>
            </div>
        );
    }

    GetInfoUser = (event) => {
        GetInfo().then(object => {
            this.setState({ name: object.Name, email: object.Email, psw: object.Pass, psw2:  object.Pass});
        })
    }

    ChangeName = (event) => {
        this.setState({name: event.target.value});
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

    cancel = (event) => {
        this.setState({cancel: true});
    }

    ChangeInfoBtn = (event) => {
        if(this.state.psw === this.state.psw2)
        {
            changeInfo(this.state.name, this.state.email, this.state.psw).then(object => {
                const {success} = object;
                const {error} = object;
                if(success){
                    this.setState({success: success});
                }
                else{
                    this.setState({error: error});
                }               
            });
        }
        else{
            this.setState({error: "Vui lòng nhập 2 pass giống nhau"});
        }
    }
}
export default ChangeInfo;