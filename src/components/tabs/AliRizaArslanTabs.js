import React, {useEffect} from 'react';
import {Link, NavLink, useLocation} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AliRizaArslanText1 from "../texts/alirizaarslan/AliRizaArslanText1";
import AliRizaArslanText2 from "../texts/alirizaarslan/AliRizaArslanText2";
import AliRizaArslanText3 from "../texts/alirizaarslan/AliRizaArslanText3";
import AliRizaArslanText4 from "../texts/alirizaarslan/AliRizaArslanText4";
import AliRizaArslanText5 from "../texts/alirizaarslan/AliRizaArslanText5";
import AliRizaArslanText6 from "../texts/alirizaarslan/AliRizaArslanText6";
import AliRizaArslanText7 from "../texts/alirizaarslan/AliRizaArslanText7";
import AliRizaArslanText8 from "../texts/alirizaarslan/AliRizaArslanText8";
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';

function TabPanel(props) {
   const {children, value, index, ...other} = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`scrollable-auto-tabpanel-${index}`}
         aria-labelledby={`scrollable-auto-tab-${index}`}
         {...other}>
         {value === index && (
            <Box p={3}>
               <Typography component={'div'}>{children}</Typography>
            </Box>
         )}
      </div>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.any.isRequired,
   value: PropTypes.any.isRequired,
};

function a11yProps(index) {
   return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
   };
}

const useStyles = makeStyles(() => ({
   root: {
      width: '100%'
   },
   indicator: {
      backgroundColor: 'rgba(85, 4, 4, 1)',
      height: 4
   },
   tabRoot: {
      color: '#ffffff',
      "&:hover": {
         color: '#ffffff',
         opacity: 1,
         textDecoration: 'none',
         backgroundColor: 'rgba(211, 211, 211, 0.2)',
      },
      '&.Mui-selected': {
         outline: 'none',
         color: '#ffffff',
         fontWeight: 'bold',
         padding: '20px'
      },
   },
   tabs: {
      backgroundColor: 'rgb(10,0,0)',
      color: '#ffffff'
   },
   backButton: {
      display: 'block',
      position: 'sticky',
      bottom: '10px',
      marginBottom: '10px',
      left: '25px',
      borderRadius: '50%',
      height: '60px',
      width: '20px',
      backgroundColor: 'rgb(64, 64, 64, .9)',
      color: '#ffffff',
      "&:hover": {
         color: '#ffffff',
         textDecoration: 'none',
         backgroundColor: 'rgba(85, 4, 4, .9)'
      },
   },
   backIcon: {
      marginLeft: '25%',
      marginTop: '25%'
   }
}));

export default function FullWidthTabs() {
   const classes = useStyles();
   const theme = useTheme();
   const [value, setValue] = React.useState(null);
   const selectedIndex = useLocation().pathname;

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const handleChangeIndex = (index) => {
      setValue(index);
   };

   window.scrollTo(0, 0);

   useEffect(() => {
      //set the TAB index by loading
      switch (selectedIndex) {
         case '/writer/aliRizaArslan/1':
            if (value !== 0) {
               setValue(0)
            }
            break;
         case '/writer/aliRizaArslan/2':
            if (value !== 0) {
               setValue(1)
            }
            break;
         case '/writer/aliRizaArslan/3':
            if (value !== 0) {
               setValue(2)
            }
            break;
         case '/writer/aliRizaArslan/4':
            if (value !== 0) {
               setValue(3)
            }
            break;
         case '/writer/aliRizaArslan/5':
            if (value !== 0) {
               setValue(4)
            }
            break;
         case '/writer/aliRizaArslan/6':
            if (value !== 0) {
               setValue(5)
            }
            break;
         case '/writer/aliRizaArslan/7':
            if (value !== 0) {
               setValue(6)
            }
            break;
         case '/writer/aliRizaArslan/8':
            if (value !== 0) {
               setValue(7)
            }
            break;
         default:
            break
      }
   }, [selectedIndex, value])

   return (
      <div className={classes.root}>
         <AppBar position="static" color="default">
            <Tabs
               value={value}
               onChange={handleChange}
               indicatorColor="primary"
               textColor="primary"
               variant="scrollable"
               scrollButtons="on"
               aria-label="scrollable auto tabs example"
               classes={{indicator: classes.indicator}}
               className={classes.tabs}>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/1"
                    label="YAŞADIĞIM BİR OLAY" {...a11yProps(0)}
                    classes={{root: classes.tabRoot}}/>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/2"
                    label="GARİP BİR İHALE" {...a11yProps(1)}
                    classes={{root: classes.tabRoot}}/>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/3"
                    label="HÜSEYİN DEDE" {...a11yProps(2)}
                    classes={{root: classes.tabRoot}}/>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/4"
                    label="1 MAYIS ve PERTEK ANISI" {...a11yProps(3)}
                    classes={{root: classes.tabRoot}}/>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/5"
                    label="SORUMLULUK" {...a11yProps(4)}
                    classes={{root: classes.tabRoot}}/>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/6"
                    label="KARAYOLLARI VE KAZALAR" {...a11yProps(5)}
                    classes={{root: classes.tabRoot}}/>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/7"
                    label="GÜNDEM" {...a11yProps(6)}
                    classes={{root: classes.tabRoot}}/>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/8"
                    label="UNUTTUK MU?" {...a11yProps(7)}
                    classes={{root: classes.tabRoot}}/>
            </Tabs>
         </AppBar>
         <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0} dir={theme.direction}>
               <AliRizaArslanText1/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
               <AliRizaArslanText2/>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
               <AliRizaArslanText3/>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
               <AliRizaArslanText4/>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
               <AliRizaArslanText5/>
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
               <AliRizaArslanText6/>
            </TabPanel>
            <TabPanel value={value} index={6} dir={theme.direction}>
               <AliRizaArslanText7/>
            </TabPanel>
            <TabPanel value={value} index={7} dir={theme.direction}>
               <AliRizaArslanText8/>
            </TabPanel>
         </SwipeableViews>
         <Button to="/writer/aliRizaArslan" className={classes.backButton}
                 component={Link}><ArrowBackIosOutlinedIcon className={classes.backIcon}/></Button>
      </div>
   );
}
