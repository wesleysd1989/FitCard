
const INITIAL_STATE = {}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CATEGORY':
            return { ...state, category: action.payload}
        default:
            return state
    }
}