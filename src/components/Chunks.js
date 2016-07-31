import React from 'react'
import { connect } from 'react-redux'
import { addChunk, setCurrentTime, play, pause, setDuration, setStart, setEnd, replay, setCurrentData } from '../actions'
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
    setCurrentData: (e) => {
      let data = e.target.value;
      dispatch(setCurrentData(data));
    },
  }
}

export class Chunks extends React.Component {
  componentDidUpdate (props) {
    if (this.props.mode === 'INSERT') {
      this.refs.input.focus();
    } else {
      this.refs.input.blur();
    }
  }
  render () {
    let { mode, video, chunks, current, setCurrentTime, play, pause, setDuration, setStart, setEnd, replay, setCurrentData } = this.props;
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

      <ul>
        {chunks.map(chunk => {
          let active = (current.start === chunk.start && current.end === chunk.end);
          return <Chunk key={chunk.id} data={chunk.data} start={chunk.start} end={chunk.end} onClick={clickChunk} active={active} />
        })}
      </ul>
      <Video pause={pause} duration={setDuration} play={play} tick={setCurrentTime} isPlaying={video.isPlaying} startTime={current.start} endTime={current.end} currentTime={video.currentTime} />
      <div className="current">
        {current.start} - {current.end}
      </div>

      <textarea ref="input" value={current.data} onChange={setCurrentData} />
    </div>
  }
}

const ChunksComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chunks);

export default ChunksComponent
