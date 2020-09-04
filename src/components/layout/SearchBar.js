import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchNews } from '../../actions/NewsActions';
import { Link, useHistory } from 'react-router-dom';

import Business from '../pages/Business';
import Health from '../pages/Health';
import Tech from '../pages/Tech';
import India from '../pages/India';
import Science from '../pages/Science';
import Ent from '../pages/Ent';
import Sports from '../pages/Sports';

import M from 'materialize-css/dist/js/materialize.min.js';

import '../../css/nav.css';
import bgpic from '../../img/bgimg.jpg';
import pic from '../../img/shk.jpg';

const SearchBar = ({ searchNews }) => {
  useEffect(() => {
    //Init
    M.AutoInit();
  }, []);

  const [text, setText] = useState('');
  let history = useHistory();

  const onSubmit = (e) => {
    history.push(`https://azzy13.github.io/news_briefer/?q=${text}`);

    e.preventDefault();
    if (text === '' || text === ' ') {
      M.toast({ html: 'Please enter a topic before submitting' });
    } else {
      searchNews(text);
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className='navbar-fixed'>
        <nav>
          <div className='nav-wrapper'>
            <ul>
              <li>
                <a href='https://azzy13.github.io/news_briefer'>
                  <i className='material-icons'>insert_chart</i>
                </a>
              </li>
              <li>
                <a
                  href='#!'
                  className='brand-logo right sidenav-trigger'
                  data-target='mobile-demo'
                >
                  <i className='medium material-icons'>menu</i>
                </a>
              </li>

              <li>
                <form onSubmit={onSubmit}>
                  <input
                    type='search'
                    id='search'
                    value={text}
                    placeholder='Search News'
                    onChange={onChange}
                  />
                </form>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <div className='user-view'>
            <div className='background'>
              <img src={bgpic} alt='BG_IMG' />
            </div>
            <a href='#!'>
              <img className='circle' src={pic} alt='user_img' />
            </a>
            <a href='#!'>
              <span className='black-text name'>Lord Kanki</span>
            </a>
            <a href='#!'>
              <span className='black-text email'>jdandturk69@gmail.com</span>
            </a>
          </div>
        </li>
        <li>
          <Link
            className='sidenav-close'
            to='https://azzy13.github.io/news_briefer/news'
          >
            World Top Stories
          </Link>
        </li>
        <li>
          <div className='divider'></div>
        </li>
        <li>
          <Link
            className='sidenav-close'
            to='https://azzy13.github.io/news_briefer/india'
            onClick={() => <India />}
          >
            India
          </Link>
        </li>
        <li>
          <div className='divider'></div>
        </li>
        <li>
          <Link
            className='sidenav-close'
            to='https://azzy13.github.io/news_briefer/tech'
            onClick={() => <Tech />}
          >
            Technology
          </Link>
        </li>
        <li>
          <Link
            className='sidenav-close'
            to='https://azzy13.github.io/news_briefer/sports'
            onClick={() => <Sports />}
          >
            Sports
          </Link>
        </li>
        <li>
          <Link
            className='sidenav-close'
            to='https://azzy13.github.io/news_briefer/business'
            onClick={() => <Business />}
          >
            Business
          </Link>
        </li>
        <li>
          <Link
            className='sidenav-close'
            to='https://azzy13.github.io/news_briefer/health'
            onClick={() => <Health />}
          >
            Health
          </Link>
        </li>
        <li>
          <Link
            className='sidenav-close'
            to='https://azzy13.github.io/news_briefer/science'
            onClick={() => <Science />}
          >
            Science
          </Link>
        </li>
        <li>
          <Link
            className='sidenav-close'
            to='https://azzy13.github.io/news_briefer/entertainment'
            onClick={() => <Ent />}
          >
            Entertainment
          </Link>
        </li>
        <li>
          <div className='divider'></div>
        </li>
        <li>
          <Link
            className='sidenav-close'
            to='https://azzy13.github.io/news_briefer/about'
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

SearchBar.propTypes = {
  searchNews: PropTypes.func.isRequired,
};

export default connect(null, { searchNews })(SearchBar);
