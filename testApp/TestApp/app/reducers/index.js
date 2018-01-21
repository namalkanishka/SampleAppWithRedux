import { combineReducers } from 'redux';
import * as recipesReducer from './recipers';

export default combineReducers(Object.assign(
    recipesReducer,
));