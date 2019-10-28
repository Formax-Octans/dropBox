import React from 'react';
import './App.css';
import Videos from './Database/love.mp4'

export default class Video extends React.Component {
  playVideo() {
    // You can use the play method as normal on your video ref
    this.refs.vidRef.play();
  }
  
  pauseVideo() {
    // Pause as well
    this.refs.vidRef.pause();
  }
  
  // You can pass your function references to your child components as props (here passing down to the Buttons component)
  render() {
    return(
      <div>
        <video src={Videos} ref="vidRef" type="video/mp4"></video>
        <Buttons playVideo={this.playVideo.bind(this)} pauseVideo={this.pauseVideo.bind(this)} />
      </div>
    );
  }
}

// You can then call the parent play/pause methods from your child component.
class Buttons extends React.Component {
  render(){
    return(
      <div>
        <button id='playButton' onClick={this.props.playVideo}>Play!</button>
        <button id='pauseButton' onClick={this.props.pauseVideo}>Pause!</button>
      </div>
    );
  }
}