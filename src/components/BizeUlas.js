import React, {useCallback, useContext, useState} from "react";
import {AuthContext} from "./Auth";
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
   paper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: "#ffffff",
      padding: '20px',
      background: '#161616',
      borderRadius: "25px 25px 25px 25px",
      border: "3px solid rgba(85, 4, 4, 1)"
   },
   avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#808080"
   },
   form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3)
   },
   cssLabel: {
      color: '#ffffff !important',
      '&$disabled': {
         color: '#ffffff !important'
      },
   },
   cssOutlinedInput: {
      color: '#ffffff !important',
      background: '#1e1e1e !important',
      '&$disabled': {
         color: '#ffffff !important'
      },
      '&$cssFocused $notchedOutline': {
         borderColor: `#ffffff !important`
      }
   },
   cssFocused: {
      color: '#ffffff'
   },
   notchedOutline: {
      borderWidth: '1px',
      borderColor: '#161616 !important',
      color: "#ffffff"
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: 'rgb(85, 4, 4)',
      color: "#ffffff",
      borderRadius: "25px 25px 25px 25px",
      "&:hover": {
         color: '#ffffff',
         opacity: 1,
         backgroundColor: 'rgba(121, 16, 9, 1)'
      },
   },
   dialog: {
      border: '1px solid red'
   },
   dialogContent: {
      background: 'rgb(245, 245, 245)'
   },
   dialogContentText: {
      background: 'rgb(245, 245, 245)',
      color: '#550A21'
   },
   dialogActions: {
      background: 'rgb(245, 245, 245)'
   },
   dialogButton: {
      backgroundColor: "#550A21",
      color: "#ffffff",
      "&:hover": {
         color: '#ffffff',
         opacity: 1,
         backgroundColor: 'rgba(121, 16, 9, 1)'
      },
   }
}));

export default function BizeUlas() {
   const classes = useStyles();
   const {currentUserFirstName, currentUserLastName, currentUserEmail} = useContext(AuthContext);
   const [dialogOpen, setDialogOpen] = useState(false);

   const handleClickDialogOpen = () => {
      setDialogOpen(true);
   };

   const handleDialogClose = () => {
      setDialogOpen(false);
      window.scrollTo(0, 0);
   };

   const handleSendMail = useCallback(async event => {
      event.preventDefault();
      const {firstName, lastName, email, subject, message} = event.target.elements;
      axios({
         method: "POST",
         url: "/send",
         data: {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            subject: subject.value,
            message: message.value
         }
      }).then((response) => {
         if (response.data.status === 'OK') {
            handleClickDialogOpen();
            document.getElementById("formId").reset();
         } else if (response.data.status === 'FAIL') {
            alert("Message failed to send.");
         }
      })
   }, []);

   window.scrollTo(0, 0);

   return (
      <div>
         <Container component="main" maxWidth="sm">
            <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                  <MailOutlineIcon/>
               </Avatar>
               <Typography component="h1" variant="h5">
                  Bize Ulaş
               </Typography>
               <Grid item sm={12} style={{color: '#ff0000', marginTop: '20px', fontSize: '16px'}}>
                  <p>Aşağıdaki formu doldurarak şikayetlerinizi, sorularınızı veya önerilerinizi bize
                     iletebilirsiniz.
                  </p>
               </Grid>
               <form id="formId" className={classes.form} onSubmit={handleSendMail}>
                  <Grid container spacing={3}>
                     <Grid item xs={6} sm={6}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           disabled
                           name="firstName"
                           label="Adınız"
                           type="firstName"
                           id="firstName"
                           value={currentUserFirstName || ''}
                           InputLabelProps={{
                              classes: {
                                 root: classes.cssLabel,
                                 focused: classes.cssFocused,
                              },
                           }}
                           InputProps={{
                              classes: {
                                 root: classes.cssOutlinedInput,
                                 focused: classes.cssFocused,
                                 notchedOutline: classes.notchedOutline,
                              }
                           }}
                        />
                     </Grid>
                     <Grid item xs={6} sm={6}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           disabled
                           name="lastName"
                           label="Soyadınız"
                           type="lastName"
                           id="lastName"
                           value={currentUserLastName || ''}
                           InputLabelProps={{
                              classes: {
                                 root: classes.cssLabel,
                                 focused: classes.cssFocused,
                              },
                           }}
                           InputProps={{
                              classes: {
                                 root: classes.cssOutlinedInput,
                                 focused: classes.cssFocused,
                                 notchedOutline: classes.notchedOutline,
                              }
                           }}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           disabled
                           name="email"
                           label="Email"
                           type="email"
                           id="email"
                           value={currentUserEmail || ''}
                           InputLabelProps={{
                              classes: {
                                 root: classes.cssLabel,
                                 focused: classes.cssFocused,
                              },
                           }}
                           InputProps={{
                              classes: {
                                 root: classes.cssOutlinedInput,
                                 focused: classes.cssFocused,
                                 notchedOutline: classes.notchedOutline,
                              }
                           }}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           name="subject"
                           label="Konu"
                           type="subject"
                           id="subject"
                           autoComplete="off"
                           InputLabelProps={{
                              classes: {
                                 root: classes.cssLabel,
                                 focused: classes.cssFocused,
                              },
                           }}
                           InputProps={{
                              classes: {
                                 root: classes.cssOutlinedInput,
                                 focused: classes.cssFocused,
                                 notchedOutline: classes.notchedOutline,
                              }
                           }}
                        />
                     </Grid>
                     <Grid item xs={12}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           name="message"
                           label="Mesajınız"
                           type="message"
                           id="message"
                           multiline
                           rows={15}
                           autoComplete="off"
                           InputLabelProps={{
                              classes: {
                                 root: classes.cssLabel,
                                 focused: classes.cssFocused,
                              },
                           }}
                           InputProps={{
                              classes: {
                                 root: classes.cssOutlinedInput,
                                 focused: classes.cssFocused,
                                 notchedOutline: classes.notchedOutline,
                              }
                           }}
                        />
                     </Grid>
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     size="large"
                     className={classes.submit}>
                     GÖNDER
                  </Button>
               </form>
            </div>
            <Dialog
               open={dialogOpen}
               onClose={handleDialogClose}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description">
               {/*<DialogTitle id="alert-dialog-title" className={classes.dialogTitle}><span*/}
               {/*   style={{fontWeight: "bold"}}></span></DialogTitle>*/}
               <DialogContent className={classes.dialogContent}>
                  <DialogContentText id="alert-dialog-description" className={classes.dialogContentText}>
                     Mesajınız başarıyla gönderilmiştir. 2-3 gün içerisinde size geri dönüş yapılacaktır.
                  </DialogContentText>
               </DialogContent>
               <DialogActions className={classes.dialogActions}>
                  <Button onClick={handleDialogClose} className={classes.dialogButton}>
                     OK
                  </Button>
               </DialogActions>
            </Dialog>
         </Container>
      </div>
   );
};
