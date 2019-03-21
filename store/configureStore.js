import { createStore, combineReducers } from 'redux';
import highPriorityReducer from "./highPriorityReducer";
import lowPriorityReducer from "./lowPriorityReducer";
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const rootPersistConfig = {
    key: 'root',
    storage: storage
}

// Change if we want persistent data
//export default createStore(persistCombineReducers(rootPersistConfig,{highPriorityReducer, lowPriorityReducer}))
export default createStore(combineReducers({highPriorityReducer,lowPriorityReducer}))