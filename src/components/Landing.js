import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

const Landing = () => (
  <section className='landing'>
    <Title />
    <Link
      to='/library'
      className='hero-title'
      style={{ textDecoration: 'none' }}
    >
      Turn the Music up!
    </Link>
    <section className='selling-points container'>
        <div className='row'>

          <div className='point col-4'>
            <span className='icon ion-md-headset'></span>
            <h2 className='point-title'>Choose your music</h2>
            <p className='point-description'>The world is full of music; why should you have to listen to music that someone else chose?</p>
          </div>

          <div className='point col-4'>
            <span className='icon ion-md-wifi'></span>
            <h2 className='point-title'>Unlimited, streaming, ad-free</h2>
            <p className='point-description'>No arbitrary limits. No distractions</p>
          </div>

          <div className='point col-4'>
            <span className='icon ion-md-phone-portrait'></span>
            <h2 className='point-title'>Mobile enabled</h2>
            <p className='point-description'>Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          </div>

        </div>
    </section>
  </section>
);

export default Landing;
