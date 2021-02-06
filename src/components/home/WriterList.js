import React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Badge from '@material-ui/core/Badge';
import DescriptionIcon from '@material-ui/icons/Description';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SengulImageCircle from '../../images/textImages/sengulcircle.png';
import AliRizaImageCircle from '../../images/textImages/alirizacircle.png';

const useStyles = makeStyles(() => ({
   root: {
      height: '100%',
      overflow: 'auto'
   },
   header: {
      color: '#ffffff',
      textAlign: 'center'
   },
   item: {
      padding: '16px',
      borderTop: '1px solid #262626',
      "&:hover": {
         opacity: 1,
         color: 'white !important',
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
   },
   libraryIcon: {
      border: '3px solid #ffffff',
      borderRadius: "25px 25px 25px 25px",
      padding: '2px',
      marginBottom: '5px'
   }
}));

export default function WriterList() {
   const classes = useStyles();

   return (
      <div>
         <ListSubheader component="div" className={classes.header}>
            <h3><LocalLibraryIcon fontSize='large' className={classes.libraryIcon}/> SİTE YAZARLARI</h3>
         </ListSubheader>
         <div className={classes.listSection}>
            <List
               component="nav"
               aria-labelledby="nested-list-subheader"
               className={classes.root}>
               <ListItem button exact to="/writer/aliRizaArslan" className={classes.item} component={Link}>
                  <ListItemIcon><img src={AliRizaImageCircle} alt="AliRizaImageCircle" width="40px"
                                     height="40px"/></ListItemIcon>
                  <ListItemText>Ali Rıza Arslan</ListItemText>
                  <Badge badgeContent={8} color="primary"><DescriptionIcon/></Badge>
               </ListItem>
               <ListItem button exact to="/" className={classes.item} component={Link}>
                  <ListItemIcon><img src={SengulImageCircle} alt="SengulImageCircle" width="40px"
                                     height="40px"/></ListItemIcon>
                  <ListItemText>Şengül Arslan</ListItemText>
                  <Badge badgeContent={1} color="primary"><DescriptionIcon/></Badge>
               </ListItem>
            </List>
         </div>
      </div>
   );
}