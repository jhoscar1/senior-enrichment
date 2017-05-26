import { combineReducers } from 'redux'
import campus from './campus';
import students from './student';

export default combineReducers({campus, students});