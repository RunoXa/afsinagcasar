import React, {useCallback} from "react";
import {withRouter} from "react-router-dom";
import app from "../../Base";
import Avatar from '@material-ui/core/Avatar';
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

const useStyles = makeStyles((theme) => ({
   paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
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

const SignUp = ({history}) => {
   const classes = useStyles();
   let firebase = require('firebase/app');
   const firestore = firebase.firestore();
   require('firebase/auth');
   require('firebase/database');
   require('firebase/firestore');

   const handleSignUp = useCallback(async event => {
      event.preventDefault();
      const {firstName, lastName, email, password} = event.target.elements;
      try {
         await app.auth().createUserWithEmailAndPassword(email.value, password.value)
         await firestore.doc(`users/${firebase.auth().currentUser.uid}`).set({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value
         });
         history.push("/");
      } catch (error) {
         alert(error);

      }
   }, [firebase, firestore, history]);

   return (
      <div>
         <header className="page-header" style={{
            height: "60px",
            background: "linear-gradient(90deg, rgba(73, 4, 4, 1) 0%, rgba(120, 2, 2, 1) 45%, rgba(120, 2, 2, 1) 55%, rgba(73, 4, 4, 1) 100%)"
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
                           label="İsim"
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
                           label="Soyisim"
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
                           Hesabınız var mı? Giriş Yap
                        </Link>
                     </Grid>
                  </Grid>
               </form>
            </div>
            <Box mt={5}>
               <Copyright/>
            </Box>
         </Container>
      </div>
   );
};

export default withRouter(SignUp);
