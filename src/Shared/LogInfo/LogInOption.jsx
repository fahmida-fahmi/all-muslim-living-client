import React, { useContext, useState } from 'react';
import LoginForm from './LogForm';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail, HiPlus } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Context';
import Swal from 'sweetalert2';

const LoginOption = () => {
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const {googleSignIn} = useContext(AuthContext)

  const navigate = useNavigate()
  const location  = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result =>{
      const loggedUser = result.user 
      console.log(loggedUser)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You have successfully logged in.',
        showConfirmButton: false,
        timer: 1500
      })
    navigate(from, {replace: true})
    })
  }

  
  return (
    <div className="flex  justify-center px-4 pt-[197px] pb-[198px] w-3/4 mx-auto">
      {/* {!showEmailLogin ? ( */}
        <div className=" text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-10">Log In to Your Account</h1>

          {/* Google Login */}
          <button 
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 py-3 mb-4 border border-gray-300 rounded-full bg-white shadow hover:shadow-md transition">
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium text-gray-700">Login with Google</span>
          </button>

          {/* Email Login */}
          <Link
          to='/login'
            onClick={() => setShowEmailLogin(true)}
            className="w-full flex items-center justify-center gap-3 py-3 mb-6 border border-gray-300 rounded-full bg-white shadow hover:shadow-md transition"
          >
            <HiOutlineMail className="text-xl text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Login with Email</span>
          </Link>

          <p className="text-sm text-gray-600 mb-4">Don’t have an account?</p>

          {/* Create Account */}
          <Link 
          to='/register' 
          
          className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-700 to-pink-500 shadow-lg hover:opacity-90 transition">
            <HiPlus className="text-lg" />
            {/* <AddSharpIcon className="text-lg" /> */}
            Create an Account
          </Link>
        </div>
      {/* ) : (
        <LoginForm />
      )} */}
    </div>
  );
};

export default LoginOption;


