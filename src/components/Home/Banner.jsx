import React from 'react';
import pumpLeaf from '../../assets/banner bg imgs/pump leaf.png';
import cocoLeaf from '../../assets/banner bg imgs/coconut leaf.png';
import ConfettiBackground from '../../Shared/Confetti/ConfettiBackground';
import EnvelopeCard from './EnvelopeCard';
import { useIsClient } from '../Hooks/useIsClient';
// import img1 from '../../assets/banner bg imgs/img7.jpg'; // 🔁 Use your image path here



const Banner  = () => {
    const isClient = useIsClient(); // Custom hook to check if the component is mounted on the client side

    return (
        <section className="py-20 relative"
        >
            {/* <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{
                    backgroundImage: `url('${img1}')`, // Use your image path here
                    opacity: 0.15, // Your desired opacity
                    zIndex: 0,
                }}
            ></div> */}

            {/* <div className="absolute inset-0 bg-rose-100 opacity-30 z-20"></div> */}
            <ConfettiBackground />

            {/* <img src={cocoLeaf} className='absolute top-20 rotate-[315deg] w-[100px]' alt="" /> */}
            {/* <img src={cocoLeaf} className='absolute top-20 left-0 w-[100px]' alt="" /> */}
            <div className='absolute inset-0  bg-cover bg-center opacity-10'
            style={{ backgroundImage: `url(${pumpLeaf})` }}
            ></div>

            <div className="w-3/4 mx-auto py-30 flex flex-col justify-center items-center z-20">
                <div className="lg:text-[70px] md:text-5xl font-bold text-emerald-700 mt-20 mb-8 text-center z-200 text-2xl md:text-[100px] hidden md:block">
                    <h1 className=''>Two Souls, One Deen</h1>
                    <h1 className='lg:py-2'>-</h1>
                    <h1>Together Forever</h1>
                    
                </div>
                <div className='md:hidden block font-bold text-emerald-700  text-left z-200 text-4xl my-8'>
                    <h1>
                        Two Souls One Deen- Together Forever
                    </h1>
                </div>
                <p className="text-lg md:text-xl text-emerald-600 mb-8 md:w-1/3 md:text-center pt-3">
                    Find a partner who prays with you, grows with you, and walks the path of Jannah by your side.
                </p>

                <img src={cocoLeaf} className='absolute w-20 rotate-[245deg] md:right-[30%] md:top-[52%] top-[42%] right-10' alt="" />

                <div className='md:block relative flex justify-center items-center mt-10 md:w-1/2 '>
                    <div className="bg-[rgba(84,228,129,0.3)] p-6 rounded-xl shadow-xl text-center border-2 border-emerald-500">
                        <h2 className="text-xl font-bold mb-3 text-rose-800">📜 A Verse from the Quran</h2>
                        <p className="text-gray-700 italic leading-relaxed">
                            "And those who say, 'Our Lord, grant us from among our wives and offspring comfort to our eyes and make us an example for the righteous.”<br />
                            <span className="text-sm text-gray-500">— Surah Al-Furqan (25:74)</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* ✅ Client-side only */}
            {isClient && (
                <>
                    <div className='absolute top-1/2 left-[2%] transform -translate-x-1/2 -translate-y-1/2 '>
                        <EnvelopeCard
                            verse={"And We created you in pairs."}
                            suraName={"Surah An-Naba (78:8)"}
                        />
                    </div>
                    <div className='absolute top-[80%] -right-[2%] transform -translate-x-1/2 -translate-y-1/2'>
                        <EnvelopeCard
                            verse={"They are clothing for you and you are clothing for them."}
                            suraName={"Surah Al-Baqarah (2:187)"}
                        />
                    </div>
                </>
            )}

            {/* <div className='mt-26'>
                <SearchBioDataForm />
            </div>
            <div>
                <CreateBioData />
            </div>
            <div>
                <UserStatistics />
            </div>
            <div>

            </div>
            <div>
                <Footer />
            </div> */}
        </section>
    );
};

export default Banner;
