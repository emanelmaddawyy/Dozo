import { createStore } from 'redux';
import reducers from './reducers/index';

function loadState() {
    const state = localStorage.getItem('dozo');

    if (state !== null) {
        return JSON.parse(state)
    } else {
        return {}
    }
}

function saveState(state) {
    localStorage.setItem('dozo', JSON.stringify(state))
}

const store = createStore(reducers, loadState(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    saveState(store.getState())
})

export default store;