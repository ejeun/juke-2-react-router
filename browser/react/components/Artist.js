import React, { Component } from 'react';
import Songs from './Songs';
import Albums from './Albums';
import { Link } from 'react-router';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount(){
    this.props.selectArtist(this.props.routeParams.artistId);
  }

  render() {

    const selectedArtist = this.props.selectedArtist;
    const children = this.props.children;
    const propsToPassToChildren = {
      albums: this.props.albums, 
      songs: this.props.songs,
      currentSong: this.props.currentSong,
      isPlaying: this.props.isPlaying,
      toggleOne: this.props.toggleOne,
      selectedArtist: selectedArtist,
    }

    return (
      <div>
        <h3>{selectedArtist.name}</h3>
        <ul className="nav nav-tabs">
          <li><Link to={`/artists/${selectedArtist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to={`/artists/${selectedArtist.id}/songs`}>SONGS</Link></li>
        </ul>
        { children && React.cloneElement(children, propsToPassToChildren) }
      </div>
    );
  }

}
