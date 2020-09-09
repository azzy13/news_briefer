import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Business from './components/pages/Business';
import Health from './components/pages/Health';
import Tech from './components/pages/Tech';
import India from './components/pages/India';
import Science from './components/pages/Science';
import Ent from './components/pages/Ent';
import Sports from './components/pages/Sports';
import News from './components/pages/News';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import PageNotFound from './components/pages/Notfound';

import store from './store';
import { Provider } from 'react-redux';
import ScrollTop from './components/layout/ScrollTop';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import FirebaseConfig from './config/Firebase';
import UserContext from './config/UserContext';
import { useState } from 'react';

//init firebase
firebase.initializeApp(FirebaseConfig);

const App = () => {
  useEffect(() => {
    //Init
    M.AutoInit();
  });

  const [user, setUser] = useState(null);

  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <ToastContainer />
          <ScrollTop />
          <Fragment>
            <SearchBar />

            <div
              className='pink lighten-5 fillscr'
              style={{ marginTop: '-12px' }}
            >
              <Switch>
                <Route exact path='/news_briefer/' component={Home} />
                <Route exact path='/news_briefer/login' component={Login} />
                <Route
                  exact
                  path='/news_briefer/register'
                  component={Register}
                />
                <Route exact path='/news_briefer/news' component={News} />
                <Route
                  exact
                  path='/news_briefer/entertainment'
                  component={Ent}
                />
                <Route exact path='/news_briefer/health' component={Health} />
                <Route exact path='/news_briefer/sports' component={Sports} />
                <Route exact path='/news_briefer/tech' component={Tech} />
                <Route exact path='/news_briefer/science' component={Science} />
                <Route exact path='/news_briefer/india' component={India} />
                <Route
                  exact
                  path='/news_briefer/business'
                  component={Business}
                />

                <div className='cus_container'>
                  <Route exact path='/news_briefer/about' component={About} />
                </div>
                <Route exact path='*' component={PageNotFound} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
