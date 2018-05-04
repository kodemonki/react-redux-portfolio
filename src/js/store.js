import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import projectsReducer from "./reducers/projectsReducer";

export default createStore(
  combineReducers({projectsReducer}), 
  {},
  applyMiddleware(createLogger(),thunk)
);
