import React from 'react';
import useBiodatasInfo from '../Hooks/useBioData';
import BioDataDetailsInfo from './BioDataDetails/BioDataDetailsInfo';



const BiodataCard = () => {
    const [biodatasInfo] = useBiodatasInfo()

    console.log(biodatasInfo);
    return (
        <div className='bg-gradient-to-r from-emerald-300 to-lime-50'>

            {
                biodatasInfo.map((biodataInfo, index) =>
                (
                    <BioDataDetailsInfo
                        key={index}
                        biodataInfo={biodataInfo}
                    />
                ))
            }
           
        </div>


    );
};

export default BiodataCard;
