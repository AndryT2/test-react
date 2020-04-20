import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductPage = ({ product, onAddToCartClicked, onRemoveFromCardClicked }) => (
  <div className="product">
    <div className="content">
      <span className="title">{product.name}</span>
      <br/>
      <span className="describe">{`Describe: ${product.descr}`}</span>
      <span className="cost">{`Cost: ${product.cost}$`}</span>
    </div>
    <Link to="/">
      Назад
    </Link>
    {
      !product.isChecked ? (
        <button onClick={onAddToCartClicked}>
          В корзину
        </button>
      ) : (
        <button className="remove-button" onClick={onRemoveFromCardClicked}>
          Удалить с корзины
        </button>
      )
    }
  </div>
)

ProductPage.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    descr: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    cost: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveFromCardClicked: PropTypes.func.isRequired
};

export default ProductPage;
