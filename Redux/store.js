// import {createStore, combineReducers, applyMiddleware} from 'redux';
// import AuthReducers from './reducers';
// import thunk from 'redux-thunk';

// const RootReducers = combineReducers({
//   // //   //reducers
//   AuthReducers,
// });

// export const store = createStore(RootReducers, applyMiddleware(thunk));

import {applyMiddleware, createStore} from 'redux';
import reducer from '../Redux/Reducer/index';
import thunk from 'redux-thunk';

export const store = createStore(reducer, applyMiddleware(thunk));
