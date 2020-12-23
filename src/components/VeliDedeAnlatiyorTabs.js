import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../styles/ImagesTabs.css';
import VeliDedeAnlatiyorS1 from "./history/VeliDedeAnlatiyorS1";
import VeliDedeAnlatiyorS2 from "./history/VeliDedeAnlatiyorS2";
import VeliDedeAnlatiyorS3 from "./history/VeliDedeAnlatiyorS3";
import VeliDedeAnlatiyorS4 from "./history/VeliDedeAnlatiyorS4";
import {NavLink, useLocation} from "react-router-dom";

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
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
   };
}

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
      backgroundColor: "#2e1919",
   },
   indicator: {
      backgroundColor: '#550A21',
      height: 4
   },
   tabRoot: {
      color: '#ffffff',
      "&:hover": {
         color: '#ffffff',
         opacity: 1,
         textDecoration: "none",
         backgroundColor: 'rgba(211, 211, 211, 0.5);',
      },
      '&.Mui-selected': {
         outline: 'none',
         color: '#ffffff',
         fontWeight: "bold",
         padding: '10px'
      },
   },
   tabs: {
      backgroundColor: '#211212'
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
         case '/history/veliDedeAnlatiyor/':
            if (value !== 0) {
               setValue(0)
            }
            break;
         case '/history/veliDedeAnlatiyor':
            if (value !== 0) {
               setValue(0)
            }
            break;
         case '/history/veliDedeAnlatiyor/sayfa1':
            if (value !== 0) {
               setValue(0)
            }
            break;
         case '/history/veliDedeAnlatiyor/sayfa2':
            if (value !== 0) {
               setValue(1)
            }
            break;
         case '/history/veliDedeAnlatiyor/sayfa3':
            if (value !== 0) {
               setValue(2)
            }
            break;
         case '/history/veliDedeAnlatiyor/sayfa4':
            if (value !== 0) {
               setValue(3)
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
               className={classes.tabs}
               variant="scrollable"
               // scrollButtons="auto"
               aria-label="scrollable tabs example"
               classes={{indicator: classes.indicator}}>
               <Tab component={NavLink} exact to="/history/veliDedeAnlatiyor/sayfa1" label="Sayfa 1" {...a11yProps(0)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}} style={{marginLeft: "auto"}}/>
               <Tab component={NavLink} exact to="/history/veliDedeAnlatiyor/sayfa2" label="Sayfa 2" {...a11yProps(1)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab component={NavLink} exact to="/history/veliDedeAnlatiyor/sayfa3" label="Sayfa 3" {...a11yProps(2)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab component={NavLink} exact to="/history/veliDedeAnlatiyor/sayfa4" label="Sayfa 4" {...a11yProps(3)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}} style={{marginRight: "auto"}}/>
            </Tabs>
         </AppBar>
         <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0} dir={theme.direction}>
               <VeliDedeAnlatiyorS1/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
               <VeliDedeAnlatiyorS2/>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
               <VeliDedeAnlatiyorS3/>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
               <VeliDedeAnlatiyorS4/>
            </TabPanel>
         </SwipeableViews>
      </div>
   );
}
