import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

const NewsItem = ({ NewsReducer }) => {
  return (
    <div className='card hoverable' key={NewsReducer.title}>
      <img
        src={NewsReducer.urlToImage}
        alt='Sad Life No Pic'
        className='responsive-img card-image'
        id='cus_displayimg'
      />
      <a
        target='_blank'
        rel='noopener noreferrer'
        href={NewsReducer.url}
        className='cus_heading'
      >
        <h5>{NewsReducer.title}</h5>
      </a>
      <p>{NewsReducer.description}</p>

      <p className=''>
        Published At:{' '}
        {dateFormat(NewsReducer.publishedAt, 'mmmm dS, yyyy, h:MM:ss TT')}
      </p>
      <p>
        <strong>Source: {NewsReducer.source.name}</strong>
      </p>
      <br />
      <div className='center-align cus_flex'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={NewsReducer.url}
          className='btn btn-pink btn-sm my-1 cus_btn'
        >
          Full Story Here &#10132;
        </a>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  NewsReducer: PropTypes.object.isRequired,
};

export default NewsItem;
