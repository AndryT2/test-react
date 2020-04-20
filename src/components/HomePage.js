import React from 'react';
import { Link } from 'react-router-dom';

import ProductsContainer from '../containers/ProductsContainer';
import FiltersContainer from '../containers/FiltersContainer';
import { useSelector } from 'react-redux';
import { cartSelector } from '../reducers/selectors';

function HomePage() {

  const cart = useSelector(cartSelector);

  return (
    <div className="App">
      <header className="App-header">
        <FiltersContainer />

        <div className="info">
          { cart.totalCost !== 0 && <span className="cost">{ `Итог: ${cart.totalCost}$` }</span> }
          <div className="cart">
            <Link to="/cart/">Корзина</Link>
            { cart.productInCart.length !== 0 && <span className="count">{` | ${cart.productInCart.length}`}</span>}
          </div>
        </div>
      </header>
      <ProductsContainer />
    </div>
  )
}

export default HomePage;
