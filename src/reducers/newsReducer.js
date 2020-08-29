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
} from '../actions/types';

const initialState = {
  news: [],
  loading: false,
  errors: null,
  page: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SPORTS_NEWS:
    case TECH_NEWS:
    case HEALTH_NEWS:
    case INDIA_NEWS:
    case SCIENCE_NEWS:
    case ENT_NEWS:
    case BUSINESS_NEWS:
    case SEARCH_NEWS:
    case GET_DATA:
      return {
        ...state,
        news: action.payload,
        loading: false,
      };
    case LOGS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
