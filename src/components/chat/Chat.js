import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import PersonPinOutlinedIcon from '@material-ui/icons/PersonPinOutlined';
import AssignmentLateOutlinedIcon from '@material-ui/icons/AssignmentLateOutlined';
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
            <Box p={0}>
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
      backgroundColor: 'rgb(180,0,0)',
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
      color: '#ffffff',
      borderRadius: '10px 10px 10px 10px',
      "&:hover": {
         opacity: 1,
         textDecoration: "none",
         color: 'rgb(180,0,0)'
      },
      '&.Mui-selected': {
         color: 'rgb(180,0,0)',
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
                  <Tab className={classes.tabs} icon={<ChatBubbleOutlineOutlinedIcon/>} aria-label="chatContent" {...a11yProps(0)} />
                  <Tab className={classes.tabs} icon={<PeopleAltOutlinedIcon/>} aria-label="onlineUsersIcon" {...a11yProps(1)} />
                  <Tab className={classes.tabs} icon={<PersonPinOutlinedIcon/>} aria-label="UsersIcon" {...a11yProps(2)} />
                  <Tab className={classes.tabs} icon={<AssignmentLateOutlinedIcon/>} aria-label="rulesIcon" {...a11yProps(3)} />
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
