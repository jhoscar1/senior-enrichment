import { combineReducers } from 'redux'
import campus from './campus';
import users from './user';

export default combineReducers({campus, users});