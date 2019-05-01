import {combineReducers, createStore} from 'redux';
import storage from 'redux-persist/lib/storage'
import dataBaseReducer from "./dataBaseReducer";

const rootPersistConfig = {
    key: 'root',
    storage: storage
}

// Change if we want persistent data
// export default createStore(persistCombineReducers(rootPersistConfig,{dataBaseReducer}))
export default createStore(combineReducers({dataBaseReducer}))