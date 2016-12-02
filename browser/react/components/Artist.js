import React, { Component } from 'react';
import Songs from './Songs';
import Albums from './Albums';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.selectArtist(this.props.routeParams.artistId);
    console.log('ran selectArtist');
  }

  render() {
    return (
      <div>
        <h3>{this.props.selectedArtist.name}</h3>
        <Albums albums={this.props.albums} />
        <Songs
          songs={this.props.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggle} />
      </div>
    );
  }

}
