import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import {firestore} from "../../Base";

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

export default function Chat() {
   const classes = useStyles();
   const [onlineUsers, setOnlineUser] = useState([]);

   useEffect(() => {
      firestore.collection("users")
         .onSnapshot((snapshot) => {
            const userData = [];
            snapshot.forEach((doc) => userData.push({...doc.data()}));
            setOnlineUser(userData);
         });
   }, []);

   return (
      <div>
         <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={12} className={classes.borderRight500}>
               <Grid item xs={12} style={{padding: '10px'}}>
                  <TextField label="Ara" variant="outlined" fullWidth/>
               </Grid>
               {onlineUsers.map(function (onlineUser, i) {
                  return (
                     <ListItem button key="onlineUser">
                        <ListItemIcon>
                           <Avatar alt="onlineUserAvatar" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                        </ListItemIcon>
                        <ListItemText key={0} primary={onlineUser.firstName + ' ' + onlineUser.lastName}></ListItemText>
                        <ListItemText secondary={onlineUser.online ? 'online' : 'offline'}
                                      align="right"></ListItemText>
                     </ListItem>
                  );
               })}
               <Divider/>
               <List>
                  <ListItem button key="Vedat Arslan">
                     <ListItemIcon>
                        <Avatar alt="Vedat Arslan" src="https://material-ui.com/static/images/avatar/1.jpg"/>
                     </ListItemIcon>
                     <ListItemText primary="Vedat Arslan">Vedat Arslan</ListItemText>
                     <ListItemText secondary="online" align="right"></ListItemText>
                  </ListItem>
                  <ListItem button key="Zeynep Arslan">
                     <ListItemIcon>
                        <Avatar alt="Zeynep Arslan" src="https://material-ui.com/static/images/avatar/3.jpg"/>
                     </ListItemIcon>
                     <ListItemText primary="Zeynep Arslan">Zeynep Arslan</ListItemText>
                  </ListItem>
                  <ListItem button key="Test Person">
                     <ListItemIcon>
                        <Avatar alt="Test Person" src="https://material-ui.com/static/images/avatar/2.jpg"/>
                     </ListItemIcon>
                     <ListItemText primary="Test Person">Test Person</ListItemText>
                  </ListItem>
               </List>
            </Grid>
         </Grid>
      </div>
   );
}