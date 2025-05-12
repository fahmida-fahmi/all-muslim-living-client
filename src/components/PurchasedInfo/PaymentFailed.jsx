import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const PaymentFailed = () => {
    useEffect(() => {
        Swal.fire({
            title: '❌ Payment Failed',
            text: 'Unfortunately, your payment could not be processed. Please try again later or contact support.',
            icon: 'error',
            confirmButtonText: 'Okay',
        });
    }, []);

    return (
        <div style={{ textAlign: 'center', margin: '150px' }}>
            <h2 >Payment Attempt Failed</h2>
            <p className='py-10'>Please try again or contact our support team if the issue persists.</p>
            <Button className='bg-green-400 '
            onClick={() => window.location.href = '/connections'}
            >Go back to purchase page again</Button>
        </div>
    );
};

export default PaymentFailed;
