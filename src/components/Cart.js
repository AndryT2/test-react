import React from 'react';
import '../styles/Cart.scss';
import CardForm from './Form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Cart = ({ products, total, removeAllElementsFromCart }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <div>
        {product.name} - &#36;{product.cost}$
      </div>
    )
  ) : (
    <em>Нет предметов в корзине</em>
  )

  return (
    <div className="cart-container">
      <h3>Ваша корзина</h3>
      <div>{nodes}</div>
      <p>Итог: &#36;{total}</p>
      <Link to="/">
        Назад
      </Link>
      <button onClick={removeAllElementsFromCart}>
        Очистить корзину
      </button>
      <CardForm />
    </div>
  )
};

Cart.propTypes = {
  total: PropTypes.number.isRequired,
  removeAllElementsFromCart: PropTypes.func.isRequired
};

export default Cart;
