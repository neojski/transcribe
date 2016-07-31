export default (state = {currentTime: 0, isPlaying: false, duration: 0}, action) => {
  switch (action.type) {
    case 'PLAY':
      return { ...state, isPlaying: true }
    case 'PAUSE':
      return { ...state, isPlaying: false }
    case 'CURRENT_TIME':
      return { ...state, currentTime: action.currentTime }
    case 'SET_DURATION':
      return { ...state, duration: action.duration }
    default:
      return state
  }
}
