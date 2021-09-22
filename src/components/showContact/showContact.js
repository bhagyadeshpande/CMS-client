import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Tooltip from '@material-ui/core/Tooltip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import EditContact from '../editContact/editContact.js';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor:"bisque"   
}
});
let currentContact = [];
export default function ShowContact() {
  const classes = useStyles();
  const [contactList, setContactList] = useState([]);  
  const [display, setDisplay] = useState(false);  
  const [curId, setCurId] = useState(null);  
  const BASE_URL = "https://contactmanagementserver.herokuapp.com";

  useEffect(()=>{
    axios.get(`${BASE_URL}/contacts`).then((allContacts)=>{
      setContactList(allContacts.data);       
    })
  },[])

  const deleteContact = (id) => {
    axios.delete(`${BASE_URL}/contacts/${id}`)
    .then((newList)=>{
      setContactList(newList.data);       
      //window.location.reload();      
    } )     
  }  
 
  const updateContact = (currentIndex, currentId) => {   
    currentContact.push({ contactName : contactList[currentIndex].contactName,
      contactAddress :contactList[currentIndex].contactAddress,
      contactPhone:contactList[currentIndex].contactPhone,
      contactEmail:contactList[currentIndex].contactEmail})  
      setCurId(currentId);   
      setDisplay(true);    
      }  
  
  return (
    <>    
    {display ? <EditContact thisContact={currentContact} thisId={curId} /> : ''}    
    <h2>Contacts</h2>         
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:"darkblue", fontWeight:"bold", fontSize:"larger"}} width="100px">No.</TableCell>
            <TableCell style={{color:"darkblue", fontWeight:"bold", fontSize:"larger"}} width="200px">Name</TableCell>
            <TableCell style={{color:"darkblue", fontWeight:"bold", fontSize:"larger"}} width="200px">Address</TableCell>
            <TableCell style={{color:"darkblue", fontWeight:"bold", fontSize:"larger"}} width="200px">Phone</TableCell>
            <TableCell style={{color:"darkblue", fontWeight:"bold", fontSize:"larger"}} width="200px">Email</TableCell>
            <TableCell style={{color:"darkblue", fontWeight:"bold", fontSize:"larger"}} width="100px">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactList.map((contact, key) => (
            <TableRow key={key}>   
              <TableCell component="th" scope="row" style={{color:"deeppink", fontWeight:"bold", fontSize:"large"}}>
              {key + 1}  
              </TableCell>
              <TableCell style={{color:"deeppink", fontWeight:"bold", fontSize:"large"}} >{contact.contactName}</TableCell>
              <TableCell style={{color:"deeppink", fontWeight:"bold", fontSize:"large"}} >{contact.contactAddress}</TableCell>
              <TableCell style={{color:"deeppink", fontWeight:"bold", fontSize:"large"}} >{contact.contactPhone}</TableCell>
              <TableCell style={{color:"deeppink", fontWeight:"bold", fontSize:"large"}} >{contact.contactEmail}</TableCell>
              <TableCell style={{color:"deeppink", fontWeight:"bold", fontSize:"large"}} >
              <Tooltip title="edit contact">
              <IconButton aria-label="edit" className={classes.margin}
              onClick = {()=>updateContact(key, contact._id)}>                               
              <CreateIcon fontSize="small" />                             
              </IconButton>              
              </Tooltip>
              <Tooltip title="delete contact">
              <IconButton aria-label="delete" className={classes.margin} 
              type = "submit"              
              onClick = {()=> deleteContact(contact._id)}>              
              <DeleteIcon fontSize="small" />              
              </IconButton>              
              </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>    
    </>
  );
}




