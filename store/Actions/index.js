import axios from "axios";
import { types } from "../Types/types";


export const getAllCategories = () => {
  return async (dispatch) => {
    dispatch({
      type: types.GET_ALL_CATEGORIES_LOADING,
    });
    try {
      const res = await axios({
        method: "GET",
        url: `https://staging.mazaady.com/api/v1/get_all_cats`,
        headers: {
          "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
        },
      });
      dispatch({
        type: types.GET_ALL_CATEGORIES_SUCSES,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: types.GET_ALL_CATEGORIES_ERROR,
        payload: error.response ? error.response.data : error,
      });
    }
  };
};

export const getSubCategory = (categoryId) => {
  return async (dispatch) => {
    dispatch({
      type: types.GET_SUB_CATEGORIES_LOADING,
    });
    try {
      const res = await axios({
        method: "GET",
        url: `https://staging.mazaady.com/api/v1/properties?cat=${categoryId}`,
        headers: {
          "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
        },
      });
      dispatch({
        type: types.GET_SUB_CATEGORIES_SUCSES,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: types.GET_SUB_CATEGORIES_ERROR,
        payload: error.response ? error.response.data : error,
      });
    }
  };
};
export const getOptionsChild = (optionId) => {
  return async (dispatch) => {
    dispatch({
      type: types.GET_OPTION_CHILD_LOADING,
    });
    try {
      const res = await axios({
        method: "GET",
        url: `https://staging.mazaady.com/api/v1/get-options-child/${optionId}`,
        headers: {
          "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
        },
      });
      dispatch({
        type: types.GET_OPTION_CHILD_SUCSES,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: types.GET_OPTION_CHILD_ERROR,
        payload: error.response ? error.response.data : error,
      });
    }
  };
};