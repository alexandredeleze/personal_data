const initialState = { dataBase: [] }

function dataBaseReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'ADD_ELEMENT':
            const indexOfElement = state.dataBase.findIndex(item => item.title=== action.title && item.date === action.date)

            if (indexOfElement === -1) {
                nextState = {
                    ...state,
                    dataBase: [...state.dataBase, {title: action.title, date:action.date, completed: undefined, priority:action.priority}]
                }
            }
            return nextState || state
        case 'REMOVE_ELEMENT':{
            const indexOfElement = state.dataBase.findIndex(item => item.title=== action.title && item.date === action.date)
            if (indexOfElement !== -1) {
                nextState = {
                    ...state,
                    dataBase: state.dataBase.filter( (item, index) => index !== indexOfElement)
                }
            }
            return nextState || state
        }

        case 'UPDATE_ELEMENT':{
            const indexOfElement = state.dataBase.findIndex(item => item.title=== action.title && item.date === action.date)
            if (indexOfElement !== -1) {
                const updatedData = {title: action.title, date:action.date, completed:action.completed, priority: action.priority}
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