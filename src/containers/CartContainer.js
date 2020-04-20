import React from 'react';
import { connect } from 'react-redux';
import { removeAllFromCart } from '../actions/actions';
import Cart from '../components/Cart';

const CartContainer = ({ products, total, removeAllFromCart}) => (
  <Cart products={products}
        total={total}
        removeAllElementsFromCart={() => removeAllFromCart()}
        >
  </Cart>
);

const mapStateToProps = (state) => ({
  products: state.cart.productInCart,
  total: state.cart.totalCost
});

export default connect(
  mapStateToProps,
  { removeAllFromCart }
)(CartContainer);