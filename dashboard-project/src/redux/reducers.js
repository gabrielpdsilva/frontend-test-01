import { graphicReducer } from './graphicReducer';
import { combineReducers } from 'redux';
export const reducers = combineReducers({
  graphicState: graphicReducer,
});