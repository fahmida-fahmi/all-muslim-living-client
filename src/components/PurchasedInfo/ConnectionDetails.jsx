import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useUsers from '../Hooks/useUsers';

export default function PurchasePackagesBoxOnly() {
  // const [packages, setPackages] = useState([]);
  const [currency, setCurrency] = useState('BDT');
  const [rates, setRates] = useState({ BDT: 1 }); // Default to BDT = 1 for relative conversion
  const [userData] = useUsers()
const packages = [
  {
    id: 1,
    title: "Basic Package",
    connection: 1,
    price: 200,
    currency: "BDT",
    discountPrice: 100,
    description: [
      "With 1 connection, you can view the contact information of a guardian for 1 biodata.",
    ]
  },
  {
    id: 2,
    title: "Standard Package",
    connection: 5,
    price: 800,
    currency: "BDT",
    discountPrice: 400,
    description: [
      "With 5 connections, you can view the contact information of a guardian for 5 biodatas.",
    ]
  },
  {
    id: 3,
    title: "Popular Package",
    connection: 10,
    price: 1400,
    currency: "BDT",
    discountPrice: 700,
    description: [
      "With 10 connections, you can view the contact information of a guardian for 10 biodatas.",
    ]
  }
];


  // useEffect(() => {
  //   const fetchPackages = async () => {
  //     try {
  //       const response = await fetch('https://all-muslim-living-server.onrender.com/connections');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok ' + response.statusText);
  //       }
  //       const data = await response.json();
  //       setPackages(data);
  //       // console.log('Fetched packages:', data);
  //     } catch (error) {
  //       console.error('Error fetching packages:', error);
  //     }
  //   };

  //   fetchPackages();
  // }, []);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await res.json();
        setRates(data.rates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchRates();
  }, []);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const convertPrice = (priceInBDT) => {
    const rateToBDT = rates['BDT'] || 1;
    const rateToTarget = rates[currency] || 1;
    return Math.round((priceInBDT / rateToBDT) * rateToTarget);
  };

const handlePurchase = async (pkg) => {
  try {
    const { title, connection, price } = pkg;
    if (!price) {
      throw new Error('Price is missing in the package');
    }

    fetch('https://all-muslim-living-server.onrender.com/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        connection,
        price,
        currency: currency,
        name: userData?.name || '',
        email: userData?.email || ''
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (!data.url) {
        throw new Error('No payment URL received');
      }
      console.log('Payment URL:', data.url);
      window.location.href = data.url;
    })
    // const data = await response.json();
    // console.log('Payment response:', data);
    
    // if (!data.url) {
    //   throw new Error('No payment URL received');
    // }
    
    // window.location.href = data.url;
    
  
  }
   catch (error) {
    console.error('Payment error:', error);
    // Show error to user
    alert(`Payment failed: ${error.message}`);
  }
};

  return (
    <Box sx={{ px: 4, py: 20 }} className="relative">
      <Typography
        variant="h5"
        fontWeight="bold"
        textAlign="center"
        color="primary"
        gutterBottom
      >
        Purchase More Connections
      </Typography>

      {/* Currency Selector */}
      <Box textAlign="center" mt={2} >
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Select Currency</InputLabel>
          <Select 
            MenuProps={{
              disableScrollLock: true, // This prevents scrollbar from disappearing
            }}
          value={currency}
           onChange={handleCurrencyChange} 
           label="Select Currency">
            <MenuItem value="BDT">BDT</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="INR">INR</MenuItem>
            <MenuItem value="GBP">GBP</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          mt: 4,
        }}
      >
        {packages.map((pkg, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: '100%', sm: '300px' },
              background: 'linear-gradient(145deg, #fff0f0, #ffffff)',
              borderRadius: 3,
              p: 3,
              boxShadow: '0px 4px 20px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '400px',
              textAlign: 'center',
            }}
          >
            <Typography variant="subtitle1" fontWeight="medium" color="text.secondary">
              {pkg.title}
            </Typography>
            <Typography variant="h5" fontWeight="bold" color="purple" mt={1}>
              {pkg.connection}
            </Typography>
            <Typography variant="h6" color="green" mt={1}>
              {currency} {convertPrice(pkg.price)}/=
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={2} textAlign='justify'>
              {pkg.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1} mb={3} textAlign='justify'>
              Once your biodata is approved, you will be able to purchase the package at a 50%
              discount for <strong>{pkg.discount}</strong> each time.
            </Typography>
            <Button
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              sx={{
                mt: 'auto',
                background: 'linear-gradient(to right, #cddc39, #4caf50)',
                color: '#fff',
                fontWeight: 'bold',
                borderRadius: '30px',
                px: 3,
                '&:hover': {
                  background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
                },
              }}
              onClick={() => handlePurchase(pkg)}
            >
              Purchase now
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
