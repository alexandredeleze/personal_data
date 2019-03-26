const initialState = { lowPriority: [] }

function lowPriorityReducer(state = initialState, action) {
    let nextState
    switch (action.type) {
        case 'ADD_LOW':
            const lowPriorityIndex = state.lowPriority.findIndex(item => item === action.value)
            if (lowPriorityIndex === -1) {
                nextState = {
                    ...state,
                    lowPriority: [...state.lowPriority, {value:action.value}]
                }
            }
            return nextState || state
        case 'REMOVE_LOW':{
            const lowPriorityIndex = state.lowPriority.findIndex(item => item === action.value)
            if (lowPriorityIndex !== -1) {
                nextState = {
                    ...state,
                    lowPriority: state.lowPriority.filter( (item, index) => index !== lowPriorityIndex)
                }
            }
            return nextState || state
        }

        default:
            return state
    }
}

export default lowPriorityReducer