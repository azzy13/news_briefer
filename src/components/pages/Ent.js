import React, { useEffect } from 'react';
import Preloader from '../layout/Preloader';
import { entNews } from '../../actions/NewsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';

const Ent = ({ new: { news, loading }, entNews }) => {
  useEffect(() => {
    entNews();
    //eslint-disable-next-line
  }, []);

  if (loading || news === null) {
    return <Preloader />;
  }

  return (
    <ul>
      <br />
      <h5 className='center pink-text'>
        <strong>Entertainment News</strong>{' '}
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

Ent.propTypes = {
  news: PropTypes.array.isRequired,
  entNews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // Can call 1st element whatever you want rather than news
  new: state.NewsReducer,
});

export default connect(mapStateToProps, { entNews })(Ent);
