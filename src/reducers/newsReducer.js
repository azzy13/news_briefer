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
  SET_PAGE,
} from '../actions/types';

const initialState = {
  news: [],
  sportnews: [],
  technews: [],
  healthnews: [],
  indianews: [],
  scinews: [],
  entnews: [],
  busnews: [],
  snews: [],
  page: 1,
  loading: false,
  errors: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SPORTS_NEWS:
      return {
        ...state,
        sportnews: [...state.sportnews, ...action.payload],
        loading: false,
      };
    case TECH_NEWS:
      return {
        ...state,
        technews: [...state.technews, ...action.payload],
        loading: false,
      };
    case HEALTH_NEWS:
      return {
        ...state,
        healthnews: [...state.healthnews, ...action.payload],
        loading: false,
      };
    case INDIA_NEWS:
      return {
        ...state,
        indianews: [...state.indianews, ...action.payload],
        loading: false,
      };
    case SCIENCE_NEWS:
      return {
        ...state,
        scinews: [...state.scinews, ...action.payload],
        loading: false,
      };
    case ENT_NEWS:
      return {
        ...state,
        entnews: [...state.entnews, ...action.payload],
        loading: false,
      };
    case BUSINESS_NEWS:
      return {
        ...state,
        busnews: [...state.busnews, ...action.payload],
        loading: false,
      };
    case GET_DATA:
      return {
        ...state,
        snews: [...state.snews, ...action.payload],
        loading: false,
      };
    case SEARCH_NEWS:
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
    case SET_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
};
