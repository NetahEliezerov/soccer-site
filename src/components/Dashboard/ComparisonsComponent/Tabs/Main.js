import React from 'react';
import { Box, createTheme, Tab, Tabs, Typography } from '@mui/material';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import './Main.css';
import MultipleGraphComponent from '../MultipleGraphComponent/MultipleGraphComponent';

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
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (_, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="tabsComponent">
      <Box sx={{ border: '2px solid #EDECF3' }}>
        <Tabs value={selectedTab} onChange={handleChange} TabIndicatorProps={{ style: { background: '#110E43' } }} aria-label="basic tabs example">
          {props.tabs.map((tab, index) => <CustomTab style={{ color: '#110E43', fontFamily: 'Lexend' }} label={tab.title} value={index} />)}
        </Tabs>
      </Box>
      {props.tabs.map((tab, index) => (
        <TabPanel value={selectedTab} index={index}>
          <MultipleGraphComponent players={props.comparingPlayers} component={tab.key} />
        </TabPanel>)
      )}
    </div>
  )
}

export default MainTabsComponent
