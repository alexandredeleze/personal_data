import { createStore, combineReducers } from 'redux';
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import dataBaseReducer from "./dataBaseReducer";
const rootPersistConfig = {
    key: 'root',
    storage: storage
}

// Change if we want persistent data
//export default createStore(persistCombineReducers(rootPersistConfig,{tasksReducer, dataBaseReducer}))
export default createStore(combineReducers({dataBaseReducer}))