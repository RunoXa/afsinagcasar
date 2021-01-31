import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from "react-router-dom";
import SengulImageCircle from '../../images/textImages/sengulcircle.png';
import AliRizaImageCircle from '../../images/textImages/alirizacircle.png';

const useStyles = makeStyles(() => ({
   root: {
      height: '100%',
      overflow: 'auto'
   },
   header: {
      color: '#ffffff',
      borderBottom: 'double #808080',
      textAlign: 'center'
   },
   item: {
      "&:hover": {
         opacity: 1,
         color: "white !important",
         backgroundColor: 'rgba(211, 211, 211, 0.2)'
      },
   },
   listSection: {
      width: '100%',
      height: '250px',
      '@global': {
         '*::-webkit-scrollbar': {
            width: '0.4em'
         },
         '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px #202020'
         },
         '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'grey'
         }
      }
   }
}));

export default function WriterList() {
   const classes = useStyles();

   return (
      <div>
         <ListSubheader component="div" className={classes.header}>
            <h2>SİTE YAZARLARI</h2>
         </ListSubheader>
         <div className={classes.listSection}>
            <List
               component="nav"
               aria-labelledby="nested-list-subheader"
               className={classes.root}>
               <ListItem button exact to="/writer/aliRizaArslan/1" className={classes.item} component={Link}>
                  <ListItemIcon><img src={AliRizaImageCircle} alt="AliRizaImageCircle" width="40px"
                                     height="40px"/></ListItemIcon>
                  <ListItemText>Ali Rıza Arslan</ListItemText>
               </ListItem>
               <ListItem button exact to="/" className={classes.item} component={Link}>
                  <ListItemIcon><img src={SengulImageCircle} alt="SengulImageCircle" width="40px"
                                     height="40px"/></ListItemIcon>
                  <ListItemText>Şengül Arslan</ListItemText>
               </ListItem>
            </List>
         </div>
      </div>
   );
}