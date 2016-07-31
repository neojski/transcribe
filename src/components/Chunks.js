import React from 'react'
import { connect } from 'react-redux'
import { addChunk, setCurrentTime, play, pause, setDuration, setStart, setEnd, replay } from '../actions'
import { Video } from './Video'
import Chunk from './Chunk'

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
    },
    setDuration: (duration) => {
      dispatch(setDuration(duration));
    },
    setStart: (time) => {
      dispatch(setStart(time));
    },
    setEnd: (time) => {
      dispatch(setEnd(time));
    },
    replay: () => {
      dispatch(replay());
    },
  }
}

const Chunks = ({ mode, video, chunks, current, onClick, setCurrentTime, play, pause, setDuration, setStart, setEnd, replay }) => {
  let calc = (time) => {
    return video.duration ? (time / video.duration) * 100 + '%' : 0
  };

  let clickChunk = ({start, end}) => {
    setStart(start);
    setEnd(end);
    replay();
  };

  return <div>
    <div>mode: {mode}</div>

    <div><div style={{background: 'lightblue', width: calc(video.currentTime)}}>playback</div></div>
    <div><div style={{background: 'yellowgreen', width: calc(current.start)}}>start</div></div>
    <div><div style={{background: '#eee', width: calc(current.end)}}>end</div></div>

    <div onClick={play}>play</div>
    <div onClick={pause}>pause</div>
    <ul>
      {chunks.map(chunk =>
        <Chunk key={chunk.id} data={chunk.data} start={chunk.start} end={chunk.end} onClick={clickChunk} />
      )}
    </ul>
    <Video pause={pause} duration={setDuration} play={play} tick={setCurrentTime} isPlaying={video.isPlaying} startTime={current.start} endTime={current.end} currentTime={video.currentTime} />
    <div className="current">
      {current.start} - {current.end}
    </div>
  </div>
};


const ChunksComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chunks);

export default ChunksComponent
