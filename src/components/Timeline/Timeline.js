import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineCard from './TimelineCard';
import './Timeline.css';
import blank from './spotify_empty.jpg';


const styles = theme => ({
    linearColorPrimary: {
        backgroundColor: '#b2dfdb',
    },
    linearBarColorPrimary: {
        backgroundColor: '#00695c',
    },
});

class Timeline extends Component {
    constructor(props){
        super(props);
        this.state = {
            playlistLoading:false,
            genres:[]
        }
    }

    addDefaultSrc = (ev) => {
        ev.target.src={blank};
    }

    renderTimeline = ()=>{
        const {playlistData} = this.props;
        return(
            <div className='App'>
                <h2>{this.props.currentUser}</h2>
                <div>
                    <VerticalTimeline>
                        {playlistData.map(playlist =>{
                            //return <div key={playlist.playlist_id}>{playlist.playlist_name}</div>
                            return (
                            <TimelineCard 
                            playlist={playlist}
                            key={playlist.playlist_id}
                            />
                            )
                         })}
                    </VerticalTimeline>
                </div>
            </div>
        )
    }


    render(){
        
        //console.log(playlistData);
        const { classes } = this.props;
        return(
            
            <div>
                
                {this.props.loading===true ?  
                    <div className='App'>
                    <LinearProgress
                    thickness={16}
                    classes={{
                        colorPrimary: classes.linearColorPrimary,
                        barColorPrimary: classes.linearBarColorPrimary,
                    }}
                     />
                    </div> 
                    : this.renderTimeline()
                  
                }
            </div>
        )
    }
}

Timeline.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Timeline);
