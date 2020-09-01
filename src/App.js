import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

import store from './store';
import { Provider } from 'react-redux';

import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    //Init
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Router forceRefresh={true}>
        <Fragment>
          <SearchBar />

          <div
            className='pink lighten-5 fillscr'
            style={{ marginTop: '-12px' }}
          >
            <Switch>
              <Route exact path='/news_briefer/' component={Home} />
              <Route exact path='/news_briefer/news' component={News} />
              <Route exact path='/news_briefer/entertainment' component={Ent} />
              <Route exact path='/news_briefer/health' component={Health} />
              <Route exact path='/news_briefer/sports' component={Sports} />
              <Route exact path='/news_briefer/tech' component={Tech} />
              <Route exact path='/news_briefer/science' component={Science} />
              <Route exact path='/news_briefer/india' component={India} />
              <Route exact path='/news_briefer/business' component={Business} />

              <div className='cus_container'>
                <Route exact path='/news_briefer/about' component={About} />
              </div>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
