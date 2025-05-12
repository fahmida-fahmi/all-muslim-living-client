import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import  logo  from "../../src/favicon.ico"; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-gray-800 text-white py-10 px-4 md:px-16 z-500">
      {/* First Row: Links like Privacy Policy */}
      <div className="md:flex gap-12 mb-6 md:justify-center  grid-cols-1 md:grid-cols-3 text-center">
        <a href="/privacy-policy" className="block text-lg hover:text-gray-400 transition duration-300">Privacy Policy</a>
        <a href="/terms" className="block py-5 md:py-0 text-lg hover:text-gray-400 transition duration-300">Terms of Service</a>
        <a href="/contact" className="block text-lg hover:text-gray-400 transition duration-300">Contact Us</a>
      </div>

      {/* Second Row: Social Media Icons */}
      <div className="flex justify-center gap-8 mb-6 ">
        <a href="https://facebook.com" className="text-2xl hover:text-blue-500 transition duration-300">
          <FacebookOutlinedIcon />
        </a>
        <a href="https://instagram.com" className="text-2xl hover:text-pink-500 transition duration-300">
          <InstagramIcon/>
        </a>
        <a href="https://youtube.com" className="text-2xl hover:text-red-500 transition duration-300">
          <YouTubeIcon/>
        </a>
        <a href="https://twitter.com" className="text-2xl hover:text-blue-400 transition duration-300">
          <XIcon/>
        </a>
      </div>

      {/* Third Row: Copyright and Logo */}
      <div className="flex justify-center items-center">
        <img onClick={()=>navigate('/')} src={logo} alt="Logo" className="w-10 mr-4 cursor-pointer" />
        <p className="text-sm text-gray-400">© 2025 Your Company Name-
          <span className='block md:inline'>
             All rights reserved.
          </span>
           </p>
      </div>
    </section>
  );
};

export default Footer;
