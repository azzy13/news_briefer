import {
  GET_DATA,
  LOGS_ERROR,
  SET_LOADING,
  SEARCH_NEWS,
  INDIA_NEWS,
  SCIENCE_NEWS,
  SPORTS_NEWS,
  ENT_NEWS,
  BUSINESS_NEWS,
  TECH_NEWS,
  HEALTH_NEWS,
} from './types';

//fetch news
export const getNews = (page) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?page=${page}&country=us&apiKey=ad2da63f7b9844b4a366d4c19afb0537`
    );
    const data = await res.json();

    dispatch({
      type: GET_DATA,
      payload: data.articles,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Search logs
export const searchNews = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      `https://newsapi.org/v2/everything?q=${text}&apiKey=ad2da63f7b9844b4a366d4c19afb0537`
    );
    const data = await res.json();

    dispatch({
      type: SEARCH_NEWS,
      payload: data.articles,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// India news
export const indNews = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      'http://newsapi.org/v2/top-headlines?country=in&apiKey=ad2da63f7b9844b4a366d4c19afb0537'
    );
    const data = await res.json();
    dispatch({
      type: INDIA_NEWS,
      payload: data.articles,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Sciene news
export const sciNews = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      'http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=ad2da63f7b9844b4a366d4c19afb0537'
    );
    const data = await res.json();
    dispatch({
      type: SCIENCE_NEWS,
      payload: data.articles,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Sports news
export const sportNews = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      'http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ad2da63f7b9844b4a366d4c19afb0537'
    );
    const data = await res.json();
    dispatch({
      type: SPORTS_NEWS,
      payload: data.articles,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Ent news
export const entNews = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      'http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=ad2da63f7b9844b4a366d4c19afb0537'
    );
    const data = await res.json();
    dispatch({
      type: ENT_NEWS,
      payload: data.articles,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Tech news
export const techNews = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      'http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=ad2da63f7b9844b4a366d4c19afb0537'
    );
    const data = await res.json();
    dispatch({
      type: TECH_NEWS,
      payload: data.articles,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//Health news
export const healthNews = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      'http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=ad2da63f7b9844b4a366d4c19afb0537'
    );
    const data = await res.json();
    dispatch({
      type: HEALTH_NEWS,
      payload: data.articles,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// Business news
export const busNews = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch(
      'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ad2da63f7b9844b4a366d4c19afb0537'
    );
    const data = await res.json();
    dispatch({
      type: BUSINESS_NEWS,
      payload: data.articles,
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText,
    });
  }
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
