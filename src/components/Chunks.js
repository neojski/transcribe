import React from 'react'
import { connect } from 'react-redux'
import { addChunk, setCurrentTime, play, pause } from '../actions'
import { Video } from './Video'

const mapStateToProps = (state) => {
  return {
    video: state.video,
    chunks: state.chunks,
    current: state.current,
    mode: state.mode,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (current, text) => {
      dispatch(addChunk({
        data: 'asdf' + Math.random(),
        current
      }))
    },
    setCurrentTime: (currentTime) => {
      dispatch(setCurrentTime(currentTime));
    },
    play: () => {
      dispatch(play());
    },
    pause: () => {
      dispatch(pause());
    }
  }
}

const Chunks = ({ mode, video, chunks, current, onClick, setCurrentTime, play, pause }) => (
  <div>
    <div>mode: {mode}</div>
    <div>{video.currentTime}</div>
    <div onClick={play}>play</div>
    <div onClick={pause}>pause</div>
    <ul>
      {chunks.map(chunk =>
        <div key={chunk.id} onClick={() => onClick(current, 'new text')}>{chunk.data} ({chunk.start} - {chunk.end})</div>
      )}
    </ul>
    <Video pause={pause} play={play} tick={setCurrentTime} isPlaying={video.isPlaying} startTime={current.start} endTime={current.end} currentTime={video.currentTime} />
    <div className="current">
      {current.start} - {current.end}
    </div>
  </div>
);


const ChunksComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chunks);

export default ChunksComponent
