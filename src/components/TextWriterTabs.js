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
import AliRizaTabs from '../texts/AliRizaArslan/AliRiza';
import AliRizaIcon from '../images/textImages/aliriza.jpg'
import SengulIcon from '../images/textImages/sengul.jpg'
import GuzelIcon from '../images/textImages/guzel.jpg'
import HuseyinYesil from '../images/textImages/huseyinyesil.jpg'
import CemalYesil from '../images/textImages/cemalyesil.jpg'
import SenemAkgoz from '../images/textImages/senemakgoz.jpg'
import HuseyinSumbul from '../images/textImages/huseyinsumbul.jpg'
import BHuseyinYesil from '../images/textImages/bhuseyinyesil.jpg'
import EkremYesil from '../images/textImages/ekremyesil.jpg'

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
               <Tab label="Ali Riza Arslan" {...a11yProps(0)} icon={<img src={AliRizaIcon} style={{
                  width: "60px", heigth: "60px", float: "left", borderRadius: '30%'
               }} alt="AliRizaPortre"/>} classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab label="Şengül Arslan" {...a11yProps(1)} icon={<img src={SengulIcon} style={{
                  width: "80px", heigth: "80px", float: "left", borderRadius: '30%'
               }} alt="SengulIcon"/>} classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab label="Güzel Arslan" {...a11yProps(2)} icon={<img src={GuzelIcon} style={{
                  width: "105px", heigth: "130px", float: "left", borderRadius: '60%'
               }} alt="GuzelArslan"/>} classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab label="Hüseyin Yeşil" {...a11yProps(3)} icon={<img src={HuseyinYesil} style={{
                  width: "80px", heigth: "80px", float: "left", borderRadius: '60%'
               }} alt="HuseyinYesilIcon"/>} classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab label="Cemal Yeşil" {...a11yProps(4)} icon={<img src={CemalYesil} style={{
                  width: "45px", heigth: "50px", float: "left", borderRadius: '40%'
               }} alt="CemalYesilIcon"/>} classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab label="Senem Akgöz" {...a11yProps(5)} icon={<img src={SenemAkgoz} style={{
                  width: "60px", heigth: "60px", float: "left", borderRadius: '30%'
               }} alt="SenemAkgozIcon"/>} classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab label="Hüseyin Sümbül" {...a11yProps(6)} icon={<img src={HuseyinSumbul} style={{
                  width: "40px", heigth: "50px", float: "left", borderRadius: '30%'
               }} alt="HuseyinSumbulIcon"/>} classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab label="B. Hüseyin Yeşil" {...a11yProps(7)} icon={<img src={BHuseyinYesil} style={{
                  width: "45px", heigth: "50px", float: "left", borderRadius: '30%'
               }} alt="BHuseyinYesilIcon"/>} classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
               <Tab label="Ekrem Yeşil" {...a11yProps(8)} icon={<img src={EkremYesil} style={{
                  width: "60px", heigth: "60px", float: "left", borderRadius: '30%'
               }} alt="EkremYesilIcon"/>} classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
            </Tabs>
         </AppBar>
         <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}>
            <TabPanel value={value} index={0} dir={theme.direction}>
               <AliRizaTabs/>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
               <h1>Şengül Arslan</h1>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
               <h1>Güzel Arslan</h1>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
               <h1>Hüseyin Yesil</h1>
            </TabPanel>
            <TabPanel value={value} index={4} dir={theme.direction}>
               <h1>Örnek 2</h1>
            </TabPanel>
            <TabPanel value={value} index={5} dir={theme.direction}>
               <h1>Örnek 3</h1>
            </TabPanel>
         </SwipeableViews>
      </div>
   );
}
