import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AccordionExpandDefault from './accordon';
import { createTheme,ThemeProvider} from '@mui/material/styles';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const color = createTheme({
        palette: {
          primary: {
            main: '#3f50b5',
          },
          secondary: {
            main: '#2e7d32',
          },
        },
      });
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={color}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="relative" open={open} color='secondary'  sx={{width: 'fit-content',borderRadius:'10%'}}>
        <Toolbar disableGutters={true}>
          <IconButton
            size='small'
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 1,ml:1, ...(open && { display: 'none', })}}
          >
            <p style={{fontFamily:'sans-serif',fontSize:'0.7em',color:'white'}}>FILTERS</p>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
        //   width: drawerWidth,
        width:'auto',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top:'auto',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        keepMounted={false}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' && <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <AccordionExpandDefault name='User Type' labels={['Super Admin','Admin','User']}/>
        <AccordionExpandDefault name='Roles'labels={['Role1','Role2','Role3']}/>
        <AccordionExpandDefault name='Recent Logins'labels={['Login1','Login2','Login3']}/>
      </Drawer>
    </Box>
    </ThemeProvider>
  );
}
