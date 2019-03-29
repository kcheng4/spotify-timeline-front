import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Button from '@material-ui/core/Button';
import ReactImageFallback from "react-image-fallback";

import './Timeline.css';
import empty from './spotify_empty.jpg';

class TimelineCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            playlistLoading:false,
            genres:[]
        }
    }

    getTopGenres = (playlist)=> {
        console.log(playlist);
        fetch(`http://localhost:8000/playlist/${playlist}`,{
            method:'get',
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            this.setState({genres:data});
            this.setState({playlistLoading:true});
        })
        .catch(err=>console.log(err));
    }

    render(){
        const {playlist} = this.props;
        return(
            <div>
                <VerticalTimelineElement
                key={playlist.playlist_id}
                className="vertical-timeline-element--work"
                date={<div>
                        <h3 style={{"marginTop":"0vmin","marginBottom":"0vmin"}}>
                            {playlist.playlist_start.substring(0,4)}
                        </h3>
                        {this.state.playlistLoading===false ?
                            <Button 
                            className='genre-button'
                            onClick={this.getTopGenres.bind(this, playlist.playlist_id)}
                            >
                                Genre
                            </Button>
                            :
                            <div className='genre'>
                                <p style={{"fontSize":"3vmin","color":"black"}}>Top Genres</p>
                                {this.state.genres.map((genre)=>{
                                    return <p style={{"fontSize":"2vmin","color":"black"}} className='genre' key={genre}>{genre}</p>
                                })}
                            </div>
                    
                        }
                        
                      </div>}
                iconStyle={{ background: 'rgb(000, 000, 000)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">{playlist.playlist_name}</h3>
                <br></br>
                <ReactImageFallback 
                src={playlist.playlist_images[0].url} 
                fallbackImage={empty}
                onError={this.addDefaultSrc}
                height='411'
                width='411'
                />
                </VerticalTimelineElement>
                )
            </div>
        )
    }
}

export default TimelineCard;