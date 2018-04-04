import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class Login extends Component {
    state = {
        auth: false
    }
    render(){
        const {auth} = this.state;
        
        return(
            <Redirect to="/"/>
        );
    }
}
export default Login;