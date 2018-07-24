import { createStore, combineReducers, applyMiddleware } from "redux";
//import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import projectsReducer from "./reducers/projectsReducer";
import arduinosReducer from "./reducers/arduinosReducer";
import colorReducer from "./reducers/colorReducer";

export default createStore(
  combineReducers({ projectsReducer, arduinosReducer, colorReducer }),
  {},
  applyMiddleware(thunk)
  //applyMiddleware(createLogger(),thunk)
);
