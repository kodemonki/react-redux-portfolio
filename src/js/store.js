import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import projectsReducer from "./reducers/projectsReducer";
import arduinosReducer from "./reducers/arduinosReducer";

export default createStore(
  combineReducers({projectsReducer, arduinosReducer}), 
  {},
  applyMiddleware(createLogger(),thunk)
);
