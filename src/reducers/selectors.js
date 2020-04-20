import { createSelector } from 'reselect';
import * as deepEqual from 'fast-deep-equal';

export const cartSelector = state => state.cart;

export const productsSelector = state => state.products.products;
export const filterSelector = state => [ ...state.products.filters ];

export const getProductsByFilter = createSelector(
  productsSelector,
  filterSelector,
  (products, filters) => {
    let filtersProducts;

    if (!filters.length) {
      return products;
    }

    console.log(products);
    console.log(filters);

    if (filters.length === 1) {
      filtersProducts = products.filter(product => product.categories.some(category => category === filters[0]))
    } else {
      filters = filters.sort((a,b) => a -b);

      filtersProducts = products.filter(product => {
        product.categories = product.categories.sort((v1,v2) => v1 - v2);
        return deepEqual(product.categories, filters)
      });
    };

    return filtersProducts;
  }
);
