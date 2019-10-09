import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./_Containers/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import { requestUsers, searchUsers } from "./_Reducers/reducers";
import { createLogger } from "redux-logger";

const logger = createLogger();

const rootReducers = combineReducers({ requestUsers, searchUsers });

const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
