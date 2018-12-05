
const INITIAL_STATE = {
  category: ''
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ID_EDIT':
      return { category: action.category }
    default:
      return state;
  }
}