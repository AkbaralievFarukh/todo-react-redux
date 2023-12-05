import {createStore } from'redux';
import  { composeWithDevTools} from "redux-devtools-extension";
import {todoReducer} from './todoReducer/todoReducer';

const store = createStore(
    todoReducer,
    composeWithDevTools()
);

export default store;