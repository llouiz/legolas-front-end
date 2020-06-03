import React, {Component} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Index from './components/index';
import Calendar from './components/calendar';
import Gallery from './components/gallery';
import Player from './components/tables/player';
import Contact from './components/contact';
import FAQ from './components/faq';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"> 
           {/* <!-- Components -->*/}

          <Route exact path='/' component={Index}></Route>
          <Route exact path='/calendar' component={Calendar}></Route>
          <Route exact path='/gallery' component={Gallery}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/faq' component={FAQ}></Route>

        </div>
      </Router>
    );
  }
}

export default App;
