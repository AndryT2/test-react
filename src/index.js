import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import './styles/index.scss';
import App from './containers/App';
import thunk from 'redux-thunk';
import { getAllProducts, getCategories } from './actions/actions';

const middleware = [thunk]
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(reducer, enhancer);

store.dispatch(getAllProducts());
store.dispatch(getCategories());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

