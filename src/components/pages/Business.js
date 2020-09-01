import React from 'react';
import Preloader from '../layout/Preloader';
import { busNews } from '../../actions/NewsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';

import InfiniteScroll from 'react-infinite-scroller';

const Business = ({ new: { busnews, loading }, busNews }) => {
  if (loading || busnews === null) {
    return <Preloader />;
  }

  return (
    <ul>
      <br />
      <h5 className='center pink-text'>
        <strong>Business News</strong>{' '}
      </h5>
      <div className='UserStyle'>
        {!loading && busnews.length === 0 ? (
          <Preloader />
        ) : (
          busnews.map((NewsReducer) => (
            <NewsItem NewsReducer={NewsReducer} key={NewsReducer.title} />
          ))
        )}
        <InfiniteScroll
          pageStart={0}
          loadMore={busNews}
          hasMore={busnews.length < 69}
        ></InfiniteScroll>
      </div>
    </ul>
  );
};

Business.propTypes = {
  busnews: PropTypes.array.isRequired,
  busNews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // Can call 1st element whatever you want rather than news
  new: state.NewsReducer,
});

export default connect(mapStateToProps, { busNews })(Business);
