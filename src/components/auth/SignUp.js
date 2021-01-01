import React, {useCallback, useState} from "react";
import {withRouter} from "react-router-dom";
import app from "../../Base";
import Avatar from '@material-ui/core/Avatar';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {firestore, auth} from '../../Base';

function Copyright() {
   return (
      <Typography variant="body2" align="center" style={{color: '#ffffff'}}>
         {'© Agcasarlilar '}
         {/*<Link color="inherit" href="https://material-ui.com/">*/}
         <span>{new Date().getFullYear()} | Tüm Hakları saklıdır</span>
         {'.'}
      </Typography>
   );
}

function Alert(props) {
   return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
   paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: "#ffffff"
   },
   avatar: {
      margin: theme.spacing(1),
      backgroundColor: "rgb(85, 4, 4)"
   },
   form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3)
   },
   cssLabel: {
      color: '#ffffff',
      '&$cssFocused': {
         color: '#ffffff !important'
      }
   },
   cssOutlinedInput: {
      color: '#ffffff',
      '&$cssFocused $notchedOutline': {
         borderColor: `#ffffff !important`
      }
   },
   cssFocused: {
      color: '#ffffff'
   },
   notchedOutline: {
      borderWidth: '1px',
      borderColor: '#ffffff !important',
      color: "#ffffff"
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: 'rgb(85, 4, 4)',
      color: "#ffffff",
      "&:hover": {
         color: '#ffffff',
         opacity: 1,
         backgroundColor: 'rgba(121, 16, 9, 1)'
      },
   },
   link: {
      color: "#ffffff !important"
   },
   checkbox: {
      color: "#ffffff !important"
   },
   dialog: {
      border: '1px solid red'
   },
   dialogTitle: {
      background: 'rgb(245, 245, 245)',
      color: '#550A21',
      fontWeight: "bold !important"
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

const SignUp = ({history}) => {
   const classes = useStyles();
   const [errorMessage, setErrorMessage] = useState("");
   const [snackbarOpen, setSnackbarOpen] = useState(false);
   const [dialogOpen, setDialogOpen] = useState(false);

   async function handleErrorMessage(error) {
      setErrorMessage({msg: error.message, key: error.code});
      setSnackbarOpen(true)
   }

   const handleCloseErrorMessage = (event, reason) => {
      setSnackbarOpen(false);
   };

   const handleClickDialogOpen = () => {
      setDialogOpen(true);
   };

   const handleDialogClose = () => {
      setDialogOpen(false);
      history.push("/login");
   };

   const handleSignUp = useCallback(async event => {
      event.preventDefault();
      const {firstName, lastName, email, password} = event.target.elements;
      try {
         await app.auth().createUserWithEmailAndPassword(email.value, password.value)
         await firestore.doc(`users/${auth.currentUser.uid}`).set({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            online: false
         });
         await app.auth().currentUser.sendEmailVerification();
         handleClickDialogOpen(true);
      } catch (error) {
         await handleErrorMessage(error);
      }
   }, []);

   return (
      <div>
         <header className="page-header" style={{
            height: "60px",
            background: "rgba(85, 4, 4, 1)"
         }}>
            <h4 style={{
               textAlign: "center",
               fontWeight: "bold",
               color: "white",
               marginTop: "15px"
            }}>AĞCAŞARA HOŞGELDİNİZ</h4>
         </header>
         <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                  <LockOutlinedIcon/>
               </Avatar>
               <Typography component="h1" variant="h5">
                  Kayıt Ol
               </Typography>
               <form className={classes.form} onSubmit={handleSignUp}>
                  <Grid container spacing={2}>
                     <Grid item xs={12} sm={6}>
                        <TextField
                           autoComplete="fname"
                           name="firstName"
                           variant="outlined"
                           required
                           fullWidth
                           id="firstName"
                           label="Adınız"
                           autoFocus
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
                     <Grid item xs={12} sm={6}>
                        <TextField
                           variant="outlined"
                           required
                           fullWidth
                           id="lastName"
                           label="Soyadınız"
                           name="lastName"
                           autoComplete="lname"
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
                           id="email"
                           label="Email"
                           name="email"
                           autoComplete="email"
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
                           name="password"
                           label="Şifreniz"
                           type="password"
                           id="password"
                           autoComplete="current-password"
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
                        <FormControlLabel
                           control={<Checkbox value="allowExtraEmails" required className={classes.checkbox}/>}
                           label="Verdiğim bilgilerin doğruluğunu kabul ediyorum"
                        />
                     </Grid>
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     className={classes.submit}>
                     Kayıt Ol
                  </Button>
                  <Grid container justify="flex-end">
                     <Grid item>
                        <Link href="/login" variant="body2" className={classes.link}>
                           Üyeliğiniz var mı? Giriş Yap
                        </Link>
                     </Grid>
                  </Grid>
               </form>
            </div>
            <Box mt={5}>
               <Copyright/>
            </Box>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseErrorMessage}><Alert
               severity="error">{errorMessage.key}: {errorMessage.msg}</Alert></Snackbar>
            <Dialog
               open={dialogOpen}
               onClose={handleDialogClose}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description">
               <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}><span style={{fontWeight: "bold"}}>E-POSTA DOĞRULAMA</span></DialogTitle>
               <DialogContent className={classes.dialogContent}>
                  <DialogContentText id="alert-dialog-description" className={classes.dialogContentText}>
                     Üyeliğiniz başarıyla tamamlanmıştır. Son olarak e-posta hesabınızı doğrulamanız gerekmektedir.
                     <br/><br/><span style={{fontWeight: "bold"}}>NOT:</span> Mail gelmezse, önemsiz E-Posta klasörünü
                     de kontrol ediniz. "Junk-E-Mail/Spam"
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

export default withRouter(SignUp);
