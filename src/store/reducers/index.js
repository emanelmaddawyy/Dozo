import { combineReducers } from 'redux'
import categoriesReducer from './categories'
import configsReducer from './configs'

export default combineReducers({
    categoriesReducer,
    configsReducer
});