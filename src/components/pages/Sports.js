import React, { useContext } from 'react';
import Preloader from '../layout/Preloader';
import { sportNews } from '../../actions/NewsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';
import UserContext from '../../config/UserContext';
import { Redirect } from 'react-router-dom';

import InfiniteScroll from 'react-infinite-scroller';

const Sports = ({ new: { sportnews, loading }, sportNews }) => {
  const context = useContext(UserContext);

  if (!context.user?.uid) {
    return <Redirect to='/news_briefer/login' />;
  }

  return (
    <ul>
      <br />
      <h5 className='center pink-text'>
        <strong>Sports News</strong>{' '}
      </h5>
      <div className='UserStyle'>
        {!loading && sportnews.length === 0 ? (
          <Preloader />
        ) : (
          sportnews.map((NewsReducer) => (
            <NewsItem NewsReducer={NewsReducer} key={NewsReducer.title} />
          ))
        )}
        <InfiniteScroll
          pageStart={0}
          loadMore={sportNews}
          hasMore={sportnews.length < 69}
        ></InfiniteScroll>
      </div>
    </ul>
  );
};

Sports.propTypes = {
  sportnews: PropTypes.array.isRequired,
  sportNews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // Can call 1st element whatever you want rather than news
  new: state.NewsReducer,
});

export default connect(mapStateToProps, { sportNews })(Sports);
