import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger'
import reducer from "./reducers.js";


const store = createStore(reducer,applyMiddleware(...[thunkMiddleware,logger]));
// export default (store) => {
//   return createStore(
//     reducer,
//     store,
//     applyMiddleware(...[thunkMiddleware,logger])
//   );
// }

// let store = createStore(
//   reducer,
//   // applyMiddleware(thunk)
//   applyMiddleware(...[thunkMiddleware,logger])
// )
export default store;
