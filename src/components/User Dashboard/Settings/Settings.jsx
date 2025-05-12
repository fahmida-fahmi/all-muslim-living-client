import React, { useState } from 'react';
import Swal from 'sweetalert2';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import useAuth from '../../Hooks/useAuth';

export const Settings = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);


  const { user } = useAuth()
  console.log(user)

  
  const handlePasswordUpdate = (e) => {
    e.preventDefault();
  
    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords don't match!",
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'my-confirm-btn'
        }
      });
      return;
    }
  
    // Send the new password to backend
    fetch(`https://all-muslim-living-server.onrender.com/users/${user._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: newPassword }), // send only the password
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
  
        if (data.modifiedCount || data.success) {
          Swal.fire(
            'Updated!',
            'Your password has been updated.',
            'success'
          );
          setNewPassword('');
          setConfirmPassword('');
        } else {
          Swal.fire(
            'Error!',
            'Password update failed. Please try again.',
            'error'
          );
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire(
          'Error!',
          'Something went wrong. Please try again later.',
          'error'
        );
      });
  };
  



  return (
    <div className="flex flex-col items-center py-6">
      <div className="md:w-1/4 w-3/4">
        <h1 className="text-3xl font-semibold text-emerald-800 mb-10">Account Setting</h1>

        {/* Change Password */}
        <section className="mb-14">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Change Password</h2>
          <hr className="mb-4" />
          <form onSubmit={handlePasswordUpdate} className="space-y-5">
            <div className="relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full p-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ?
                  <VisibilityOutlinedIcon />
                  :
                  <VisibilityOffOutlinedIcon />
                }
              </button>
            </div>

            <div className="relative w-full">
              <label className="block text-sm text-gray-600 mb-1">Confirm New password</label>
              <input
                type={showConfirmedPassword ? 'text' : 'password'}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-[65%] transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowConfirmedPassword((prev) => !prev)}
              >
                {showConfirmedPassword ?
                  <VisibilityOutlinedIcon />
                  :
                  <VisibilityOffOutlinedIcon />
                }
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full text-white font-medium bg-gradient-to-r from-emerald-800 to-lime-400 shadow-lg hover:opacity-90 transition"
            >
              Update
            </button>
          </form>
        </section>

        
      </div>
    </div>
  );
};

