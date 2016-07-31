const current = (state = {start: 0.2, end: 0.9, data: 'current data'}, action) => {
  switch (action.type) {
    case 'SET_START':
      return { ...state, start: action.time }
    case 'SET_END':
      return { ...state, end: action.time }
    case 'SET_CURRENT_DATA':
      return { ...state, data: action.data }
    default:
      return state
  }
}

export default current
