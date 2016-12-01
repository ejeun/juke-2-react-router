import React from 'react';
import Songs from '../components/Songs';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {
      album: {}
    }
  }

  componentDidMount(){
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        album:
      }))



  }

  render() {
    return (
          // {console.log(props)}
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
    );
  }

}
/*
const Album = (props) => {*/

  const album = props.album;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggleOne = props.toggleOne;

/*  console.log(props);

  return (
          // {console.log(props)}
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
  );
}

export default Album;
*/
