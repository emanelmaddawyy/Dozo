import {createStore} from 'redux';
import categoriesReducer from './reducers/categories'

function loadState (){
   const state = localStorage.getItem('dozo');

   if(state !== null){
       return JSON.parse(state)
   } else {
       return {}
   }
}

function saveState(state) {
    localStorage.setItem('dozo', JSON.stringify(state))
}

const store = createStore(categoriesReducer, loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe( () => {
    saveState(store.getState())
})

export default store;