import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../styles/ImagesTabs.css';
import KoydeYasam from "./images/KoydeYasam";
import Bahar from "./images/Bahar";

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
      backgroundColor: theme.palette.background.paper,
      width: '100%',
   },
   indicator: {
      backgroundColor: '#550A21',
      height: 4
   },
   tabRoot: {
      "&:hover": {
         color: '#550A21',
         opacity: 1,
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
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const handleChangeIndex = (index) => {
      setValue(index);
   };

   //scroll to top when load
   window.scrollTo(0, 0);

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
               <Tab label="Köyde Yaşam" {...a11yProps(0)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab label="Ağcaşar'da Bahar" {...a11yProps(1)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab label="Manzaralar" {...a11yProps(2)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab label="Köyde Yangın" {...a11yProps(3)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab label="Düğünler" {...a11yProps(4)}
                    classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
            </Tabs>
         </AppBar>
         <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0} dir={theme.direction}>
               <KoydeYasam/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
               <Bahar/>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
               <h1>Manzaralar</h1>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
               <h1>Köyde Yangın</h1>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
               <h1>Düğünler</h1>
            </TabPanel>
         </SwipeableViews>
      </div>
   );
}
