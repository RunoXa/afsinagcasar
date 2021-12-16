import React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AliRizaImageCircle from '../../images/textImages/alirizacircle.png';

const useStyles = makeStyles(() => ({
   root: {
      height: '100%',
      overflow: 'auto'
   },
   header: {
      marginTop: '15px',
      marginBottom: '15px'
   },
   item: {
      border: '1px solid rgba(85, 4, 4)',
      borderRadius: "25px 25px 25px 25px",
      backgroundColor: '#161616',
      marginRight: '15px',
      marginLeft: '15px',
      marginBottom: '8px',
      padding: '16px',
      width: 'auto',
      "&:hover": {
         // opacity: 1,
         color: 'white !important',
         backgroundColor: 'rgba(211, 211, 211, 0.2)'
      },
   },
   listSection: {
      width: '100%',
      height: '100%',
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
   paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#ffffff',
      paddingTop: '15px',
      overflow: 'auto',
      backgroundColor: '#1e1e1e'
   },
   badge: {
      marginRight: '20px',
      marginLeft: '20px'
   },
   listItemText: {
      fontSize: '20px'
   }
}));

export default function AliRizaArslan() {
   const classes = useStyles();

   window.scrollTo(0, 0);

   return (
      <div>
         <div className={classes.paper}>
            <div className={classes.header}>
               <h3><img src={AliRizaImageCircle} alt="AliRizaImageCircle" width="80px"
                                      height="80px" style={{marginRight: '10px'}}/> Ali Rıza Arslan</h3>
            </div>
            <div className={classes.listSection}>
               <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  className={classes.root}>
                  <ListItem button exact to="/writer/aliRizaArslan/1" className={classes.item} component={Link}>
                     <Badge badgeContent={''} color="primary" className={classes.badge}/>
                     <ListItemText>
                        <div className={classes.listItemText}>Yaşadığım Bir Olay</div>
                     </ListItemText>
                     <ArrowForwardIosIcon/>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/2" className={classes.item} component={Link}>
                     <Badge badgeContent={''} color="primary" className={classes.badge}/>
                     <ListItemText>
                        <div className={classes.listItemText}>Garip Bir İhale</div>
                     </ListItemText>
                     <ArrowForwardIosIcon/>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/3" className={classes.item} component={Link}>
                     <Badge badgeContent={''} color="primary" className={classes.badge}/>
                     <ListItemText>
                        <div className={classes.listItemText}>Hüseyin Dede</div>
                     </ListItemText>
                     <ArrowForwardIosIcon/>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/4" className={classes.item} component={Link}>
                     <Badge badgeContent={''} color="primary" className={classes.badge}/>
                     <ListItemText>
                        <div className={classes.listItemText}>1 Mayıs ve Pertek Anısı</div>
                     </ListItemText>
                     <ArrowForwardIosIcon/>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/5" className={classes.item} component={Link}>
                     <Badge badgeContent={''} color="primary" className={classes.badge}/>
                     <ListItemText>
                        <div className={classes.listItemText}>Sorumluluk</div>
                     </ListItemText>
                     <ArrowForwardIosIcon/>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/6" className={classes.item} component={Link}>
                     <Badge badgeContent={''} color="primary" className={classes.badge}/>
                     <ListItemText>
                        <div className={classes.listItemText}>Karayolları ve Kazalar</div>
                     </ListItemText>
                     <ArrowForwardIosIcon/>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/7" className={classes.item} component={Link}>
                     <Badge badgeContent={''} color="primary" className={classes.badge}/>
                     <ListItemText>
                        <div className={classes.listItemText}>Gündem</div>
                     </ListItemText>
                     <ArrowForwardIosIcon/>
                  </ListItem>
                  <ListItem button exact to="/writer/aliRizaArslan/8" className={classes.item} component={Link}>
                     <Badge badgeContent={''} color="primary" className={classes.badge}/>
                     <ListItemText>
                        <div className={classes.listItemText}>Unuttuk mu?</div>
                     </ListItemText>
                     <ArrowForwardIosIcon/>
                  </ListItem>
               </List>
            </div>
         </div>
      </div>
   );
}