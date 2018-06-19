import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Team from 'components/App/Team';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'components/App/styles/root.css';

class App extends React.Component {
    render() {
        return (
          <Router>
            <div className='container'>

              <Route exact path="/" component={Team}/>
              <Route path="/team" component={Team}/>

            </div>
          </Router>
        );
    }
}

export default App;