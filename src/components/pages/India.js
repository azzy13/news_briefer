import React, { useContext } from 'react';
import Preloader from '../layout/Preloader';
import { indNews } from '../../actions/NewsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';
import UserContext from '../../config/UserContext';
import { Redirect } from 'react-router-dom';

import InfiniteScroll from 'react-infinite-scroller';

const India = ({ new: { indianews, loading }, indNews }) => {
  const context = useContext(UserContext);

  if (!context.user?.uid) {
    return <Redirect to='/news_briefer/login' />;
  }
  return (
    <ul>
      <br />
      <h5 className='center pink-text'>
        <strong>India News</strong>{' '}
      </h5>
      <div className='UserStyle'>
        {!loading && indianews.length === 0 ? (
          <Preloader />
        ) : (
          indianews.map((NewsReducer) => (
            <NewsItem NewsReducer={NewsReducer} key={NewsReducer.title} />
          ))
        )}
        <InfiniteScroll
          pageStart={0}
          loadMore={indNews}
          hasMore={indianews.length < 30}
        ></InfiniteScroll>
      </div>
    </ul>
  );
};

India.propTypes = {
  indianews: PropTypes.array.isRequired,
  indNews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // Can call 1st element whatever you want rather than news
  new: state.NewsReducer,
});

export default connect(mapStateToProps, { indNews })(India);
