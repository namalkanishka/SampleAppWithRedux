import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Counter from '../components/Counter.js';

const mapStateToProps = (state) => ({
  count: state,
  name: "namal"
})

const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: 'INCREMENT' }) },
  decrement: () => { dispatch({ type: 'DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
  resetname: () => { dispatch({ type: 'RESETNAME' }) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)