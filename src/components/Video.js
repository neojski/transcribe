import React from 'react'
import YouTube from 'react-youtube'

export class Video extends React.Component {
  constructor () {
    super();
    this._player = null;
  }

  tick () {
    this.props.tick(this._player.getCurrentTime());
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
  }

  handleReady (e) {
    this._player = e.target;
  }

  render () {
    return <div>
      <div>isPlaying: {this.props.isPlaying ? 'yes' : 'no'}</div>
      <YouTube videoId="M7lc1UVf-VE" onReady={this.handleReady.bind(this)} onPlay={this.startTicking.bind(this)} onPause={this.stopTicking.bind(this)} />
    </div>
  }
}

export default Video
