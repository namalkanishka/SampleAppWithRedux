import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './app/reducers';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import AppContainer from './app/containers/AppContainer';

import { connect } from 'react-redux';
//import store from './store/store.js';
//import CounterContainer from './containers/CounterContainer.js';


//const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      createLogger
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store =configureStore({});


class Peckish extends Component{
  render(){
    return(
      <View>
        <Text>
          hellow
        </Text>
      </View>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});