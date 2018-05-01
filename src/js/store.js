import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import {
  createLogger
} from "redux-logger";

import dumbReducer from "./reducers/dumbReducer";

export default createStore(
  combineReducers({
    dumbReducer
  }),
  {},
  applyMiddleware(createLogger())
);
