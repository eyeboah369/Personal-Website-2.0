import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {BrowserHistory} from 'react-router';
import HomePage from './HomePage';
import Navbar from './Headers/Navbar';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="home" exact path="/" component={HomePage} />
                </div>
            </Router>
        )
    }
}

export default App;