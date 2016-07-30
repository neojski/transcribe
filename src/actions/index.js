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

export const tick = (time) => {
  return {
    type: 'TICK',
    time
  };
}

export const setMode = (type) => {
  return {
    type: type + '_MODE',
  };
}

export const play = () => {
  return {
    type: 'PLAY',
  };
}

export const pause = () => {
  return {
    type: 'PAUSE',
  };
}

export const togglePlayPause = (video) => {
  if (video.isPlaying) {
    return pause();
  } else {
    return play();
  }
}
