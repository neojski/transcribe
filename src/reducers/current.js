const current = (state = {start: 0.2, end: 0.9}, action) => {
  switch (action.type) {
    case 'SET_START':
      return { ...state, start: action.start }
    case 'SET_END':
      return { ...state, end: action.end }
    default:
      return state
  }
}

export default current
