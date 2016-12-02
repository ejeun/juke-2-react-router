import React, { Component } from 'react';
import Songs from '../components/Songs';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.selectAlbum(this.props.routeParams.albumId);
  }

  render() {
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;

    return (
    <div className="album">
      <div>
        <h3>{ this.props.album.name }</h3>
        <img src={ this.props.album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={this.props.album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
    );
  }

}