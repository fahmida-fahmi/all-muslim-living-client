import React from 'react';
import SearchBioDataForm from '../Search Form/SearchBioDataForm';
import CreateBioData from '../CreateBioData/CreateBioData';
import UserStatistics from '../Statistics/UserStatistics';
import MuslimLifeSection from '../HowItWorksSection/HowItWorksSection';
import Banner from './banner';
import img1 from '../../assets/banner bg imgs/img7.jpg'; // 🔁 Use your image path here

const Home = () => {
    return (
        <div className="relative  bg-transparent py-20 ">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed -z-50"
                style={{
                    backgroundImage: `
                    linear-gradient(135deg, rgba(110, 231, 183, 0.8), rgba(255, 255, 255, 0.8)),
                    url('${img1}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    opacity: 0.8
                }}
            ></div>

            <Banner />
            {/* <SearchBioDataForm/> */}
            <CreateBioData />
            <UserStatistics />
            <MuslimLifeSection />
        </div>
    );
};

export default Home;