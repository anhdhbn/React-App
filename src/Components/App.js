import React, { Component } from 'react';
import Home from "./Home.js";
import Login from "./Login.js";
import Register from "./Register.js";
import NavBar from "./NavBar.js";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
    render(){
        return(        
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
            </Switch>
        );
    }
}


export default App;