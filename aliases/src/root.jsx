import { React } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './containers';


const store = createStore(reducers, applyMiddleware(compose(thunk)));

const Root = () => (
  <Provider store={store}>

  </Provider>
);

export default Root;
