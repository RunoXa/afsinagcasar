import React, {useCallback, useContext, useState} from "react";
import {withRouter, Redirect} from "react-router-dom";
import app from "../../Base";
import {AuthContext} from "../Auth.js";
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
import LoginImage from '../../images/home-image3.jpg';

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
   root: {
      height: '100vh'
   },
   paper: {
      marginTop: theme.spacing(9),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: "#ffffff",
      padding: '20px',
      background: 'rgb(20,0,0)',
      borderRadius: "25px 25px 25px 25px"
   },
   loginContent: {
      // color: "#ffffff"
      // background: "rgba(85, 4, 4, 1)",
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
      color: '#ffffff'
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
   link: {
      color: "#ffffff !important"
   },
   checkbox: {
      color: "#ffffff !important"
   }
}));

const Login = ({history}) => {
   const classes = useStyles();
   const [errorMessage, setErrorMessage] = useState("");
   const [snackbarOpen, setSnackbarOpen] = useState(false);
   const [emailSnackbarOpen, setEmailSnackbarOpen] = useState(false);

   async function handleErrorMessage(error) {
      setErrorMessage({msg: error.message, key: error.code});
      setSnackbarOpen(true);
   }

   const handleCloseErrorMessage = (event, reason) => {
      setSnackbarOpen(false);
   };

   async function handleEmailVerification() {
      setErrorMessage({
         msg: "Siteye giriş yapabilmeniz için e-posta adresinizi doğrulamanız gerekmektedir.",
         key: "E-Posta Doğrulama"
      });
      setEmailSnackbarOpen(true);
   }

   const handleCloseEmailVerification = (event, reason) => {
      setEmailSnackbarOpen(false);
   };

   const handleLogin = useCallback(async event => {
         event.preventDefault();
         const {email, password} = event.target.elements;
         try {
            if (await app.auth().currentUser !== null) {
               await app.auth().currentUser.reload();
               if (app.auth().currentUser.emailVerified) {
                  window.location.reload();
                  history.push("/");
               }
            }
            await app
               .auth()
               .signInWithEmailAndPassword(email.value, password.value);
            if (!app.auth().currentUser.emailVerified) {
               await handleEmailVerification();
            }
         } catch (error) {
            await handleErrorMessage(error);
         }
      },
      [history]
   );

   const {currentUser} = useContext(AuthContext);

   if (currentUser) {
      return <Redirect to="/"/>;
   }

   return (
      <div className={classes.loginContent}>
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
         {/*<img src={LoginImage} width="250" height="250px" style={{*/}
         {/*   borderRadius: '60%', display: "block",*/}
         {/*   marginLeft: "auto",*/}
         {/*   marginRight: "auto",*/}
         {/*   marginTop: "auto",*/}
         {/*   width: "50%"*/}
         {/*}}/>*/}
         <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                  <LockOutlinedIcon/>
               </Avatar>
               <Typography component="h1" variant="h4">
                  Giriş Yap
               </Typography>
               <form className={classes.form} onSubmit={handleLogin}>
                  <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="email"
                     label="Email"
                     name="email"
                     autoComplete="email"
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
                  <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     name="password"
                     label="Şifre"
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
                  <FormControlLabel
                     control={<Checkbox value="remember" className={classes.checkbox}/>}
                     label="Beni Hatırla"
                  />
                  <Button
                     type="submit"
                     fullWidth
                     variant="contained"
                     size="large"
                     className={classes.submit}
                  >
                     Giriş yap
                  </Button>
                  <Grid container>
                     <Grid item xs>
                        <Link href="/passwordReset" variant="body2" className={classes.link}>
                           Şifremi unuttum?
                        </Link>
                     </Grid>
                     <Grid item>
                        <Link href="/signup" variant="body2" className={classes.link}>
                           {"Yeni hesap oluştur"}
                        </Link>
                     </Grid>
                  </Grid>
               </form>
            </div>
            <Box mt={8}>
               <Copyright/>
            </Box>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseErrorMessage}><Alert
               severity="error">{errorMessage.key}: {errorMessage.msg}</Alert></Snackbar>
            <Snackbar open={emailSnackbarOpen} autoHideDuration={6000} onClose={handleCloseEmailVerification}><Alert
               severity="error">{errorMessage.key}: {errorMessage.msg}</Alert></Snackbar>
         </Container>
      </div>
   );
};

export default withRouter(Login);