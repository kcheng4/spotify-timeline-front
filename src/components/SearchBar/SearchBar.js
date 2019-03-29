import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import classNames from 'classnames';

import './SearchBar.css';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary:{
            main: '#f1f8e9',
        }
    },
    typography: { useNextVariants: true },
    
  });
  
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 700,
    },      
    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'black !important'
    },
  });
  
  

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    enterPressed = (event)=> {
        var code = event.keyCode || event.which;
        if(code === 13) { //13 is the enter keycode
            this.props.onSubmit();
            this.props.onRouteChange('search');       
        } 
    }


   

    render(){
    
    const { classes, onInputChange} = this.props;
    return (
        <div >
        <MuiThemeProvider theme={theme}>
          <TextField 
          autoComplete='off'
          onKeyPress={this.enterPressed}
          onChange={onInputChange}
          id='search'
          className={classNames(classes.textField, classes.dense)}
          variant="outlined"
          label='Enter Spotify Username'
          InputProps={{
              classes:{
                notchedOutline: classes.notchedOutline,
              }
          }}
          />
          </MuiThemeProvider>
        </div>
        
      );
    }
}


export default withStyles(styles)(SearchBar);