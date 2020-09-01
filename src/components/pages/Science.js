import React from 'react';
import Preloader from '../layout/Preloader';
import { sciNews } from '../../actions/NewsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';

import InfiniteScroll from 'react-infinite-scroller';

const Science = ({ new: { scinews, loading }, sciNews }) => {
  if (loading || scinews === null) {
    return <Preloader />;
  }

  return (
    <ul>
      <br />
      <h5 className='center pink-text'>
        <strong>Science News</strong>{' '}
      </h5>
      <div className='UserStyle'>
        {!loading && scinews.length === 0 ? (
          <Preloader />
        ) : (
          scinews.map((NewsReducer) => (
            <NewsItem NewsReducer={NewsReducer} key={NewsReducer.title} />
          ))
        )}
        <InfiniteScroll
          pageStart={0}
          loadMore={sciNews}
          hasMore={scinews.length < 69}
        ></InfiniteScroll>
      </div>
    </ul>
  );
};

Science.propTypes = {
  scinews: PropTypes.array.isRequired,
  sciNews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // Can call 1st element whatever you want rather than news
  new: state.NewsReducer,
});

export default connect(mapStateToProps, { sciNews })(Science);
