import { combineReducers, createStore } from "redux";
import { search } from "./reducers/search";

const rootReducer = combineReducers({
  search: search
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;


