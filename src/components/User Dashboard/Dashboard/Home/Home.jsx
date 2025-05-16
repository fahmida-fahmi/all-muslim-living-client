import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link, useNavigate } from 'react-router-dom';
import useIgnoreLists from '../../../Hooks/useIgnoreLists';
import useFavLists from '../../../Hooks/useFavLists';

const DashboardHome = () => {
  const [ignoreLists] = useIgnoreLists();
  const [favLists] = useFavLists();
  const navigate = useNavigate();

  const totalIgnoreBiodata = ignoreLists.length;
  const totalFavBiodata = favLists.length;

  const topCards = [
    {
      title: 'Connections available',
      value: '0',
      description: '1 connection is required to view contact details of each biodata',
      buttonText: 'Buy more connection',
      buttonColor: '#00d084',
      backgroundColor: '#4B187E',
      textColor: '#fff',
      href: '/connections',
    },
    {
      title: 'Number of Biodata Visits',
      value: '0',
      description: 'Number of times your biodata has been visited.',
      backgroundColor: '#fff',
      textColor: 'primary',
      hasButtons: true,
    },
    {
      title: 'Number of Biodata Visits',
      value: '0',
      description: 'Number of times your biodata has been visited.',
      backgroundColor: '#fff',
      textColor: 'primary',
      hasButtons: true,
    },
  ];

  const bottomCards = [
    {
      icon: <FavoriteBorderIcon sx={{ fontSize: 40, color: 'purple' }} />,
      value: totalFavBiodata,
      label: 'Fav List',
      description: 'All your Fav listed biodatas',
      href: '/profile/favLists',
    },
    {
      icon: <HeartBrokenIcon sx={{ fontSize: 40, color: 'purple' }} />,
      value: totalIgnoreBiodata,
      label: 'Ignore List',
      description: 'All your Ignore listed biodatas',
      href: '/profile/ignoreLists',
    },
    {
      icon: <ShoppingBagOutlinedIcon sx={{ fontSize: 40, color: 'purple' }} />,
      value: '0',
      label: 'My Purchased',
      description: 'All your purchased history',
      href: '/profile/myPurchased',
    },
  ];

  const cardStyle = {
    flex: '1 1 calc(100% - 16px)',
    minWidth: '280px',
    maxWidth: '100%',
    backgroundColor: '#fff',
    borderRadius: 3,
    p: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Top Cards */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
        }}
      >
        {topCards.map((card, index) => (
          <Box
            key={index}
            sx={{
              ...cardStyle,
              flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 24px)', md: '1 1 calc(33.33% - 24px)' },
              backgroundColor: card.backgroundColor,
              color: card.textColor || 'inherit',
            }}
          >
            <Typography variant="h4" color={card.textColor}>
              {card.value}
            </Typography>
            <Typography variant="h6" fontWeight="bold" color={card.textColor}>
              {card.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: card.hasButtons ? 2 : 0 }}>
              {card.description}
            </Typography>

            {card.hasButtons ? (
              <Box sx={{ display: 'flex', gap: 1, mt: 1, flexWrap: 'wrap' }}>
                {['Last 30 Days', 'Last 7 Days', 'Today'].map((label) => (
                  <Button
                    key={label}
                    size="small"
                    variant="contained"
                    sx={{
                      backgroundColor: '#4B187E',
                      color: '#fff',
                      textTransform: 'none',
                      mt: 1,
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Box>
            ) : card.buttonText ? (
              <Button
                component={Link}
                to={card.href}
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: card.buttonColor,
                  color: '#fff',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#00a46b' },
                }}
              >
                {card.buttonText}
              </Button>
            ) : null}
          </Box>
        ))}
      </Box>

      {/* Bottom Cards */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
          mt: 4,
        }}
      >
        {bottomCards.map((card, index) => (
          <Box
            key={index}
            sx={{
              ...cardStyle,
              flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 24px)', md: '1 1 calc(33.33% - 24px)' },
            }}
            onClick={() => navigate(card.href)}
          >
            {card.icon}
            <Typography variant="h6" mt={1}>
              {card.value}
            </Typography>
            <Typography fontWeight="bold" color="purple">
              {card.label}
            </Typography>
            <Typography variant="body2">{card.description}</Typography>
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default DashboardHome;
