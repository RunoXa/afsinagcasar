import React, {useCallback, useContext} from "react";
import {withRouter, Redirect} from "react-router-dom";
import './Login.css';
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
      <Typography variant="body2" color="textSecondary" align="center">
         {'Copyright © '}
         {/*<Link color="inherit" href="https://material-ui.com/">*/}
         <span> Agcasarlilar | by Onur Arslan </span>
         {/*</Link>{' '}*/}
         {new Date().getFullYear()}
         {'.'}
      </Typography>
   );
}

function Alert(props) {
   return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
   root: {
      height: '100vh',
   },
   paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: "#550A21"
   },
   loginContent: {
      // color: "white",
      // background: "rgba(85, 4, 4, 1)",
   },
   avatar: {
      margin: theme.spacing(1),
      backgroundColor: "#550A21",
   },
   form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
   },
   cssLabel: {
      '&$cssFocused': {
         color: '#550A21 !important',
      }
   },
   cssOutlinedInput: {
      '&$cssFocused $notchedOutline': {
         borderColor: `#550A21 !important`,
      }
   },
   cssFocused: {},

   notchedOutline: {
      borderWidth: '1px',
      borderColor: '#550A21 !important',
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: "#550A21",
      color: "white",
      "&:hover": {
         color: 'white',
         opacity: 1,
         backgroundColor: 'rgba(121, 16, 9, 1)',
      },
   },
   link: {
      color: "#550A21 !important"
   },
   checkbox: {
      color: "#550A21 !important"
   }
}));

const Login = ({history}) => {
   const classes = useStyles();
   const [errorMessage, setErrorMessage] = React.useState("");
   const [snackbarOpen, setSnackbarOpen] = React.useState(false);

   async function handleErrorMessage(error) {
      setErrorMessage({msg: error.message, key: error.code});
      setSnackbarOpen(true)
   }

   const handleCloseErrorMessage = (event, reason) => {
      setSnackbarOpen(false);
   };

   const handleLogin = useCallback(
      async event => {
         event.preventDefault();
         const {email, password} = event.target.elements;
         try {
            await app
               .auth()
               .signInWithEmailAndPassword(email.value, password.value);
            history.push("/");
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
         <Container component="main" maxWidth="xs" maxHeigth="100%">
            <CssBaseline/>
            <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                  <LockOutlinedIcon/>
               </Avatar>
               <Typography component="h1" variant="h5">
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
                     className={classes.submit}
                  >
                     Giriş yap
                  </Button>
                  <Grid container>
                     <Grid item xs>
                        <Link href="#" variant="body2" className={classes.link}>
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
         </Container>
      </div>
   );
};

export default withRouter(Login);