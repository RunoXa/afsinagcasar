import React, {useContext} from "react";
import {AuthContext} from "./Auth";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import UserIcon from '../icons/user.png';

const useStyles = makeStyles((theme) => ({
   paper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: "#ffffff",
      padding: '20px',
      background: 'rgb(10,0,0)',
      borderRadius: "25px 25px 25px 25px",
      border: "3px solid rgba(85, 4, 4, 1)"
   },
   avatar: {
      margin: theme.spacing(3),
      width: theme.spacing(25),
      height: theme.spacing(25),
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
      borderColor: 'rgb(10,0,0) !important',
      color: "#ffffff"
   }
}));

export default function Profile() {
   const classes = useStyles();
   const {currentUserFirstName, currentUserLastName, currentUserEmail} = useContext(AuthContext);

   window.scrollTo(0, 0);

   return (
      <div>
         <Container component="main" maxWidth="sm">
            <div className={classes.paper}>
               <Typography component="h3" variant="h3" style={{fontWeight: 'bold'}}>
                  PROFIL
               </Typography>
               <Avatar alt="userIcon" src={UserIcon} className={classes.avatar}/>
               <Grid container spacing={3}>
                  <Grid item xs={6} sm={6}>
                     <TextField
                        variant="outlined"
                        fullWidth
                        disabled
                        name="firstName"
                        label="Adınız"
                        type="firstName"
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
                        fullWidth
                        disabled
                        name="lastName"
                        label="Soyadınız"
                        type="lastName"
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
                        fullWidth
                        disabled
                        name="email"
                        label="Email"
                        type="email"
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
               </Grid>
            </div>
         </Container>
      </div>
   );
};
