const texts = (state = ['text'], action) => {
  switch (action.type) {
    case 'ADD_TEXT':
      return [
        ...state,
        action.text
      ]
    default:
        return state
  }
}

export default texts
