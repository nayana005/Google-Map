import {createStore, combineReducers } from 'redux';
import { markerReducer } from './reducer';

const mainReducer = combineReducers({
    markerReducer : markerReducer,
})

const store = createStore(mainReducer)

export default store