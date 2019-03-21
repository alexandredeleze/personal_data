const initialState = { highPriority: [] }

function highPriorityReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'ADD_HIGH':
            const highPriorityIndex = state.highPriority.findIndex(item => item=== action.value)
            if (highPriorityIndex === -1) {
                nextState = {
                    ...state,
                    highPriority: [...state.highPriority, {key:state.highPriority.length,value: action.value}]
                }
            }
            return nextState || state
        case 'REMOVE_HIGH':{
            const highPriorityIndex = state.highPriority.findIndex(item => item === action.value)
            if (highPriorityIndex !== -1) {
                nextState = {
                    ...state,
                    highPriority: state.highPriority.filter( (item, index) => index !== highPriorityIndex)
                }
            }
            return nextState || state
        }

        default:
            return state
    }
}

export default highPriorityReducer