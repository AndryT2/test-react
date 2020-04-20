import * as types from '../constants/types';

import axios from 'axios';

const loadProducts = () => ({
  type: types.LOAD_PRODUCTS
});

const loadProductsSuccess = (products) => ({
  type: types.LOAD_PRODUCTS_SUCCESS,
  products
});

const loadProductsFailure = (error) => ({
  type: types.LOAD_PRODUCTS_FAILURE,
  error
});

const loadCategories = () => ({
  type: types.LOAD_CATEGORIES
});

const loadCategoriesSuccess = (categories) => ({
  type: types.LOAD_CATEGORIES_SUCCESS,
  categories
});

const loadCategoriesFailure = (error) => ({
  type: types.LOAD_CATEGORIES_FAILURE,
  error
});

export const addToCart = (product) => ({
  type: types.ADD_TO_CART,
  product
});

export const removeFromCart = (product) => ({
  type: types.REMOVE_FROM_CART,
  product
});

export const removeAllFromCart = () => ({
  type: types.REMOVE_ALL_FROM_CART,
});

export const setFilter = (category) => ({
  type: types.ADD_ID_FOR_FILTRATION,
  category
});

export const getAllProducts = () => dispatch => {
  dispatch(loadProducts());

  axios
    .get(`https://www.mocky.io/v2/5e982fa93500007f00c47f6c`, {
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type" : "application/json"
      }
    })
    .then(products => {
      dispatch(loadProductsSuccess(products.data))
    })
    .catch(error => {
      dispatch(loadProductsFailure(error))
    })
};

export const getCategories = () => dispatch => {
  dispatch(loadCategories());

  axios
    .get(`https://www.mocky.io/v2/5e982f9c3500007a00c47f6b`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    .then(categories => {
      dispatch(loadCategoriesSuccess(categories.data))
    })
    .catch(error => {
      dispatch(loadCategoriesFailure(error))
    })
};
