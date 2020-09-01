import React from 'react';
import Preloader from '../layout/Preloader';
import { techNews } from '../../actions/NewsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';

import InfiniteScroll from 'react-infinite-scroller';

const Tech = ({ new: { technews, loading }, techNews }) => {
  if (loading || technews === null) {
    return <Preloader />;
  }

  return (
    <ul>
      <br />
      <h5 className='center pink-text'>
        <strong>Tech News</strong>{' '}
      </h5>
      <div className='UserStyle'>
        {!loading && technews.length === 0 ? (
          <Preloader />
        ) : (
          technews.map((NewsReducer) => (
            <NewsItem NewsReducer={NewsReducer} key={NewsReducer.title} />
          ))
        )}
        <InfiniteScroll
          pageStart={0}
          loadMore={techNews}
          hasMore={technews.length < 69}
        ></InfiniteScroll>
      </div>
    </ul>
  );
};

Tech.propTypes = {
  technews: PropTypes.array.isRequired,
  techNews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // Can call 1st element whatever you want rather than news
  new: state.NewsReducer,
});

export default connect(mapStateToProps, { techNews })(Tech);
