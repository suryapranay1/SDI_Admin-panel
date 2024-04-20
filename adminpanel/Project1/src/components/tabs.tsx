import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import {TabContext} from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import DataTable from './table';
import { createTheme,ThemeProvider} from '@mui/material/styles';

export default function LabTabs() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3f50b5',
      },
      secondary: {
        main: '#2e7d32',
      },
    },
  });
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderColor: 'divider'}}>
          <TabList indicatorColor= 'secondary' textColor='secondary' onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="General info" value="1" />
            <Tab label="Data" value="2" />
            <Tab label="Groups" value="3" />
            <Tab label="Requests" value="4" />
            <Tab label="Members" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"></TabPanel>
        <TabPanel value="2"><><p>Users</p><DataTable/></></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Three</TabPanel>
        <TabPanel value="5">Item Three</TabPanel>
      </TabContext>
    </Box>
    </ThemeProvider>
  );
}
