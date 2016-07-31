import React from 'react'
import YouTube from 'react-youtube'

export class Video extends React.Component {
  constructor () {
    super();
    this._player = null;
    this._when = null;
  }

  getCurrentTime () {
    if (this._player) {
      return this._player.getCurrentTime();
    } else {
      return null;
    }
  }
  tick () {
    let currentTime = this.getCurrentTime();
    if (currentTime === null) {
      return;
    }
    if (currentTime >= this.props.endTime) {
      currentTime = this.props.endTime;
      this._player.seekTo(this.props.endTime, true);
      this.props.pause();
    }
    this._currentTime = currentTime;
    this.props.tick(currentTime);
  }
  startTicking () {
    if (!this.props.isPlaying) {
      this._interval = setInterval(this.tick.bind(this), 100);
    }
  }
  stopTicking () {
    clearInterval(this._interval);
  }
  componentWillReceiveProps (props) {
    if (!this._player) {
      return alert('Player not ready');
    }
    if (props.isPlaying) {
      this._player.playVideo();
      this.startTicking();
    } else {
      this._player.pauseVideo();
      this.stopTicking();
    }
    // Setting new current time seeks the video
    if (this._currentTime !== props.currentTime) {
      this._currentTime = props.currentTime;
      this._player.seekTo(props.currentTime, true);
    }
  }

  handlePlay () {
    this.props.play();
  }

  handlePause () {
    this.props.pause();
  }

  handleReady (e) {
    this._player = e.target;
  }

  render () {
    let opts = {
      playerVars: {
      //  controls: 0, // not sure about this yet
        showinfo: 0, // hide title bar that shows up every time you hit pause
      }
    };
    return <div>
      <div>isPlaying: {this.props.isPlaying ? 'yes' : 'no'}</div>
      <YouTube videoId="M7lc1UVf-VE" opts={opts} onReady={this.handleReady.bind(this)} />
    </div>
  }
}

export default Video
