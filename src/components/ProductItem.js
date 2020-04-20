import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, onAddToCartClicked, onRemoveFromCardClicked }) => (
  <div className="product">
    <div className="content">
      <span>{product.name}</span>
      <br/>
      <span>{product.cost}$</span>
    </div>
    <div className="buttons">
      <Link
        key={product.id}
        to={`/product/${product.id}/`}
        >
        Детали
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
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    cost: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired,
  onRemoveFromCardClicked: PropTypes.func.isRequired
};

export default ProductItem;
