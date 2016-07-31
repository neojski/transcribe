export const addChunk = ({data, current}) => {
  let start = current.start;
  let end = current.end;
  return {
    type: 'ADD_CHUNK',
    data,
    start,
    end
  };
}

export const tick = (currentTime) => {
  console.log(currentTime);
  return {
    type: 'TICK',
    currentTime
  };
}

export const setMode = (type) => {
  return {
    type: type + '_MODE',
  };
}

export const setStart = (time) => {
  return {
    type: 'SET_START',
    time,
  };
}

export const setEnd = (time) => {
  return {
    type: 'SET_END',
    time,
  };
}


export const setNoEnd = () => {
  return {
    type: 'SET_END',
    time: Number.MAX_SAFE_INTEGER,
  };
}

export const playInside = () => {
  return {
    type: 'PLAY'
  };
}

export const play = () => {
  return (dispatch, getState) => {
    let state = getState();
    if (state.video.currentTime >= state.current.end) {
      dispatch(setNoEnd());
    }
    dispatch(playInside());
  }
}

export const pause = () => {
  return {
    type: 'PAUSE',
  };
}

let id = 0;
export const rewind = () => {
  return {
    type: 'REWIND',
    id: id++,
  };
}

export const replay = () => {
  return (dispatch) => {
    dispatch(rewind());
    dispatch(playInside());
  }
}
