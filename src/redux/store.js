import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import ReducersRoot from '../redux/reducersRoot';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  ReducersRoot,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
