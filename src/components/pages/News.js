import React, { useContext } from 'react';
import Preloader from '../layout/Preloader';
import { getNews } from '../../actions/NewsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';
import UserContext from '../../config/UserContext';
import { Redirect } from 'react-router-dom';

import InfiniteScroll from 'react-infinite-scroller';

const News = ({ new: { snews, loading }, getNews }) => {
  const context = useContext(UserContext);

  if (!context.user?.uid) {
    return <Redirect to='/news_briefer/login' />;
  }

  return (
    <div>
      <ul>
        <br />
        <h5 className='center pink-text'>
          <strong>Latest News</strong>{' '}
        </h5>

        <div className='UserStyle'>
          {!loading && snews.length === 0 ? (
            <Preloader />
          ) : (
            snews.map((NewsReducer) => (
              <NewsItem NewsReducer={NewsReducer} key={NewsReducer.title} />
            ))
          )}
          <InfiniteScroll
            pageStart={0}
            loadMore={getNews}
            hasMore={snews.length < 100}
          ></InfiniteScroll>
        </div>
      </ul>
    </div>
  );
};

News.propTypes = {
  searchNews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // Can call 1st element whatever you want rather than news
  new: state.NewsReducer,
});

export default connect(mapStateToProps, { getNews })(News);
