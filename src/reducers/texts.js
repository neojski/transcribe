const texts = (state = [{text: 'text', start: 0, end: 1}], action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      let start = action.start;
      let i;
      for (i = 0; i < state.length; i++) {
        if (state[i].start > start) {
          break;
        }
      }
      return [
        ...state.slice(0, i),
        { text: action.text,
          start: action.start,
          end: action.end },
        ...state.slice(i)
      ]
    default:
        return state
  }
}

export default texts
