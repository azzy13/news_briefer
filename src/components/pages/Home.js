import React, { useEffect } from 'react';
import Preloader from '../layout/Preloader';
import { getNews } from '../../actions/NewsActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NewsItem from './NewsItem';

const Home = ({ new: { news, loading, page }, getNews }) => {
  useEffect(() => {
    getNews(page);
    //eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <ul>
        <br />
        <h5 className='center pink-text'>
          <strong>Trending News</strong>{' '}
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
    </div>
  );
};

Home.propTypes = {
  getNews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // Can call 1st element whatever you want rather than news
  new: state.NewsReducer,
});

export default connect(mapStateToProps, { getNews })(Home);
