
const INITIAL_STATE = {
  edit: ''
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ID_EDIT':
      return { edit: action.edit }
    default:
      return state;
  }
}