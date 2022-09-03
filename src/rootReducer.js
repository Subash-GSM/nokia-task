import { FormReducer } from './Redux-Saga/reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  FormReducer: FormReducer,
});

export default RootReducer;
