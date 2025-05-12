import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';

const CreateBioData = () => {
    return (
        <div className='py-10 lg:py-72 '>
            <div className='w-[90%] max-w-5xl mx-auto text-center'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
                    Create biodata in All Muslim Living completely free of cost
                </h1>

                <div className='mt-10 flex flex-col sm:flex-row justify-center items-center gap-4'>
                    <a 
                        href='/profile/editBioData'
                        className='px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-emerald-600 via-teal-200 to-emerald-600
                        hover:text-white border-2 border-emerald-600 hover:border-emerald-800 text-emerald-950
                        transition-all duration-300 hover:shadow-md hover:shadow-emerald-900 text-lg font-medium text-center'
                    >
                        + create your biodata
                    </a>

                    <a 
                        href='#' // Add YouTube video link here
                        className='flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-emerald-600 
                        hover:border-emerald-800 text-emerald-950 transition-all duration-300 
                        hover:shadow-md hover:shadow-emerald-900 text-lg font-medium text-center'
                    >
                        <YouTubeIcon style={{ color: 'red', fontSize: 24, marginRight: '10px' }} />
                        How to create biodata
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CreateBioData;
