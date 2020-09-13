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
import Image1 from "./Image1";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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
            fontWeight: "bold",
            backgroundColor: 'lightgrey',
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
                    <Tab label="Köyde Yaşam" {...a11yProps(0)}
                         classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
                    <Tab label="Tatiller" {...a11yProps(1)}
                         classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
                    <Tab label="Aramızdan Ayrılanlar" {...a11yProps(2)}
                         classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
                    <Tab label="Manzaralar" {...a11yProps(3)}
                         classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
                    <Tab label="Köyde Yangın" {...a11yProps(4)}
                         classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
                    <Tab label="Düğünler" {...a11yProps(5)}
                         classes={{root: classes.tabRoot, selected: classes.tabSelected}}/>
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Image1/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <h1>Tatiller</h1>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <h1>Aramızdan Ayrılanlar</h1>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <h1>Manzaralar</h1>
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <h1>Köyde Yangın</h1>
                </TabPanel>
                <TabPanel value={value} index={5} dir={theme.direction}>
                    <h1>Düğünler</h1>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
