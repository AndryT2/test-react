import * as types from '../constants/types';

const initialState = {
  products: [],
  filters: new Set(),
  error: null
};

export default function productsReducer (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [
          ...action.products.map(product => ({
            ...product,
            isChecked: false
          }))
        ],
        error: null
      }
    case types.ADD_TO_CART:
    case types.REMOVE_FROM_CART:
      const products = state.products.map(product => {
        if ( product.id === action.product.id) {
          product.isChecked = !product.isChecked;
        }
        return product;
      });

      return {
        ...state,
        products,
        error: null
      }
    case types.REMOVE_ALL_FROM_CART:
      return {
        ...state,
        products: state.products.map(product => ({ ...product, isChecked: false }) ),
        error: null
      }
    case types.ADD_ID_FOR_FILTRATION:
      const isExist = state.filters.has(action.category.id);

      if (isExist) {
        state.filters.delete(action.category.id)
        return {
          ...state
        }
      }

      return {
        ...state,
        filters: state.filters.add(action.category.id),
        error: null
      }
    case types.LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
};
