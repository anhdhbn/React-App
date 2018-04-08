import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import "./styleTable.css";
import "./styleRegister.css";
import NavBar from "./NavBar";
import Cookies from 'js-cookie';
import { GetInfo } from "./Services/APIServices";
class Account extends Component {
    state = {
        loggedOut: false,
        info: null,
        changeinfo: false
    }

    componentDidMount(){
        this.GetInfoUser();
        
    }
    render() {
        if (this.state.loggedOut) {
            return <Redirect to="/login" />
        }

        if (this.state.changeinfo) {
            return <Redirect to="/changeinfo" />
        }

        return (
            <div id="nav" className="container conAcc">
                <NavBar logined={true} Account={true}/>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{this.state.name}</td>
                        </tr>
                        <tr>
                            <td>User</td>
                            <td>{this.state.user}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.email}</td>
                        </tr>
                        <tr>
                            <td>Create Time</td>
                            <td>{this.state.createTime}</td>
                        </tr>
                        <tr>
                            <td>Last Login</td>
                            <td>{this.state.lastlogintime}</td>
                        </tr>
                    </tbody>

                </table>

                {/* <button type="submit" className="signupbtn" onClick={this.LogOut}>Log out</button> */}
                <div className="clearfix">
                    <button type="button" className="changebtn" onClick={this.changeinfo}>Change Info</button>
                    <button type="submit" className="signupbtn" onClick={this.LogOut}>Log out</button>
                </div>
            </div>
        );
    }
    LogOut = (event) => {
        this.setState({ loggedOut: true });
        Cookies.remove('user');
        localStorage.removeItem("access_token");
    }

    changeinfo = (event) => {
        this.setState({ changeinfo: true });
    }

    GetInfoUser = (event) => {
        GetInfo().then(object => {
            this.setState({ name: object.Name, user: object.User, email: object.Email, createTime: object.CreateTime, lastlogintime: object.LastLoginTime });
        })
    }
}
export default Account;