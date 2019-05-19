import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className='navbar nav-bkgd'>
            <Link to='/'>
            <span className='navbar-text'>Landing</span>
            </Link>
            <Link to='/library'>
            <span className='navbar-text'>Library</span>
            </Link>
          </nav>
          <Link to='/'>
            <img
              src='/assets/images/bloc_jams_logo_darker.png'
              alt='bloc jams logo'
              className='bloc-jams-logo'
            />
          </Link>
        </header>
        <main>
          <Route exact path='/' component={Landing} />
          <Route path='/library' component={Library} />
          <Route path='/album/:slug' component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
