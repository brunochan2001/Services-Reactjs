import { combineReducers, createStore } from 'redux';
import { serviceReducer } from './reducers';
// import serviceReducer from './reducers/serviceReducer';

const reducer = combineReducers({ service: serviceReducer });

const store = createStore(reducer);
store.subscribe(() => console.log(store));
export default store;
