import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from 'components/App/Pages/Home';

import Team from 'components/App/Pages/Team';
import Download from 'components/App/Pages/Download';
import Contact from 'components/App/Pages/Contact';
import Features from 'components/App/Pages/Features';
import Timeline from 'components/App/Pages/Timeline';
import TronSR from 'components/App/Pages/TronSR';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/App/styles/root.css';

class App extends React.Component {
    render() {
        return (
          <Router>
            <div className='container'>

              <Route exact path="/" component={Home}/>
              <Route path="/team" component={Team}/>
              <Route path="/download" component={Download}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/features" component={Features}/>
              <Route path="/timeline" component={Timeline}/>
              <Route path="/tronsr" component={TronSR}/>

            </div>
          </Router>
        );
    }
}

export default App;