import React from 'react';
import Preloader from '../layout/Preloader';
import { entNews } from '../../actions/NewsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';

import InfiniteScroll from 'react-infinite-scroller';

const Ent = ({ new: { entnews, loading }, entNews }) => {
  if (loading || entnews === null) {
    return <Preloader />;
  }

  return (
    <ul>
      <br />
      <h5 className='center pink-text'>
        <strong>Entertainment News</strong>{' '}
      </h5>
      <div className='UserStyle'>
        {!loading && entnews.length === 0 ? (
          <Preloader />
        ) : (
          entnews.map((NewsReducer) => (
            <NewsItem NewsReducer={NewsReducer} key={NewsReducer.title} />
          ))
        )}
        <InfiniteScroll
          pageStart={0}
          loadMore={entNews}
          hasMore={entnews.length < 69}
        ></InfiniteScroll>
      </div>
    </ul>
  );
};

Ent.propTypes = {
  entnews: PropTypes.array.isRequired,
  entNews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // Can call 1st element whatever you want rather than news
  new: state.NewsReducer,
});

export default connect(mapStateToProps, { entNews })(Ent);
