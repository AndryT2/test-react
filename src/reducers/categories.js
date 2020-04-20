import * as types from '../constants/types';

const initialState = {
  categories: [],
  error: null
};

export default function categoriesReducer (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [
          ...action.categories.map(category => ({
            ...category,
            isChecked: false
          }))
        ],
        error: null
      }
    case types.ADD_ID_FOR_FILTRATION:
      const categories = state.categories.map(category => {
        if ( category.id === action.category.id) {
          category.isChecked = !category.isChecked;
        }
        return category;
      });

      return {
        ...state,
        categories,
        error: null
      }
    case types.LOAD_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
};
