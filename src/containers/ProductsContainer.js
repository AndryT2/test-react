import React from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/actions'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductList'
import { getProductsByFilter } from '../reducers/selectors'

const ProductsContainer = ({ data, addToCart, removeFromCart }) => {
  return (
    <>
    {
      data.length === 0 ? (<h1>Нет данных</h1>) : (
        <ProductsList>
          {data.map(product =>
              <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={() => addToCart(product)}
                onRemoveFromCardClicked={() => removeFromCart(product)}
              />
          )}
        </ProductsList>

      )
    }
    </>
  )
};

const mapStateToProps = state => ({
  data: getProductsByFilter(state)
});

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(ProductsContainer);
