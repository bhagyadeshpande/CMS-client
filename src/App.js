/* eslint-disable no-undef */
import React, {useState} from 'react';
import './App.css';
import Contact from './components/showContact/showContact.js'
import Create from './components/createContact/createContact.js'
import {Container, AppBar, Typography} from '@material-ui/core';
import useStyles from './styles.js';
import '@fontsource/roboto';
import Button from '@material-ui/core/Button';

function App() {
  const classes = useStyles();
  const [show,setShow] = useState(false);  

  return (
    <div className="App">
     <Container maxWidth = "lg">
      <AppBar className={classes.appBar1} position="static" color="inherit">
        <Typography className = {classes.heading} variant="h2" align="center">
        ADDRESS BOOK        
        </Typography>     
        <Typography className = {classes.heading} variant="h2" align="center">   
        <Button variant="contained" color="secondary"
        onClick={()=>setShow(true)}>          
          Add new contact</Button>   
          {show?<Create/>:''}         
          </Typography>              
      </AppBar>           
      <AppBar className={classes.appBar} position="static" color="inherit">
      <Contact />            
      </AppBar>          
     </Container>
    </div>
  );
}

export default App;
