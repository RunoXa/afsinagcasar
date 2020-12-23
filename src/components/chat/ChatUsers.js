import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
   table: {
      minWidth: 650,
   },
   chatSection: {
      width: '100%',
      height: '80vh'
   },
   headBG: {
      backgroundColor: '#e0e0e0'
   },
   borderRight500: {
      borderRight: '1px solid #e0e0e0'
   },
   messageArea: {
      height: '70vh',
      overflowY: 'auto'
   }
});

const Chat = () => {
   const classes = useStyles();

   return (
      <div>
         <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={12} className={classes.borderRight500}>
               <Grid item xs={12} style={{padding: '10px'}}>
                  <TextField label="Ara" variant="outlined" fullWidth/>
               </Grid>
               <List>
                  <ListItem button key="RemySharp">
                     <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                     </ListItemIcon>
                     <ListItemText primary="Onur Arslan"></ListItemText>
                  </ListItem>
               </List>
               <Divider/>
               <List>
                  <ListItem button key="RemySharp">
                     <ListItemIcon>
                        <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                     </ListItemIcon>
                     <ListItemText primary="Vedat Arslan">Vedat Arslan</ListItemText>
                     <ListItemText secondary="online" align="right"></ListItemText>
                  </ListItem>
                  <ListItem button key="Zeynep">
                     <ListItemIcon>
                        <Avatar alt="Zeynep" src="https://material-ui.com/static/images/avatar/3.jpg"/>
                     </ListItemIcon>
                     <ListItemText primary="Zeynep Arslan">Zeynep Arslan</ListItemText>
                  </ListItem>
                  <ListItem button key="Erdem Arslan">
                     <ListItemIcon>
                        <Avatar alt="Vedat Arslan" src="https://material-ui.com/static/images/avatar/2.jpg"/>
                     </ListItemIcon>
                     <ListItemText primary="Vedat Arslan">Vedat Arslan</ListItemText>
                  </ListItem>
               </List>
            </Grid>
         </Grid>
      </div>
   );
}

export default Chat;