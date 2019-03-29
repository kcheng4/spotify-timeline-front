import React, { Component } from 'react';
import logo from './spotify.svg';


class SpotifyLogo extends Component {
    render() {
        return(
            <img id="logo" src={logo} alt="logo" height='300' width='300'/>
        );
    }

}

export default SpotifyLogo;