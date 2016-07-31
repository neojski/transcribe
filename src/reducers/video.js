export default (state = {currentTime : 0, isPlaying : false}, action) => {
  switch (action.type) {
    case 'PLAY':
      return { ...state, isPlaying: true }
    case 'PAUSE':
      return { ...state, isPlaying: false }
    case 'TICK':
      return { ...state, currentTime: action.currentTime }
    // This is a bit strange to have lastActionId but how do I pass the restart action otherwise?
    case 'REWIND':
      return { ...state, rewindActionId: action.id }
    default:
      return state
  }
}
