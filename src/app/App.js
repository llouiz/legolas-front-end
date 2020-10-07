import React, { Component } from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import Home from '../home/Home';
import Index from '../components/index';
import Calendar from '../components/calendar';
import Gallery from '../components/gallery';
import Contact from '../components/contact';
import Player from '../components/tables/player';
import NPC from '../components/tables/npc';
import Weapon from '../components/tables/weapon';
import Armor from '../components/tables/armor';
import Character from '../components/character';
import Ranking from '../components/ranking';
import FAQ from '../components/faq';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
      }).catch(error => {
        this.setState({
          loading: false
        });
      });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
    window.location.href = "/login";
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    /*if (this.state.loading) {
      return <LoadingIndicator />
    }*/

    return (
      <div className="app">
        {/*<div className="app-top-box">
          <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
        </div>*/}
        <div className="app-body">
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <PrivateRoute path="/index" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
              component={Index}></PrivateRoute>
            <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/signup"
              render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
            <Route path="/calendar" component={Calendar}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/player" component={Player}></Route>
            <Route path="/npc" component={NPC}></Route>
            <Route path="/weapon" component={Weapon}></Route> 
            <Route path="/armor" component={Armor}></Route>
            <Route path="/character" component={Character}></Route>
            <Route path="/calendar" component={Calendar}></Route>
            <Route path="/ranking" component={Ranking}></Route>
            <Route path="/faq" component={FAQ}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </div>
        <Alert stack={{ limit: 3 }}
          timeout={5000}
          position='top-right' effect='slide' offset={65} />
      </div>
    );
  }
}

export default App;
