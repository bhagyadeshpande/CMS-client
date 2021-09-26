import React, {useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
let contactList = [];
export default function EditContact(props) {  
  contactList = props.thisContact;     
  const [open, setOpen] = useState(true);    
  const [contact, setContact] = useState([]); 

  const BASE_URL = "https://contactmanagementserver.herokuapp.com";
  //const BASE_URL = "http://localhost:5000"; 
         
  const handleUpdate = () =>{     
    const result = axios.put(`${BASE_URL}/contacts/${props.thisId}`, contact);
    setContact(result.data);        
    handleClose();  
} 
  
  const handleClose = () => {    
    setOpen(false);
    window.location.reload(false);
  };   

  return (        
    <>          
      <Dialog open={open} aria-labelledby="form-dialog-title">      
      <DialogTitle id="form-dialog-title">Edit this contact</DialogTitle> 
      {contactList.map((member, key) => (   
        <div key={key}>
          <DialogContent>          
          <TextField
            autoFocus
            margin="dense"
            id="contactname"
            label="Name"
            defaultValue = {member.contactName}
            type="text"
            fullWidth
            onChange = {(event)=>{setContact({...contact, contactName : event.target.value})}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
            defaultValue = {member.contactAddress}
            type="text"
            fullWidth
            onChange = {(event) => {setContact({...contact, contactAddress : event.target.value})}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            defaultValue = {member.contactPhone}
            type="number"
            fullWidth
            onChange = {(event) => {setContact({...contact, contactPhone : event.target.value})}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            defaultValue = {member.contactEmail}
            type="email"
            fullWidth
            onChange = {(event) => {setContact({...contact, contactEmail : event.target.value})}}
          />
           <DialogActions>
           <Button onClick={handleUpdate} color="primary">
            Save
          </Button>  
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>         
        </DialogActions>
          </DialogContent>     
          </div>           
      ))}
      </Dialog>      
    </>    
  );
}
