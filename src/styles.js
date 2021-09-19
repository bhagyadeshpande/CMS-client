import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=>({
  appBar1:{
    borderRadius : 15,
    margin : '10px 0',
    display : 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor:'black',
    color: '#FFA07A'
  },
  appBar:{
    borderRadius : 15,
    margin : '10px 0',
    display : 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',  
    backgroundColor:'bisque'        
  },  
}))