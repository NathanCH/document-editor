import { combineReducers } from 'redux';
import requestReducer from './requestReducer';
import visibilityReducer from './visibilityReducer';

export default combineReducers({ 
  request: requestReducer,
  ui: visibilityReducer,
});