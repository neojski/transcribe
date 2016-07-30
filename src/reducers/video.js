export default (state = {time : 0, isPlaying : false}, action) => {
  switch (action.type) {
    case 'PLAY':
      return { ...state, isPlaying: true }
    case 'PAUSE':
      return { ...state, isPlaying: false }
    case 'TICK':
      return { ...state, time: action.time }
    default:
      return state
  }
}
