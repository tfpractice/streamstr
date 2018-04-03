import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

//
// import { reducer as clock } from './clock';
// import { reducer as timer } from './timer';

const basic = (state = [], action) => state;

export default combineReducers({ basic, form });
