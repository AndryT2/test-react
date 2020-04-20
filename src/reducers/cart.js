import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ALL_FROM_CART
} from '../constants/types';

const initialState = {
  productInCart: [],
  totalCost: 0
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        productInCart: [
          ...state.productInCart,
          action.product
        ],
        totalCost: state.totalCost + action.product.cost
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        productInCart: [
          ...state.productInCart.filter(product => product.id !== action.product.id)
        ],
        totalCost: state.totalCost - action.product.cost
      }
    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        productInCart: [],
        totalCost: 0
      }
    default:
      return state
  }
};

export default cart;
