import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'Pages/Home';
import Team from 'Pages/Team';
import Download from 'Pages/Download';
import Contact from 'Pages/Contact';
import Features from 'Pages/Features';
import SuperRepresentative from 'Pages/SuperRepresentative';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route path='/team' component={ Team } />
                    <Route path='/download' component={ Download } />
                    <Route path='/contact' component={ Contact } />
                    <Route path='/features' component={ Features } />
                    <Route path='/super-representative' component={ SuperRepresentative } />
                </Switch>
            </Router>
        );
    }
}

export default App;