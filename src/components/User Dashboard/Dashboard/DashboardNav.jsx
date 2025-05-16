import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout as ToolpadDashboardLayout } from '@toolpad/core/DashboardLayout';
import { Outlet } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Home from '../../Home/Home';
import DashboardHome from './Home/Home';
import logo from '../../../src/favicon.ico'
const NAVIGATION = [

  {
    segment: 'profile/dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,

  },
  {
    segment: 'profile/favLists',
    title: 'Fav List',
    icon: <FavoriteIcon />,
  },

  {
    segment: 'profile/ignoreLists',
    title: 'Ignore List',
    icon: <HeartBrokenIcon />,
  },
  {
    segment: 'profile/editBioData',
    title: 'Edit Bio Data',
    icon: <AutoFixHighIcon />,
  },
  {
    segment: 'profile/myPurchased',
    title: 'My Purchased',
    icon: <ShoppingCartIcon />,
  },


  {
    segment: 'profile/support-Report',
    title: 'Support & Report',
    icon: <HelpIcon />,
  },
  {
    segment: 'profile/settings',
    title: 'Settings',
    icon: <SettingsIcon />,

  },
  {
    segment: 'profile/deleteBioData',
    title: 'Delete BioData',
    icon: <DeleteIcon />,
  },
  {
    segment: 'login',
    title: 'Log out',
    icon: <LogoutIcon />,
    path: '/dashboard/logOut',
  },
  {
    kind: 'divider',

  },
  {
    // segment: '',
    title: 'Back To Home',
    icon: <HomeSharpIcon />,
    path: '/',
  }
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DashboardLayout({ window }) {
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        logo: (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={logo} alt="My Logo" style={{ height: 32 }} />
            <span style={{ fontWeight: 600, fontSize: 18, color: '#1A202C' }}>All Muslim Living</span>
          </div>
        ),
      }}
    >
      {/* <Navbar/> */}

      <ToolpadDashboardLayout

      >
        <Box
          sx={{
            py: 4,
            px: 2,
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
            // textAlign: 'center',
          }}
        >
          {/* <div className='text-center flex justify-center items-center text-7xl font-black '>
            <h1 >Welcome to your profile</h1>
          </div> */}
          <Outlet /> {/* This renders nested routes */}
        </Box>
      </ToolpadDashboardLayout>
      {/* <Footer/> */}

    </AppProvider>
  );
}

DashboardLayout.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayout;
