import React from 'react';
import { Box, createTheme, Tab, Tabs, Typography } from '@mui/material';
import {withStyles} from '@mui/styles';
import PropTypes from 'prop-types';
import './Main.css';

const theme = createTheme({
    palette: {
      primary: {
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
const styles = theme => ({
    indicator: {
      backgroundColor: 'white',
    },
}) 
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const CustomTab = withStyles({
    root: {
      textTransform: "none",
      marginLeft: 'auto',
      marginRight: 'auto'
    }
})(Tab);

const MainTabsComponent = (props) => {
    const [value, setValue] = React.useState('1');
    console.log(props.titles)
    const titles = [];

    props.titles.forEach((title, titleIdx) => {
        console.log(title, titleIdx)
        titles.push([title, titleIdx]);
    });

    

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(titles)
    return (
        <div className={`subComponent tabsComponent`}>
            <Box sx={{ border: '2px solid #EDECF3' }}>
                <Tabs value={value} onChange={handleChange} TabIndicatorProps={{style: {background:'#110E43'}}} aria-label="basic tabs example">
                    {titles.map((title) => <CustomTab style={{color: '#110E43', fontFamily: 'Lexend'}} label={title[0]} value={title[1]} />)}
                </Tabs>
            </Box>
            {titles.map((title) => <TabPanel value={value} index={title[1]}>{title[0]}</TabPanel>)}
        </div>
    )
}

export default MainTabsComponent
