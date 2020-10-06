import React from 'react';
import '../styles/Header.css';
import 'bootstrap/dist/css/bootstrap.css'

import clsx from 'clsx';
import {Link} from 'react-router-dom';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SvgIcon from '@material-ui/core/SvgIcon';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ChatIcon from '@material-ui/icons/Chat';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CultureIcon from '@material-ui/icons/AccountBalance';
import VerticalSplitRoundedIcon from '@material-ui/icons/VerticalSplitRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Base from '../Base';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
   },
   appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      background: "linear-gradient(90deg, rgba(73, 4, 4, 1) 0%, rgba(120, 2, 2, 1) 45%, rgba(120, 2, 2, 1) 55%, rgba(73, 4, 4, 1) 100%)"
   },
   appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginRight: theme.spacing(2),
      "&:hover": {
         opacity: 1,
         color: "white !important",
         backgroundColor: 'rgba(150, 150, 150, 0.4)',
      },
   },
   menuButtonRight: {
      "&:hover": {
         opacity: 1,
         color: "white !important",
         backgroundColor: 'rgba(150, 150, 150, 0.4)',
      },
   },
   headerCloseButton: {
      marginLeft: theme.spacing(2),
      "&:hover": {
         opacity: 1,
         backgroundColor: 'rgba(150, 150, 150, 0.4)',
      },
   },
   listItem: {
      "&:hover": {
         opacity: 1,
         color: "white !important",
         backgroundColor: 'rgba(150, 150, 150, 0.4)',
      },
   },
   hide: {
      display: 'none',
   },
   nested: {
      paddingLeft: theme.spacing(4),
      "&:hover": {
         opacity: 1,
         color: "white !important",
         backgroundColor: 'rgba(150, 150, 150, 0.4)',
      },
   },
   headerElements: {
      marginLeft: "auto"
   },
   title: {
      flexGrow: 1,
   },
   drawer: {
      width: drawerWidth,
      flexShrink: 0,
   },

   drawerPaper: {
      width: drawerWidth,
      color: "white",
      background: "linear-gradient(90deg, rgba(73, 4, 4, 1) 0%, rgba(120, 2, 2, 1) 45%, rgba(120, 2, 2, 1) 55%, rgba(73, 4, 4, 1) 100%)"
   },
   drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
   },
   contentShift: {
      transition: theme.transitions.create('margin', {
         easing: theme.transitions.easing.easeOut,
         duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
   },
}));

export default function PersistentDrawerLeft() {
   const classes = useStyles();
   const theme = useTheme();
   const [open, setOpen] = React.useState(false);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [dropDownOpen, setDropDownOpen] = React.useState(false);
   const openMenu = Boolean(anchorEl);

   const handleDrawerOpen = () => {
      setOpen(true);
   };

   const handleDrawerClose = () => {
      setOpen(false);
      setDropDownOpen(false);
   };

   const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   const handleClick = () => {
      setDropDownOpen(!dropDownOpen);
   };

   const handleLogoutAndClose = () => {
      setAnchorEl(null);
      Base.auth().signOut();
   };

   return (
      <div className={classes.root}>
         <CssBaseline/>
         <React.Fragment>
            <AppBar
               position="static"
               className={classes.appBar}>
               <Toolbar>
                  <IconButton
                     color="inherit"
                     aria-label="open drawer"
                     onClick={handleDrawerOpen}
                     edge="start"
                     className={clsx(classes.menuButton, open && classes.hide)}>
                     <MenuIcon/>
                  </IconButton>
                  <Typography variant="h5" noWrap>
                     Ağcaşarlılar
                  </Typography>
                  <div className={classes.headerElements}>
                     <IconButton button exact to="/" component={Link} color="inherit"
                                 className={classes.menuButtonRight}><HomeRoundedIcon/></IconButton>
                     <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        className={classes.menuButtonRight}>
                        <AccountCircle/>
                     </IconButton>
                     <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                           vertical: 'top',
                           horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'right',
                        }}
                        open={openMenu}
                        onClose={handleClose}>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem exact to="/login" onClick={handleLogoutAndClose}><ExitToAppIcon/>Çıkış Yap</MenuItem>
                     </Menu>
                  </div>
               </Toolbar>
            </AppBar>
         </React.Fragment>

         <Drawer
            className={classes.drawer}
            variant="temporary"
            onEscapeKeyDown={handleDrawerClose}
            onBackdropClick={handleDrawerClose}
            anchor="left"
            open={open}
            classes={{
               paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
               <Typography variant="h5" noWrap>
                  Ağcaşarlılar
               </Typography>
               <IconButton onClick={handleDrawerClose} color="inherit" className={classes.headerCloseButton}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
               </IconButton>
            </div>
            <Divider/>
            <List>
               <ListItem button exact to="/" component={Link} onClick={handleDrawerClose} className={classes.listItem}>
                  <ListItemIcon><HomeRoundedIcon style={{color: "white"}}/></ListItemIcon>
                  <ListItemText>Anasayfa</ListItemText>
               </ListItem>
               <ListItem button exact to="/images" component={Link} onClick={handleDrawerClose}
                         className={classes.listItem}>
                  <ListItemIcon><PermMediaIcon style={{color: "white"}}/></ListItemIcon>
                  <ListItemText>Resimler</ListItemText>
               </ListItem>
               <ListItem button exact to="/culture" component={Link} onClick={handleDrawerClose}
                         className={classes.listItem}>
                  <ListItemIcon>
                     <ListItemIcon><CultureIcon style={{color: "white"}}/></ListItemIcon>
                  </ListItemIcon>
                  <ListItemText>Kültür</ListItemText>
               </ListItem>
               <ListItem button exact to="/chat" component={Link} onClick={handleDrawerClose}
                         className={classes.listItem}>
                  <ListItemIcon><ChatIcon style={{color: "white"}}/></ListItemIcon>
                  <ListItemText>Sohbet</ListItemText>
               </ListItem>
               <ListItem button exact to="/tree" component={Link} onClick={handleDrawerClose}
                         className={classes.listItem}>
                  <ListItemIcon><AccountTreeIcon style={{color: "white"}}/></ListItemIcon>
                  <ListItemText>Soyağacı</ListItemText>
               </ListItem>
               <ListItem button onClick={handleClick} className={classes.listItem}>
                  <ListItemIcon><MenuBookIcon style={{color: "white"}}/></ListItemIcon>
                  <ListItemText>Yazılar</ListItemText>
                  {dropDownOpen ? <ExpandLess/> : <ExpandMore/>}
               </ListItem>
               <Collapse in={dropDownOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                     <ListItem button exact to="/textWriterTabs" className={classes.nested} component={Link}
                               onClick={handleDrawerClose}>
                        <ListItemIcon><VerticalSplitRoundedIcon style={{color: "white"}}/></ListItemIcon>
                        <ListItemText>Site Yazarları</ListItemText>
                     </ListItem>
                     <ListItem button className={classes.nested} component={Link} onClick={handleDrawerClose}>
                        <ListItemIcon><VerticalSplitRoundedIcon style={{color: "white"}}/></ListItemIcon>
                        <ListItemText>Tarih</ListItemText>
                     </ListItem>
                     <ListItem button className={classes.nested} component={Link} onClick={handleDrawerClose}>
                        <ListItemIcon><VerticalSplitRoundedIcon style={{color: "white"}}/></ListItemIcon>
                        <ListItemText>Mektuplar</ListItemText>
                     </ListItem>
                  </List>
               </Collapse>
            </List>
            <Divider/>
         </Drawer>
      </div>
   );
}

