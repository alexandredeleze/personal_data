import React from 'react';
import Store from '../store/configureStore';
const UtilsRedux = {
    _addToDataBase:function (element,date_element) {
        const action = {type:"ADD_ELEMENT", value:element, date:date_element}
        Store.dispatch(action)
    },
    _updateDataBase:function (element, date_element, activated_element) {
        const action = {type:"UPDATE_ELEMENT", value:element, date: date_element, activated:activated_element}
        Store.dispatch(action)
    }
}
export default UtilsRedux
