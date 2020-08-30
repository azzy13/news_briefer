import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({ NewsReducer }) => {
  return (
    <div className='card hoverable' key={NewsReducer.title}>
      <img
        src={NewsReducer.urlToImage}
        onerror='
        this.src=url(../../img/peepo.png)'
        alt='Sad Life No Pic'
        className='responsive-img card-image'
        id='cus_displayimg'
      />
      <a href={NewsReducer.url} className='cus_heading'>
        <h5>{NewsReducer.title}</h5>
      </a>
      <p>{NewsReducer.description}</p>

      <p className=''>Published At: {NewsReducer.publishedAt}</p>
      <p>
        <strong>Source: {NewsReducer.source.name}</strong>
      </p>
      <br />
      <div className='center-align cus_flex'>
        <a href={NewsReducer.url} className='btn btn-pink btn-sm my-1 cus_btn'>
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
