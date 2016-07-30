import React from 'react'

export class Video extends React.Component {
  constructor () {
    super();
    this._time = 0;
  }

  tick () {
    this.props.tick(this._time);
  }
  startTicking () {
    if (!this.props.isPlaying) {
      this._interval = setInterval(() => {
        this._time++;
        this.tick();
      }, 100);
    }
  }
  stopTicking () {
    clearInterval(this._interval);
  }
  componentWillReceiveProps (props) {
    if (props.isPlaying) {
      this.startTicking();
    } else {
      this.stopTicking();
    }
  }
  render () {
    let isPlaying = this.props.isPlaying;
    return <div>
      <span>this is video. Is it playing? {isPlaying}</span>
    </div>;
  }
}

export default Video
