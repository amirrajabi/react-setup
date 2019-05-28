import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { appReducer } from "./app/reducers";

const rootReducer = combineReducers({
  appReducer
});

export default function configureStore() {
  const middleWares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middleWares);
  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
}
