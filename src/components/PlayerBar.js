import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className='player-bar'>
        <section id='buttons'>
          <button
            id='previous'
            className='button-bar btn btn-secondary'
            onClick={this.props.handlePrevClick}
          >
            <span className='icon ion-md-skip-backward'></span>
          </button>
          <button
            id='play-pause'
            className='button-bar btn btn-secondary'
            onClick={this.props.handleSongClick}
          >
            <span
              className={this.props.isPlaying ? 'icon ion-md-pause' : 'icon ion-md-play'}
            >
            </span>
          </button>
          <button
            id='next'
            className='button-bar btn btn-secondary'
            onClick={this.props.handleNextClick}
          >
            <span className='icon ion-md-skip-forward'></span>
          </button>
        </section>
        <section id='time-control'>
          <div className='current-time'>
            {this.props.formatTime(this.props.currentTime)}
          </div>
          <input
            type='range'
            className='seek-bar'
            value={(this.props.currentTime / this.props.duration) || 0}
            max='1'
            min='0'
            step='0.01'
            onChange={this.props.handleTimeChange}
          />
          <div className='total-time'>
            {this.props.formatTime(this.props.duration)}
          </div>
        </section>
        <section id='volume-control'>
          <div className='icon ion-md-volume-low'>
          </div>
          <input
            type='range'
            className='seek-bar'
            value={this.props.volume}
            max='1'
            min='0'
            step='0.05'
            onChange={this.props.handleVolumeChange}
          />
          <div className='icon ion-md-volume-high'>
          </div>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
