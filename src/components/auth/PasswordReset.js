import React, {useCallback, useRef, useState} from "react";
import {withRouter} from "react-router-dom";
import app from "../../Base";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';

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
      marginTop: theme.spacing(15),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: "#ffffff",
      padding: '20px',
      background: 'rgb(20,0,0)',
      borderRadius: "25px 25px 25px 25px"
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
      background: '#2e1919 !important',
      '&$cssFocused $notchedOutline': {
         borderColor: `#ffffff !important`
      }
   },
   cssFocused: {
      color: '#ffffff'
   },
   notchedOutline: {
      borderWidth: '1px',
      borderColor: 'rgb(20,0,0) !important',
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
   buttonProgress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
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

const PasswordReset = ({history}) => {
   const classes = useStyles();
   const [errorMessage, setErrorMessage] = useState("");
   const [snackbarOpen, setSnackbarOpen] = useState(false);
   const [dialogOpen, setDialogOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const timer = useRef();

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

   const handleButtonProgress = () => {
      if (!loading) {
         setLoading(true);
         timer.current = window.setTimeout(() => {
            setLoading(false);
         }, 2500);
      }
   };

   const handlePasswordReset = useCallback(async event => {
      handleButtonProgress();
      event.preventDefault();
      const {email} = event.target.elements;
      try {
         await app.auth().sendPasswordResetEmail(email.value)
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
               <Typography component="h1" variant="h4">
                  Şifremi Unuttum
               </Typography>
               <p style={{marginTop: '20px', maxWidth: '100%'}}>Sisteme giriş yaparken kullandığınız e-posta adresini
                  aşağıdaki alana yazarak şifrenizi sıfırlayabilirsiniz.</p>
               <form className={classes.form} onSubmit={handlePasswordReset}>
                  <Grid container spacing={2}>
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
                  </Grid>
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     size="large"
                     disabled={loading}
                     className={classes.submit}>
                     Gönder
                     {loading && <CircularProgress size={30} className={classes.buttonProgress} color="secondary"/>}
                  </Button>
                  <Grid container>
                     <Grid item>
                        <Link href="/login" variant="body2" className={classes.link}>
                           Giriş Yap
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
               <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}><span style={{fontWeight: "bold"}}>Şifre Sıfırlama</span></DialogTitle>
               <DialogContent className={classes.dialogContent}>
                  <DialogContentText id="alert-dialog-description" className={classes.dialogContentText}>
                     E-Posta hesabınıza gelen mesajı kontrol ediniz.
                     <br/><br/><span style={{fontWeight: "bold"}}>NOT:</span> Mesaj gelmezse, önemsiz E-Posta klasörünü
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

export default withRouter(PasswordReset);
