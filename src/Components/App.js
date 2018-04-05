import React, { Component } from 'react';
import Home from "./Home.js";
import Login from "./Login.js";
import Register from "./Register.js";
import Account from "./Account.js";
import { Route, Switch } from 'react-router-dom';


class App extends Component {
    render(){
        return(        
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/account" component={Account}/>
            </Switch>
        );
    }
}


export default App;