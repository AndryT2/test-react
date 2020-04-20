import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/actions';
import ProductPage from '../components/ProductPage';
import { useParams } from 'react-router-dom';
import '../styles/ProductPage.scss';

const ProductsContainer = ({ addToCart, removeFromCart, data }) => {

  let { id } = useParams();

  const product = data.find(elem => elem.id === Number(id));

  return (
    <div className="product-page">
    {
      product &&
        ( <>
            <ProductPage
              key={product.id}
              product={product}
              onAddToCartClicked={() => addToCart(product)}
              onRemoveFromCardClicked={() => removeFromCart(product)}
            />
          </>
        )
    }
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.products.products
});

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(ProductsContainer);
