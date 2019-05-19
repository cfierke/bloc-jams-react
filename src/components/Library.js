import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
constructor(props) {
  super(props);
  this.state = { albums: albumData };
}

  render() {
    return (
      <section className='library'>
         {
          this.state.albums.map( (album, index) =>
            <Link
              to={`/album/${album.slug}`}
              key={index}
              style={{ textDecoration: 'none' }}
            >
              <div className='container'>
                <div className='row align-items-center'>

                  <div className='col'>
                    <img
                      className='library-image img-reduce'
                      src={album.albumCover}
                      alt={album.title}
                    />
                  </div>

                  <div className='library-text col'>
                    <div>Title: {album.title}</div>
                    <div>Artist: {album.artist}</div>
                    <div>Songs: {album.songs.length}</div>
                  </div>
                </div>
              </div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
