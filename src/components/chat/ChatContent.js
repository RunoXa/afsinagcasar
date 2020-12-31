import React, {useCallback, useContext, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import {auth, firestore} from "../../Base";
import {AuthContext} from "../Auth";

const useStyles = makeStyles({
   sectionRoot: {
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
   chatSection: {
      width: '100%',
      height: '100%',
      background: '#202020'
   },
   messageArea: {
      height: '50vh',
      maxHeight: '100%',
      overflow: 'auto',
      paddingRight: '15px',
      background: '#202020'
   },
   messageBoxRight: {
      position: 'relative',
      background: '#662200',
      color: '#ffffff',
      width: '85%',
      borderRadius: '25px 25px 25px 25px',
      float: 'right',
      padding: '10px',
      '&::after': {
         content: "''",
         position: 'absolute',
         display: 'block',
         width: 0,
         borderStyle: 'solid',
         borderColor: 'transparent #662200',
         borderWidth: '10px 0 10px 28px',
         top: '78%',
         right: '-20px',
         marginTop: '-10px'
      },
   },
   messageBoxLeft: {
      position: 'relative',
      marginLeft: '15px',
      background: '#505050',
      color: '#ffffff',
      width: '85%',
      borderRadius: '25px 25px 25px 25px',
      float: 'left',
      padding: '10px',
      '&::after': {
         content: "''",
         position: 'absolute',
         display: 'block',
         width: 0,
         borderStyle: 'solid',
         borderColor: 'transparent #505050',
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
      color: '#1aa3ff'
   },
   otherUserName: {
      fontWeight: '600',
      fontSize: '14px',
      margin: '0 0 4px',
      color: '#2ecc71'
   },
   message: {
      color: '#ffffff'
   },
   timestamp: {
      fontSize: '11px',
      color: '#999'
   },
   submitButton: {
      padding: '6px',
      color: 'rgb(240,0,0)',
      backgroundColor: '#505050',
      marginTop: '10px',
      marginLeft: '5px',
      "&:hover": {
         opacity: 1,
         backgroundColor: 'rgba(211, 211, 211, 0.2)'
      },
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
   messageInputArea: {
      background: '#333'
   }
});

export default function ChatContent(props) {
   const classes = useStyles();
   const {currentUserFirstName, currentUserLastName} = useContext(AuthContext);

   const submitMessage = useCallback(async event => {
      event.preventDefault();
      const {message} = event.target.elements;
      try {
         if (message.value !== '') {
            await firestore.collection('chat').add({
               firstName: currentUserFirstName,
               lastName: currentUserLastName,
               message: message.value,
               created: new Date(),
               user_id: auth.currentUser.uid
            });
         }
         document.getElementById("message-field-form").reset();
         const messageAreaList = document.getElementById("messageAreaId");
         messageAreaList.scrollTop = messageAreaList.scrollHeight;
      } catch (error) {
         console.log("Error adding document to collection:", error);
      }
   }, [currentUserFirstName, currentUserLastName]);

   useEffect(() => {
      if (props.chatConversation !== null) {
         const messageAreaList = document.getElementById("messageAreaId");
         messageAreaList.scrollTop = messageAreaList.scrollHeight;
      }
   }, [props.chatConversation]);

   return (
      <div className={classes.sectionRoot}>
         <Grid container className={classes.chatSection}>
            <Grid item xs={12}>
               <List className={classes.messageArea} id='messageAreaId'>
                  {props.chatConversation.sort((a, b) => a.created > b.created ? 1 : -1).map(function (bubbleData, index) {
                     return (
                        bubbleData.user_id === props.currentUserId ?
                           <ListItem key={index}>
                              <Grid container>
                                 <Grid item xs={12}>
                                    <ListItemText className={classes.messageBoxRight} align="right">
                                       <div className={classes.text}>
                                          <p className={classes.currentUserName}>{currentUserFirstName + ' ' + currentUserLastName}<span
                                             className={classes.timestamp}> ({new Date(bubbleData.created.seconds * 1000).toLocaleString()})</span>
                                          </p>
                                          <p className={classes.message}>{bubbleData.message}</p>
                                       </div>
                                    </ListItemText>
                                 </Grid>
                              </Grid>
                           </ListItem>
                           :
                           <ListItem key={index}>
                              <Grid container>
                                 <Grid item xs={12}>
                                    <ListItemText className={classes.messageBoxLeft} align="left">
                                       <div className={classes.text}>
                                          <p className={classes.otherUserName}>{bubbleData.firstName + ' ' + bubbleData.lastName}<span
                                             className={classes.timestamp}> ({new Date(bubbleData.created.seconds * 1000).toLocaleString()})</span>
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
               <div className={classes.messageInputArea}>
                  <form id="message-field-form" onSubmit={submitMessage}>
                     <Grid container style={{padding: '20px'}}>
                        <Grid item xs={11}>
                           <TextField id="message" name="message" variant="outlined"
                                      fullWidth
                                      multiline={true}
                                      autoComplete="off"
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
                        <Grid xs={1} align="right">
                           <IconButton type="submit" color="primary" size="small" aria-label="add"
                                       className={classes.submitButton}><SendOutlinedIcon/></IconButton>
                        </Grid>
                     </Grid>
                  </form>
               </div>
            </Grid>
         </Grid>
      </div>
   );
}