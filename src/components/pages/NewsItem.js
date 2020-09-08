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
      <div className='center-align'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={NewsReducer.url}
          className='btn btn-pink btn-sm my-1 cus_btn_left'
        >
          Full Story Here &#10132;
        </a>
      </div>
      <div className='right'>
        <ul>
          <li>
            <a
              href={
                'https://www.facebook.com/sharer/sharer.php?u=' +
                NewsReducer.url
              }
              className='waves-effect waves-light btn social facebook cus_btn_right'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-facebook'></i>
            </a>
          </li>
          <li>
            <a
              href={
                'https://www.twitter.com/intent/tweet?text=' + NewsReducer.url
              }
              className='waves-effect waves-light btn social twitter cus_btn_middle'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fa fa-twitter'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  NewsReducer: PropTypes.object.isRequired,
};

export default NewsItem;
