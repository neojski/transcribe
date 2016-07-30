const mode = (state = 'NORMAL', action) => {
  switch (action.type) {
    case 'NORMAL_MODE':
      return 'NORMAL';
    case 'INSERT_MODE':
      return 'INSERT';
    default:
      return state;
  }
}

export default mode
