import React, { useState, useEffect } from 'react';
import logo from '../../src/favicon.ico';
import TranslateIcon from '@mui/icons-material/Translate';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../components/Hooks/useAuth';
import { AccountMenu } from './AccountIcon';
import LanguageSwitcher from '../../components/LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function Navbar() {

    const { t } = useTranslation();

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) setScrolled(true);
            else setScrolled(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSignOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to exit?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire('Logged Out!', 'You have been logged out.', 'success');
                    })
                    .catch((error) => {
                        console.log(error);
                        Swal.fire("Error", "Logout failed.", "error");
                    });
            }
        });
    };

    const navItem = [
        { name: t('Home'), path: '/' },
        { name: t('about_us'), path: '/aboutUs' },
        { name: t('all_biodatas'), path: '/allBiodatas' },
        { name: t('faq'), path: '/faq' },
        { name: t('Guide'), path: '/guide' },
        { name: t('contact_us'), path: '/contact' },
    ];

    return (
        <div className={`fixed top-0 left-0 w-full z-50 lg:py-4 py-1 transition-all duration-500 ${scrolled ? 'bg-white shadow-md backdrop-blur-md' : 'bg-transparent'}`}>
            <nav className='md:w-[90%] xl:w-3/4 mx-auto flex justify-between items-center transition-all duration-500 w-75%'>

                {/* Left Side: Hamburger + Logo */}
                <div className='flex items-center gap-2'>
                    {/* Hamburger Icon */}
                    <div className='lg:hidden'>
                        <button onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? (
                                <CloseIcon className="text-purple-800 text-3xl" />
                            ) : (
                                <MenuIcon className="text-purple-800 text-3xl" />
                            )}
                        </button>
                    </div>

                    {/* Logo */}
                    <div onClick={() => navigate('/')} className='flex items-center cursor-pointer'>
                        <img src={logo} className='w-10 mr-2' alt="Logo" />
                        <p className='text-2xl font-semibold text-purple-900 hidden 2xl:block'>All Muslim Living</p>
                        <p className='text-2xl font-semibold text-purple-900 lg:block 2xl:hidden'>AIL</p>
                    </div>
                </div>

                {/* Desktop Nav */}
                <ul className='hidden lg:flex'>
                    {navItem.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path}>
                                <div className="cursor-pointer text-gray-700 hover:text-purple-800 text-lg transition duration-300 px-5">
                                    {item.name}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side */}
                <div className="flex items-center">
                    {/* Language Switcher */}
                    <div className="relative group px-4 xl:block hidden">
                        {/* <button className="flex items-center gap-1 px-3 py-2 text-purple-800 bg-white border border-gray-300 rounded-md hover:bg-purple-100 transition">
                            <TranslateIcon />
                            <span className="text-sm">en</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute right-0 mt-1 hidden group-hover:block bg-white border rounded-md shadow-md z-10">
                            <button className="block w-full px-10 py-2 text-sm text-gray-700 hover:bg-purple-100">bg</button>
                            <button className="block w-full px-10 py-2 text-sm text-gray-700 hover:bg-purple-100">العربية</button>
                        </div> */}
                        <LanguageSwitcher />
                    </div>

                    {/* Login or User */}
                    {
                        user
                            ? <AccountMenu />
                            : <Link
                                to='/login-options'
                                className="bg-emerald-500 border border-emerald-500 text-white px-4 py-2 rounded-md hover:bg-white hover:text-emerald-500 hover:border transition cursor-pointer">
                                Login
                            </Link>
                    }
                </div>
            </nav>

            {/* Mobile Nav Items */}
            <div className={`lg:hidden bg-white w-full absolute left-0 top-full px-6 pt-4 pb-6 transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 overflow-hidden opacity-0'}`}>
                <ul className='flex flex-col space-y-4'>
                    {navItem.map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.path}
                                onClick={() => setMenuOpen(false)}
                                className="block text-gray-700 hover:text-purple-800 text-lg transition"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
