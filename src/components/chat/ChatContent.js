import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

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
   messagesRight: {
      border: '15px solid transparent',
      background: '#f5f5f5',
      borderRadius: '1em',
      color: '#ffffff',
      '&:after': {
         content: '',
         // right: 0,
         // width: 0,
         // height: 0,
         border: '15px solid transparent',
         borderLeftColor: 'blue',
         borderRight: 0,
         borderBottom: 0,
         marginTop: '-7.5px',
         marginRight: '15px'
      },
   },

   messagesLeft: {
      border: '15px solid transparent',
      background: '#f5f5f5',
      borderRadius: '1em',
      color: '#ffffff',
      '&::before': {
         content: '',
         // right: 0,
         // width: 0,
         // height: 0,
         border: '15px solid transparent',
         borderLeftColor: 'blue',
         borderRight: 0,
         borderBottom: 0,
         marginTop: '-7.5px',
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
      color: '#999 !important'
   },
});


const Chat = () => {
   const classes = useStyles();

   return (
      <div>
         <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={12}>
               <List className={classes.messageArea}>
                  <ListItem key="1">
                     <Grid container>
                        <Grid item xs={12}>
                           <ListItemText className={classes.messagesRight} align="right">
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
                           <ListItemText className={classes.messagesRight} align="left">
                              <div className={classes.text}>
                                 <p className={classes.otherUserName}>Vedat Arslan <span
                                    className={classes.timestamp}>(10:20)</span></p>
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