import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChatContent from './ChatContent';
import ChatUsers from "./ChatUsers";

function TabPanel(props) {
   const {children, value, index, ...other} = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`scrollable-prevent-tabpanel-${index}`}
         aria-labelledby={`scrollable-prevent-tab-${index}`}
         {...other}
      >
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
      id: `scrollable-prevent-tab-${index}`,
      'aria-controls': `scrollable-prevent-tabpanel-${index}`,
   };
}

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '10px 10px 10px 10px',
      color: '#50001B',
      overflow: 'auto',
   },
   appBar: {
      background: '#333'
   },
   indicator: {
      backgroundColor: 'rgb(240,0,0)',
      height: 4
   },
   chatHeader: {
      color: '#ffffff',
      margin: '15px',
      fontWeigth: 'bold',
   },
   tabsContent: {
      display: 'block !important',
   },

   tabs: {
      minWidth: "25%",
      color: 'rgb(240,0,0)',
      borderRadius: '10px 10px 10px 10px',
      "&:hover": {
         opacity: 1,
         textDecoration: "none",
         backgroundColor: 'rgba(211, 211, 211, 0.1)'
      },
   }
}));

export default function ScrollableTabsButtonPrevent() {
   const classes = useStyles();
   const [value, setValue] = React.useState(0);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   window.scrollTo(0, 0);

   return (
      <div className={classes.chatHeader}>
         <h4 style={{fontWeight: 'bold', textAlign: 'center'}}>Sohbet</h4>
         <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
               <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  className={classes.tabsContent}
                  classes={{indicator: classes.indicator}}>
                  <Tab className={classes.tabs} icon={<ChatBubbleIcon/>} aria-label="chatContent" {...a11yProps(0)} />
                  <Tab className={classes.tabs} icon={<PeopleAlt/>} aria-label="onlineUsersIcon" {...a11yProps(1)} />
                  <Tab className={classes.tabs} icon={<PersonPinIcon/>} aria-label="UsersIcon" {...a11yProps(2)} />
                  <Tab className={classes.tabs} icon={<AssignmentLateIcon/>} aria-label="rulesIcon" {...a11yProps(3)} />
               </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
               <ChatContent/>
            </TabPanel>
            <TabPanel value={value} index={1}>
               <ChatUsers/>
            </TabPanel>
            <TabPanel value={value} index={2}>
               PROFIL
            </TabPanel>
            <TabPanel value={value} index={3}>
               SOHBET KURALLARI
            </TabPanel>
         </div>
      </div>
   );
}
