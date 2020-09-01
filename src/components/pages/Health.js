import React from 'react';
import Preloader from '../layout/Preloader';
import { healthNews } from '../../actions/NewsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';

import InfiniteScroll from 'react-infinite-scroller';

const Health = ({ new: { healthnews, loading }, healthNews }) => {
  if (loading || healthnews === null) {
    return <Preloader />;
  }

  return (
    <ul>
      <br />
      <h5 className='center pink-text'>
        <strong>Health News</strong>{' '}
      </h5>
      <div className='UserStyle'>
        {!loading && healthnews.length === 0 ? (
          <Preloader />
        ) : (
          healthnews.map((NewsReducer) => (
            <NewsItem NewsReducer={NewsReducer} key={NewsReducer.title} />
          ))
        )}
        <InfiniteScroll
          pageStart={0}
          loadMore={healthNews}
          hasMore={healthnews.length < 69}
        ></InfiniteScroll>
      </div>
    </ul>
  );
};

Health.propTypes = {
  healthnews: PropTypes.array.isRequired,
  healthNews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // Can call 1st element whatever you want rather than news
  new: state.NewsReducer,
});

export default connect(mapStateToProps, { healthNews })(Health);
