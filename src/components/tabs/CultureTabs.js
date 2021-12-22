import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Kultur from "../culture/Kultur";
import YaylaKulturu from "../culture/YaylaKulturu";
import YaylaGocu from "../culture/YaylaGocu";
import KocKatimi from "../culture/KocKatimi";
import AgcasarGecmisimiz from "../culture/AgcasarGecmisimiz";
import {NavLink} from "react-router-dom";
import {useLocation} from 'react-router-dom'

function TabPanel(props) {
   const {children, value, index, ...other} = props;

   return (
      <div role="tabpanel"
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

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%'
   },
   indicator: {
      backgroundColor: 'rgba(85, 4, 4, 1)',
      height: 4,
   },
   tabRoot: {
      color: '#ffffff',
      "&:hover": {
         color: '#ffffff',
         opacity: 1,
         textDecoration: "none",
         backgroundColor: 'rgba(211, 211, 211, 0.2)',
      },
      '&.Mui-selected': {
         outline: 'none',
         color: '#ffffff',
         fontWeight: "bold",
         padding: '20px'
      },
   },
   tabs: {
      backgroundColor: '#161616',
      color: '#ffffff'
   }
}));

export default function FullWidthTabs() {
   const classes = useStyles();
   const theme = useTheme();
   const selectedIndex = useLocation().pathname;
   const [value, setValue] = React.useState(null);

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
         case '/culture':
            if (value !== 0) {
               setValue(0)
            }
            break;
         case '/culture/':
            if (value !== 0) {
               setValue(0)
            }
            break;
         case '/culture/kultur':
            if (value !== 0) {
               setValue(0)
            }
            break;
         case '/culture/yaylaKulturu':
            if (value !== 0) {
               setValue(1)
            }
            break;
         case '/culture/yaylaGocu':
            if (value !== 0) {
               setValue(2)
            }
            break;
         case '/culture/kocKatimi':
            if (value !== 0) {
               setValue(3)
            }
            break;
         case '/culture/agcasarGecmisimiz':
            if (value !== 0) {
               setValue(4)
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
               <Tab component={NavLink} exact to="/culture/kultur" label="Kültür" {...a11yProps(0)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab component={NavLink} exact to="/culture/yaylaKulturu" label="Yayla Kültürü" {...a11yProps(1)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab component={NavLink} exact to="/culture/yaylaGocu" label="Yayla Göçü" {...a11yProps(2)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab component={NavLink} exact to="/culture/kocKatimi" label="Koç Katımı" {...a11yProps(3)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab component={NavLink} exact to="/culture/agcasarGecmisimiz"
                    label="Ağcaşar Geçmişimiz" {...a11yProps(4)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
            </Tabs>
         </AppBar>
         <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0} dir={theme.direction}>
               <Kultur/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
               <YaylaKulturu/>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
               <YaylaGocu/>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
               <KocKatimi/>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
               <AgcasarGecmisimiz/>
            </TabPanel>
         </SwipeableViews>
      </div>
   );
}
