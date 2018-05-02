import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import {
  createLogger
} from "redux-logger";
import thunk from "redux-thunk";

import dumbReducer from "./reducers/dumbReducer";

export default createStore(
  combineReducers({
    dumbReducer
  }),
  {},
  applyMiddleware(createLogger(),thunk)
);
