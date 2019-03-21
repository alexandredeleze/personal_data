import { createStore, combineReducers } from 'redux';
import highPriorityReducer from "./highPriorityReducer";
import lowPriorityReducer from "./lowPriorityReducer";
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const rootPersistConfig = {
    key: 'root',
    storage: storage
}

export default createStore(persistCombineReducers(rootPersistConfig,{highPriorityReducer, lowPriorityReducer}))