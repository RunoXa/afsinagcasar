import React, {useCallback, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import './Chat.css';
import {auth, firestore} from "../../Base";

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

export default function ChatContent() {
   const classes = useStyles();
   const [chatConversation, setChatConversation] = useState([]);
   const [currentFirstname, setCurrentUserFirstName] = useState([]);
   const [currentLastname, setCurrentUserLastName] = useState([]);

   const submitMessage = useCallback(async event => {
      event.preventDefault();
      const {message} = event.target.elements;
      try {
         await firestore.collection('chat').add({
            firstName: currentFirstname,
            lastName: currentLastname,
            message: message.value,
            created: new Date(),
            user_id: auth.currentUser.uid
         });
      } catch (error) {
         console.log("Error adding document to collection:", error);
      }
   }, [currentFirstname, currentLastname]);

   useEffect(() => {
      //get username
      if (auth.currentUser != null) {
         firestore.collection("users")
            .doc(auth.currentUser.uid)
            .get()
            .then(doc => {
               if (doc.exists) {
                  const data = doc.data();
                  setCurrentUserFirstName(data.firstName);
                  setCurrentUserLastName(data.lastName);
               } else {
                  alert("No such document!");
               }
            }).catch(function (error) {
            console.log("Error getting document:", error);
         });
      }

      //get chat messages
      firestore.collection("chat")
         .onSnapshot((snapshot) => {
            const conversation = [];
            snapshot.forEach((doc) => conversation.push({...doc.data()}));
            setChatConversation(conversation);
         });

   }, []);

   return (
      <div>
         <Grid container className={classes.chatSection}>
            <Grid item xs={12}>
               <List className={classes.messageArea}>
                  {chatConversation.sort((a, b) => a.created > b.created ? 1 : -1).map(function (bubbleData, i) {
                     return (
                        bubbleData.user_id === auth.currentUser.uid ?
                           <ListItem>
                              <Grid container>
                                 <Grid item xs={12}>
                                    <ListItemText className={classes.messageBoxRight} align="right">
                                       <div className={classes.text}>
                                          <p className={classes.currentUserName}>{bubbleData.firstName + ' ' + bubbleData.lastName}<span
                                             className={classes.timestamp}> {new Date(bubbleData.created.toDate()).toDateString()}</span>
                                          </p>
                                          <p className={classes.message}>{bubbleData.message}</p>
                                       </div>
                                    </ListItemText>
                                 </Grid>
                              </Grid>
                           </ListItem>
                           :
                           <ListItem>
                              <Grid container>
                                 <Grid item xs={12}>
                                    <ListItemText className={classes.messageBoxLeft} align="left">
                                       <div className={classes.text}>
                                          <p className={classes.otherUserName}>{bubbleData.firstName + ' ' + bubbleData.lastName}<span
                                             className={classes.timestamp}> {new Date(bubbleData.created.toDate()).toDateString()}</span>
                                          </p>
                                          <p className={classes.message}>{bubbleData.message}</p>
                                       </div>
                                    </ListItemText>
                                 </Grid>
                              </Grid>
                           </ListItem>
                     )
                  })}
               </List>
               <Divider/>
               <form className={classes.form} onSubmit={submitMessage}>
                  <Grid container style={{padding: '20px'}}>
                     <Grid item xs={11}>
                        <TextField id="message" label="Mesaj yaz.." fullWidth name="message" type="message"/>
                     </Grid>
                     <Grid xs={1} align="right">
                        <Fab type="submit" color="primary" size="small" aria-label="add"
                             className={classes.fab}><SendIcon/></Fab>
                     </Grid>
                  </Grid>
               </form>
            </Grid>
         </Grid>
      </div>
   );
}