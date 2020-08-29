import React, { useEffect } from 'react';
import Preloader from '../layout/Preloader';
import { sportNews } from '../../actions/NewsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';

const Sports = ({ new: { news, loading }, sportNews }) => {
  useEffect(() => {
    sportNews();
    //eslint-disable-next-line
  }, []);

  if (loading || news === null) {
    return <Preloader />;
  }

  return (
    <ul>
      <br />
      <h5 className='center pink-text'>
        <strong>Sports News</strong>{' '}
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
  );
};

Sports.propTypes = {
  news: PropTypes.array.isRequired,
  sportNews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // Can call 1st element whatever you want rather than news
  new: state.NewsReducer,
});

export default connect(mapStateToProps, { sportNews })(Sports);
