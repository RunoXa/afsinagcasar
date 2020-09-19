import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
   const {children, value, index, ...other} = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`vertical-tabpanel-${index}`}
         aria-labelledby={`vertical-tab-${index}`}
         {...other}
      >
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
   };
}

const useStyles = makeStyles((theme) => ({
   root: {
      flexGrow: 1,
      // backgroundColor: '#f5f5f5',
      display: 'flex',
      height: '100%',
      width: '100%'
   },
   tabs: {
      // border: `1px solid ${theme.palette.divider}`,
      padding: "1px",
      backgroundColor: '#f5f5f5',
      borderRadius: '8px 8px 8px 8px'
   },
   indicator: {
      backgroundColor: '#550A21',
      width: 3
   },
   tabRoot: {
      "&:hover": {
         color: '#550A21',
         opacity: 1,
         // fontWeight: "bold",
         backgroundColor: 'rgba(211, 211, 211, 0.5);',
      },
      '&.Mui-selected': {
         outline: 'none',
         color: '#550A21',
         fontWeight: "bold",
      },
   },
}));

export default function VerticalTabs() {
   const classes = useStyles();
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <div className={classes.root}>
         <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            classes={{indicator: classes.indicator,}}>
            <Tab label="Item One" classes={{root: classes.tabRoot, selected: classes.tabSelected}} {...a11yProps(0)} />
            <Tab label="Item Two" classes={{root: classes.tabRoot, selected: classes.tabSelected}} {...a11yProps(1)} />
            <Tab label="Item Three"
                 classes={{root: classes.tabRoot, selected: classes.tabSelected}} {...a11yProps(2)} />
            <Tab label="Item Four" classes={{root: classes.tabRoot, selected: classes.tabSelected}} {...a11yProps(3)} />
            <Tab label="Item Five" classes={{root: classes.tabRoot, selected: classes.tabSelected}} {...a11yProps(4)} />
            <Tab label="Item Six" classes={{root: classes.tabRoot, selected: classes.tabSelected}} {...a11yProps(5)} />
            <Tab label="Item Seven"
                 classes={{root: classes.tabRoot, selected: classes.tabSelected}} {...a11yProps(6)} />
            <Tab label="Item Seven"
                 classes={{root: classes.tabRoot, selected: classes.tabSelected}} {...a11yProps(7)} />
            <Tab label="Item Seven"
                 classes={{root: classes.tabRoot, selected: classes.tabSelected}} {...a11yProps(8)} />
         </Tabs>
         <TabPanel value={value} index={0}>
            Item One
         </TabPanel>
         <TabPanel value={value} index={1}>
            Item Two
         </TabPanel>
         <TabPanel value={value} index={2}>
            Item Three
         </TabPanel>
         <TabPanel value={value} index={3}>
            Item Four
         </TabPanel>
         <TabPanel value={value} index={4}>
            Item Five
         </TabPanel>
         <TabPanel value={value} index={5}>
            Item Six
         </TabPanel>
         <TabPanel value={value} index={6}>
            Item Seven
         </TabPanel>
         <TabPanel value={value} index={7}>
            Item Seven
         </TabPanel>
         <TabPanel value={value} index={8}>
            Item Seven
         </TabPanel>
      </div>
   );
}
