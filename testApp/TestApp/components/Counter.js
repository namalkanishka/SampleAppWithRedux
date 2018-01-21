import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Counter extends Component {
  render() {
    return (
      <View>
        {/* <Text
          style={styles.counter}
          onPress={this.props.reset}>
          {this.props.name}
        </Text> */}
        <Button
          title="Up"
          onPress={this.props.increment}/>
        <Text
          style={styles.counter}
          onPress={this.props.reset}>
          {this.props.count}
        </Text>
        <Button
          title="Down"
          onPress={this.props.decrement}/>
           <Button
          title="reset name"
          onPress={this.props.resetname}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});