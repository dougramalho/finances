import CONSTANTS from "../constants";
import appReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";



const logger = store => next => action => {
  
  console.log('Dispatching', action);
  let result = next(action);
  console.log('Next state', store.getState());
  return result;
  
}

export default (initialState={}) => {
	return applyMiddleware(thunk, logger)(createStore)(appReducer, initialState);
}

