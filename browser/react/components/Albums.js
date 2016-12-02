import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  // componentDidMount(){
  //   if (this.props.getAlbums) this.props.getAlbums(); 
  //   //Since this method is only passed down by the AppContainer parent, this does not run when Artist component supplies albums
  // }

  render() {

    const albums = this.props.albums;

    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {
          albums.map(album => (
            <div className="col-xs-4" key={ album.id }>
              <Link className="thumbnail" to={`/albums/${album.id}`}>
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}