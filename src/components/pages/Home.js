import React, { useContext, useEffect } from 'react';
import Preloader from '../layout/Preloader';
import { searchNews } from '../../actions/NewsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';
import UserContext from '../../config/UserContext';
import { Redirect } from 'react-router-dom';

const Home = ({ new: { news, loading }, searchNews }) => {
  useEffect(() => {
    searchNews();
  }, []);

  const context = useContext(UserContext);

  if (!context.user?.uid) {
    return <Redirect to='/news_briefer/login' />;
  }
  return (
    <div>
      <ul>
        <br />
        <h5 className='center pink-text'>
          <strong>Search News</strong>
        </h5>
        <div className='UserStyle'>
          {!loading && news.length === 0 ? (
            <Preloader />
          ) : (
            news.map((NewsReducer) => (
              <NewsItem NewsReducer={NewsReducer} key={NewsReducer.title} />
            ))
          )}
        </div>
      </ul>
    </div>
  );
};

Home.propTypes = {
  searchNews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // Can call 1st element whatever you want rather than news
  new: state.NewsReducer,
});

export default connect(mapStateToProps, { searchNews })(Home);
