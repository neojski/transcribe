export const addChunk = (current) => {
  return {
    type: 'ADD_CHUNK',
    data: current.data,
    start: current.start,
    end: current.end
  };
}

export const setCurrentTime = (currentTime) => {
  return {
    type: 'CURRENT_TIME',
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

export const replay = () => {
  return (dispatch, getState) => {
    let currentTime = getState().current.start;
    dispatch(setCurrentTime(currentTime));
    dispatch(playInside());
  }
}

export const setCurrentData = (data) => {
  return {
    type: 'SET_CURRENT_DATA',
    data,
  };
};

export const commit = () => {
  return (dispatch, getState) => {
    let current = getState().current;

    dispatch(addChunk(current));
    dispatch(setCurrentData(''));
    dispatch(setStart(current.end));
    dispatch(play());
  }
}

export const setDuration = (duration) => {
  return {
    type: 'SET_DURATION',
    duration,
  };
}
