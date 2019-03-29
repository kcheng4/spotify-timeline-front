import React, { Component } from 'react';

import Particles from 'react-particles-js';

import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Timeline from './components/Timeline/Timeline';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      },
      size:{
        value:100,
        random:true
      },
      polygon:{
        enable:true,
        scale:0.5,
        type:'inline',
        move:{
          radius:10
        },
        url:"./components/Header/spotify.svg",
        inline:{
          arrangement:"equidistant"
        },
        draw:{
          enable:true,
          stroke:{
            color:"rgba(255,255,255,.2)"
          }
        }
      }
    }
  }
};




class App extends Component {

  constructor(){
    super();
    this.state = {
      input:'',
      route:'searchhome',
      currentUser:'',
      playlistData:[],
      loading:false
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  setCurrentUser = (user) => {
    this.setState({currentUser:user});
  }

  onSubmit = () => {
    const input = this.state.input;
    this.setState({loading:true});
    fetch(`http://localhost:8000/user/${input}`,{
      method:'get',
      headers:{'Content-Type':'application/json'},
    })
    .then(res=>res.json())
    .then(response=>{
      //console.log(response);
      this.setCurrentUser(input);
      this.setState({playlistData:response});
      this.setState({loading:false});
      response.forEach(element => {
        console.log(element)
        // fetch(`http://localhost:3000/playlist/${element.playlist_id}`,{
        //   method:'get',
        //   headers:{'Content-Type':'application/json'}
        // }).then(res2=>res2.json())
        // .then(response2=>{
        //   console.log(response2);
        // }
        // );
      });
    })
    .catch(err=>console.log(err));
  }

  onRouteChange = (route) => {
    this.setState({route:route});
  }

  render() {
    //console.log(this.state.route);
    return (
      
      <div>
        <Particles className='particles'
         params={particlesOptions}
         />
      {this.state.route === 'searchhome'
        ? <div className="App">
            <Header/>
            <SearchBar 
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}
            onRouteChange={this.onRouteChange}
            setCurrentUser={this.setCurrentUser}
            />
          </div>
      :(
        <div >
        <br></br>
          <div className="App">
          <SearchBar
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
          onRouteChange={this.onRouteChange}
          setCurrentUser={this.setCurrentUser}
          />
          </div>
          <Timeline 
          playlistData={this.state.playlistData}
          loading={this.state.loading}
          currentUser={this.state.currentUser}
          />
        </div>
      )
      }
      </div>
    );
  }
}

export default App;
