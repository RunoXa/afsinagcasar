import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import UserIcon from '../../icons/user.png';
import {firestore} from "../../Base";
import List from "@material-ui/core/List";

const useStyles = makeStyles({
   sectionRoot: {
      background: '#202020',
      '@global': {
         '*::-webkit-scrollbar': {
            width: '0.4em'
         },
         '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px #202020'
         },
         '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#999'
         }
      }
   },
   userListSection: {
      background: '#202020 !important',
      color: '#ffffff'
   },
   table: {
      minWidth: 650,
   },
   chatSection: {
      width: '100%',
      height: '80vh'
   },
   cssLabel: {
      color: '#ffffff',
      '&$cssFocused': {
         color: '#ffffff !important'
      }
   },
   cssOutlinedInput: {
      color: '#ffffff',
      background: '#505050 !important',
      borderRadius: "25px 25px 25px 25px",
      '&$cssFocused $notchedOutline': {
         color: '#ffffff !important'
      }
   },
   cssFocused: {
      color: '#ffffff !important'
   },
   notchedOutline: {
      borderRadius: "25px 25px 25px 25px",
      borderColor: '#333 !important',
      color: '#ffffff !important',
   },
   userListItem: {
      "&:hover": {
         opacity: 1,
         backgroundColor: 'rgba(211, 211, 211, 0.2)'
      },
   }
});

export default function ChatUsers() {
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
      <div className={classes.sectionRoot}>
         <Grid container className={classes.chatSection}>
            <Grid item xs={12} className={classes.userListSection}>
               <Grid item xs={12} style={{padding: '10px'}}>
                  <TextField label="Ara" variant="outlined"
                             fullWidth
                             InputLabelProps={{
                                classes: {
                                   root: classes.cssLabel,
                                   focused: classes.cssFocused
                                },
                             }}
                             InputProps={{
                                classes: {
                                   root: classes.cssOutlinedInput,
                                   focused: classes.cssFocused,
                                   notchedOutline: classes.notchedOutline
                                }
                             }}/>
               </Grid>
               <List>
                  {onlineUsers.sort((a, b) => a.online < b.online ? 1 : -1).map(function (onlineUser, index) {
                     return (
                        <ListItem button key={index} className={classes.userListItem}>
                           <ListItemIcon>
                              <Avatar alt="userIcon" src={UserIcon}/>
                           </ListItemIcon>
                           <ListItemText primary={onlineUser.firstName + ' ' + onlineUser.lastName}/>
                           <ListItemText primary={onlineUser.online ? 'online' : 'offline'} align="right"/>
                        </ListItem>
                     );
                  })}
               </List>
               <Divider/>
            </Grid>
         </Grid>
      </div>
   );
}