import React from 'react';
import Store from '../store/configureStore';
const UtilsRedux = {
    _addToDataBase:function (element,date_element, priority) {
        const action = {type:"ADD_ELEMENT", title:element, date:date_element, priority: priority}
        Store.dispatch(action)
    },
    _updateDataBase:function (element, date_element, completed, priority) {
        const action = {type:"UPDATE_ELEMENT", title:element, date: date_element, completed:completed, priority: priority}
        Store.dispatch(action)
    }
}
export default UtilsRedux
