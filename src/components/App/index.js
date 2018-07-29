import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'Pages/Home';
import Team from 'Pages/Team';
import Download from 'Pages/Download';
import Projects from 'Pages/Projects';
import RoadMap from 'Pages/RoadMap';

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
                    <Route path='/projects' component={ Projects } />
                    <Route path='/roadmap' component={ RoadMap } />
                </Switch>
            </Router>
        );
    }
}

export default App;