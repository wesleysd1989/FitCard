
const INITIAL_STATE = {}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'COMPANY':
            return { ...state, company: action.payload}
        default:
            return state
    }
}