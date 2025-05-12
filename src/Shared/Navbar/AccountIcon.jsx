import React, { useState, useRef, useContext, Profiler } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Typography, Menu, MenuItem, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { LuLogOut } from 'react-icons/lu';
import { BsDash, BsDashCircleDotted } from 'react-icons/bs';
import { GrDashboard } from 'react-icons/gr';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import BadgeIcon from '@mui/icons-material/Badge';
import useAuth from '../../components/Hooks/useAuth';
import Swal from 'sweetalert2';
import useUsers from '../../components/Hooks/useUsers';
import useBiodatasInfo from '../../components/Hooks/useBioData';

export const AccountMenu = () => {

    const [userData] = useUsers()
    const [biodatas] = useBiodatasInfo()

    // console.log(userData._id)
    // console.log(biodatas.length);
    const {logOut} = useAuth()



    const handleSignOut = () => {
        logOut()
            .then(() => {
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
                        Swal.fire(
                            'Logged Out!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (

        <div className="relative group px-4 cursor-pointer">
            <div className="flex items-center gap-1 px-3 py-2 text-purple-800  transition">
                <AccountCircleIcon sx={{ fontSize: 50 }} />

                <div className="absolute hidden right-0 top-16 mt-1 w-64 group-hover:block bg-white border rounded-md shadow-md z-10">
                    <div className='flex  w-full px-10 py-2 hover:bg-purple-100'>
                        <BadgeIcon />
                        <p className=" ml-3 text-md text-muted capitalize">{userData?.displayName}</p>
                    </div>

                    <div className='flex cursor-pointer w-full px-10 py-2 hover:bg-purple-100'>
                        <DashboardIcon />
                        <Link to='/profile/dashboard' className=" ml-3 text-md text-gray-700 ">
                            Go to Profile
                        </Link>
                    </div>
                    <div className='flex cursor-pointer w-full px-10 py-2 hover:bg-purple-100'>
                        <DashboardIcon />
                        {!biodatas ? (
                            <Link to={`/profile`} className="ml-3 text-md text-gray-700">
                            No Biodata 
                        </Link>
                        ) : 
                            <Link to={`/biodatas/${biodatas._id}`} className="ml-3 text-md text-gray-700">
                                My Biodata
                            </Link>
                        }

                    </div>
                    {
                        userData
                            ?
                            <div
                                onClick={handleSignOut}
                                className='flex cursor-pointer w-full px-10 py-2 hover:bg-purple-100'>
                                <LogoutIcon />
                                <Link

                                    to='/'
                                    className=" ml-3 text-md text-gray-700 ">
                                    Log Out

                                </Link>
                            </div>
                            // <button className='text-lg mx-5 font-bold uppercase' onClick={handleSignOut}>sign out</button>
                            :
                            <button className='text-lg mx-5 font-bold uppercase'>
                                <Link to='/login'>log in </Link>
                            </button>

                    }
                </div>

            </div>
        </div>
    );
};


