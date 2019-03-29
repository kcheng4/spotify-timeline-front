import React, { Component } from 'react';
import logo from './spotify.svg';

import './Header.css';

class HeaderSmall extends Component {

    constructor() {
      super();
    }

    render() {
        return(
            <div>
                <header className="App-header-small">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          
                <p id="title-small">Spotify Timeline</p>
                <p id="subtitle-small">Powered By  <img id="logo" src={logo} height='35' width='35' alt='spotify'></img></p>
                </header>
            </div>
        );
    }

}

export default HeaderSmall;