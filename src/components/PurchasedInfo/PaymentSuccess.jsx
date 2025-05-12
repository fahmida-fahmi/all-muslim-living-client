import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const PaymentSuccess = () => {
    const { trans_id } = useParams();

    useEffect(() => {
        Swal.fire({
            title: '🎉 Payment Successful!',
            text: `Transaction ID: ${trans_id}`,
            icon: 'success',
            confirmButtonText: 'Great!',
        });
    }, [trans_id]);

    return (
        <div style={{ textAlign: 'center', margin: '200px' }}>
            <h2 className='pb-10'>Thank you for your purchase!</h2>
            <p>Your transaction ID is: <strong>{trans_id}</strong></p>
        </div>
    );
};

export default PaymentSuccess;
