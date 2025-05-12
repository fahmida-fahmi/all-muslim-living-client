import React, { useContext, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import Login from "./LogInOption";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";
import { HiPlus } from "react-icons/hi";
import { getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import axios from 'axios';
import app from "../../../firebaseConfig";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { logIn } = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const auth = getAuth(app)

console.log(from)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    logIn(email, password, rememberMe)
      .then((result => {
        const loggedUser = result.user
        console.log(loggedUser);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have successfully logged in.',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, { replace: true })

      })
      )
      .catch(err => {
        console.log(err);
      })
    // Add your login logic here
  };


const handleLogin = async (email, password) => {
  try {
    // Step 1: Log in the user with Firebase
    const result = await signInWithEmailAndPassword(auth, email, password);
    const loggedInUser = result.user;

    // Step 2: Fetch user data from your backend
    const response = await axios.get(`https://all-muslim-living-server.onrender.com/users/${email}`);
    const user = response.data;

    // Step 3: Update Firebase's displayName using your own name field
    if (user.name) {
      await updateProfile(auth.currentUser, {
        displayName: user.name
      });
      console.log('Firebase displayName updated:', auth.currentUser.displayName);
    }

  } catch (error) {
    console.error('Login error:', error.message);
  }
};


  return (
    <div className="w-3/4 mx-auto flex justify-center pt-[197px] pb-[134px] px-5">
      <form
        onSubmit={handleSubmit}
        className="rounded-lg"
      >
        <h1 className="text-2xl font-semibold text-gray-900 mb-10">Log In to Your Account</h1>


        <label className="block text-sm font-medium mb-1">
          Email or Mobile Number
        </label>
        <div className="relative mb-4">
          <span className="absolute left-3 top-3 text-gray-400">
            <MdEmail />
          </span>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your email or mobile number"
            required
          />
        </div>

        <label className="block text-sm font-medium mb-1">Password</label>
        <div className="relative mb-4">
          <span className="absolute left-3 top-3 text-gray-400">
            <MdLock />
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex justify-between items-center text-sm mb-6">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span>Remember me</span>
          </label>
          <a href="#" className="text-purple-700 hover:underline">
            Forgot Password?
          </a>
        </div>

        <button
        onClick={handleLogin}
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-4 py-2 mb-3 rounded-full bg-gradient-to-r from-purple-900 to-pink-500 text-white font-semibold text-sm shadow-lg hover:opacity-90 transition"
        >
          <FaUserAlt />
          Log In to Your Account
        </button>

        <Link
          to='/login-options'

          // type="button"
          className="w-full mt-2 text-sm text-purple-700 hover:underline"
        >
          ← Back to Login Options
        </Link>
        {/* Create Account */}
        <Link
          to='/register'

          className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-700 to-pink-500 shadow-lg hover:opacity-90 transition">
          <HiPlus className="text-lg" />
          {/* <AddSharpIcon className="text-lg" /> */}
          Create an Account
        </Link>
      </form>
    </div>
  );
}
