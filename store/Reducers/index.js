import { combineReducers } from "redux";
const { types } = require("../Types/types");


const INIT_STATE = {
  loading: false,
  error: null,
  data: [],
};

export const getAllCategoriesReducer = (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case types.GET_ALL_CATEGORIES_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_ALL_CATEGORIES_SUCSES:
      return {
        ...state,
        loading: false,
        error: null,
        data: payload,
      };
    case types.GET_ALL_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const getSubCategoryReducer = (
  state = INIT_STATE,
  { type, payload }
) => {
  switch (type) {
    case types.GET_SUB_CATEGORIES_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_SUB_CATEGORIES_SUCSES:
      return {
        ...state,
        loading: false,
        error: null,
        data: payload,
      };
    case types.GET_SUB_CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const getOptionsChildReducer = (
  state = INIT_STATE,
  { type, payload }
) => {
  switch (type) {
    case types.GET_OPTION_CHILD_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_OPTION_CHILD_SUCSES:
      return {
        ...state,
        loading: false,
        error: null,
        data: payload,
      };
    case types.GET_OPTION_CHILD_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
export default combineReducers({
  Categories: getAllCategoriesReducer,
  SubCategory: getSubCategoryReducer,
  OptionsChild: getOptionsChildReducer,
});