import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import sagaMiddleWare from "redux-saga";
import rootReducer from "./reducers";
import { fetching } from "./subscribers/root-saga";

const theSagaMiddleWare = sagaMiddleWare();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(theSagaMiddleWare))
);

theSagaMiddleWare.run(fetching);

export default store;
