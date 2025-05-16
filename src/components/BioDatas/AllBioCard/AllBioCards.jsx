import React from 'react';
// import useBiodatasInfo from '../../Hooks/useBioData';
import SingleBioCards from './SingleBioCards';
import useBiodatas from '../../Hooks/useBiodatasAll';

const AllBioCards = () => {
    
    const [allBiodatas] = useBiodatas()
    console.log(allBiodatas);

    return (
        <div className='bg-emerald-100'>

        <div className='w-full md:w-3/4 mx-auto py-40  pt-10'>
        <div className='text-center'>
            <h1 className=' text-2xl md:text-4xl font-bold text-emerald-900 py-8'>All Biodatas</h1>
            <p className='pb-12 text-2xl'>Total Biodatas both Male and Female are - {allBiodatas.length}</p>
        </div>
        <p></p>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 '>

            {
               allBiodatas.map((biodatasInfo, index) => (
                    <SingleBioCards
                    key={index}
                    biodatasInfo = {biodatasInfo}
                    />
                ))
            }
        </div>

        </div>
        </div>


    );
};

export default AllBioCards;