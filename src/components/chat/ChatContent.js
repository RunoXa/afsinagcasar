import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import './Chat.css';

const useStyles = makeStyles({
   chatSection: {
      width: '100%',
      height: '100%',
   },
   messageArea: {
      height: '50vh',
      maxHeight: '100%',
      overflow: 'auto',
      paddingRight: '15px'
   },
   fab: {
      marginRight: '8px'
   },
   messageBoxRight: {
      position: 'relative',
      background: '#f5f5f5',
      color: '#ffffff',
      width: '240px',
      borderRadius: '1em',
      float: 'right',
      padding: '10px',
      '&::after': {
         content: "''",
         position: 'absolute',
         display: 'block',
         width: 0,
         borderStyle: 'solid',
         borderColor: 'transparent #f5f5f5',
         borderWidth: '10px 0 10px 28px',
         top: '78%',
         right: '-20px',
         marginTop: '-10px'
      },
   },

   messageBoxLeft: {
      position: 'relative',
      background: '#f5f5f5',
      color: '#ffffff',
      width: '240px',
      borderRadius: '1em',
      float: 'left',
      padding: '10px',
      '&::after': {
         content: "''",
         position: 'absolute',
         display: 'block',
         width: 0,
         borderStyle: 'solid',
         borderColor: 'transparent #f5f5f5',
         borderWidth: '10px 28px 10px 0',
         top: '78%',
         left: '-20px',
         marginTop: '-10px'
      },
   },
   currentUserName: {
      fontWeight: '600',
      fontSize: '14px',
      margin: '0 0 4px',
      color: '#3498db'
   },
   otherUserName: {
      fontWeight: '600',
      fontSize: '14px',
      margin: '0 0 4px',
      color: '#2ecc71'
   },
   message: {
      color: '#2b2b2b'
   },
   timestamp: {
      fontSize: '11px',
      color: '#999'
   },
});


const Chat = () => {
   const classes = useStyles();

   return (
      <div>
         <Grid container className={classes.chatSection}>
            <Grid item xs={12}>
               <List className={classes.messageArea}>
                  <ListItem key="1">
                     <Grid container>
                        <Grid item xs={12}>
                           <ListItemText className={classes.messageBoxRight} align="right">
                              <div className={classes.text}>
                                 <p className={classes.currentUserName}>Onur Arslan <span
                                    className={classes.timestamp}>(10:20)</span></p>
                                 <p className={classes.message}>Merhabe Nasilsiniz?</p>
                              </div>
                           </ListItemText>
                        </Grid>
                     </Grid>
                  </ListItem>
                  <ListItem key="2">
                     <Grid container>
                        <Grid item xs={12}>
                           <ListItemText className={classes.messageBoxLeft} align="left">
                              <div className={classes.text}>
                                 <p className={classes.otherUserName}>Vedat Arslan <span
                                    className={classes.timestamp}>(10:30)</span></p>
                                 <p className={classes.message}>İyiyiz teşekkürler, sizler nasılsınız?</p>
                              </div>
                           </ListItemText>
                        </Grid>
                     </Grid>
                  </ListItem>
               </List>
               <Divider/>
               <Grid container style={{padding: '20px'}}>
                  <Grid item xs={11}>
                     <TextField id="outlined-basic-email" label="Type Something" fullWidth/>
                  </Grid>
                  <Grid xs={1} align="right">
                     <Fab color="primary" size="small" aria-label="add" className={classes.fab}><SendIcon/></Fab>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </div>
   );
}

export default Chat;