export default (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_TRACK':
      return action.track;
    default:
      return state;
  }
};
