export default (state = {currentTime : 0, isPlaying : false}, action) => {
  switch (action.type) {
    case 'PLAY':
      return { ...state, isPlaying: true }
    case 'PAUSE':
      return { ...state, isPlaying: false }
    case 'CURRENT_TIME':
      return { ...state, currentTime: action.currentTime }
    default:
      return state
  }
}
