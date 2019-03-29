import React, { Component } from 'react';
import logo from './spotify.svg';

import './Header.css';

class Header extends Component {

    constructor() {
      super();
      this.state = {
          
      }
    }

    render() {
        return(
            <div>
                <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          
                <h1 id="title">Spotify Timeline</h1>
                <p id="subtitle">Powered By  <img id="logo" src={logo} height='35' width='35' alt='spotify'></img></p>
                </header>
            </div>
        );
    }

}

export default Header;