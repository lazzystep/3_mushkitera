import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { View } from "react-native";
// import reducers from './reducers';
import Routes from './routes';


// const store = createStore(reducers, applyMiddleware(compose(thunk)));
const store = createStore(() => {});

class Root extends Component {
  render(){
      return(
        <Provider store={store}>
          <View style={{flex: 1}}>
            <Routes />
          </View>
        </Provider>
      );
  }
}

export default Root;
