const initialState = { dataBase: [] }

function dataBaseReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'ADD_ELEMENT':
            const indexOfElement = state.dataBase.findIndex(item => item.value=== action.value && item.date === action.date)

            if (indexOfElement === -1) {
                nextState = {
                    ...state,
                    dataBase: [...state.dataBase, {value: action.value, date:action.date, activated: undefined}]
                }
            }
            return nextState || state
        case 'REMOVE_ELEMENT':{
            const indexOfElement = state.dataBase.findIndex(item => item.value=== action.value && item.date === action.date)
            if (indexOfElement !== -1) {
                nextState = {
                    ...state,
                    dataBase: state.dataBase.filter( (item, index) => index !== indexOfElement)
                }
            }
            return nextState || state
        }

        case 'UPDATE_ELEMENT':{
            const indexOfElement = state.dataBase.findIndex(item => item.value=== action.value && item.date === action.date)
            if (indexOfElement !== -1) {
                const updatedData = {value: action.value, date:action.date, activated:action.activated}
                nextState = {
                    ...state,
                    dataBase: [...state.dataBase.slice(0,indexOfElement),updatedData,...state.dataBase.slice(indexOfElement+1)]

                }
            }
            return nextState
        }

        default:
            return state
    }
}

export default dataBaseReducer