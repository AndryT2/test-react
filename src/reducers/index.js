import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import categories from './categories';

export default combineReducers({
  cart,
  products,
  categories
});
