import React from 'react'
import { connect } from 'react-redux'
import { addChunk, tick, play, pause } from '../actions'
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
    tick: (time) => {
      dispatch(tick(time));
    },
    play: () => {
      dispatch(play());
    },
    pause: () => {
      dispatch(pause());
    }
  }
}

const Chunks = ({ mode, video, chunks, current, onClick, tick, play, pause }) => (
  <div>
    <div>mode: {mode}</div>
    <div>{video.time}</div>
    <div onClick={play}>play</div>
    <div onClick={pause}>pause</div>
    <ul>
      {chunks.map(chunk =>
        <div key={chunk.id} onClick={() => onClick(current, 'new text')}>{chunk.data} ({chunk.start} - {chunk.end})</div>
      )}
    </ul>
    <Video tick={tick} isPlaying={video.isPlaying} />
  </div>
);


const ChunksComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chunks);

export default ChunksComponent
