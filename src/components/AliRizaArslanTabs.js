import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {NavLink, useLocation} from "react-router-dom";
import AliRizaArslanText1 from "./texts/AliRizaArslanText1";
import AliRizaArslanText2 from "./texts/AliRizaArslanText2";

function TabPanel(props) {
   const {children, value, index, ...other} = props;

   return (
      <div role="tabpanel"
           hidden={value !== index}
           id={`full-width-tabpanel-${index}`}
           aria-labelledby={`full-width-tab-${index}`}
           {...other}>
         {value === index && (
            <Box p={3}>
               <Typography>{children}</Typography>
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
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
   };
}

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
      backgroundColor: "lightGrey"
   },
   indicator: {
      backgroundColor: '#550A21',
      height: 4
   },
   tabRoot: {
      "&:hover": {
         color: '#550A21',
         opacity: 1,
         textDecoration: "none",
         backgroundColor: 'rgba(211, 211, 211, 0.5);',
      },
      '&.Mui-selected': {
         outline: 'none',
         color: '#550A21',
         fontWeight: "bold",
         padding: '20px'
      },
   },
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
         case '/writer/aliRizaArslan':
            if (value !== 0) {
               setValue(0)
            }
            break;
         case '/writer/aliRizaArslan/':
            if (value !== 0) {
               setValue(0)
            }
            break;
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
               // scrollButtons="auto"
               aria-label="scrollable tabs example"
               classes={{indicator: classes.indicator}}>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/1"
                    label="YAŞADIĞIM BİR OLAY" {...a11yProps(0)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/2" label="GARİP BİR İHALE" {...a11yProps(1)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/3"
                    label="HÜSEYİN DEDE (BİYOGRAFİ)" {...a11yProps(2)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/4" label="1 MAYIS" {...a11yProps(3)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab component={NavLink} exact to="/writer/aliRizaArslan/5" label="SORUMLULUK" {...a11yProps(4)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
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

            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>

            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>

            </TabPanel>
         </SwipeableViews>
      </div>
   );
}
