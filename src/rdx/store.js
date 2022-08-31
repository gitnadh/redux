import { createStore } from 'redux'
import {ckReducer} from './ckReducer';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store=createStore (ckReducer,devtools)