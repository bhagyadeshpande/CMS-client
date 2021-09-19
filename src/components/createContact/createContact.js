import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {           
      width: '25ch',             
   },
  },
}));

export default function Create() {
  const classes = useStyles();
  const [contact, setContact] = useState({    
    contactName : '',
    contactAddress :'',
    contactPhone:0,
    contactEmail:''
  })
  const createContact = () =>{
    axios.post('http://localhost:5000/contacts', contact).then(()=>{
      window.location.reload(false);
    })
  }
  const formStyle = {
    backgroundColor: "lightyellow"      
  }
  return (    
    <Container style={formStyle}>
      <p style={{fontSize:"34px"}}>Add a new Contact</p>    
    <form className={classes.root} noValidate autoComplete="off">   
    <Grid container spacing={1}>    
    <Grid xs={12} sm={6} item>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={contact.contactName} 
      onChange = {(event) => {setContact({...contact, contactName : event.target.value})}} />
    </Grid>
    <Grid xs={12} sm={6} item>
<TextField id="outlined-basic" label="Address" variant="outlined" value={contact.contactAddress} 
      onChange = {(event) => {setContact({...contact, contactAddress : event.target.value})}} />
      </Grid>
      <Grid xs={12} sm={6} item>
      <TextField id="outlined-basic" label="Phone" variant="outlined" value={contact.contactPhone} 
      onChange = {(event) => {setContact({...contact, contactPhone : event.target.value})}} />
      </Grid>
      <Grid xs={12} sm={6} item>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={contact.contactEmail} 
      onChange = {(event) => {setContact({...contact, contactEmail : event.target.value})}} />      
     </Grid>
     </Grid>
     </form>
     <Button variant="contained" color="primary" onClick = {createContact}>
        ADD 
      </Button>
    </Container>    
  );
}
