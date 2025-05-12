import React from 'react';
import coupleImage from '../../assets/Avater for Stattstics/male&Female.png'; // Change to your real image path

const About = () => {
    return (
        <section className="bg-gradient-to-b from-white via-emerald-50 to-white py-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Image */}
                <div className="w-full md:w-1/2">
                    <img src={coupleImage} alt="Happy Muslim Couple" className="rounded-3xl shadow-lg" />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        About <span className="text-rose-500">All Muslim Living</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        At <strong>All Muslim Living</strong>, we believe that marriage is more than companionship —
                        it's a journey of love, faith, and purpose. Our platform is dedicated to helping Muslim singles
                        find life partners who align with their values, deen, and dreams.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        With our faith-driven approach, privacy, and sincerity at heart, we make your search for a
                        righteous partner a peaceful and meaningful experience.
                    </p>
                    <a
                        href="/guide"
                        className="mt-6 inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 px-6 rounded-xl shadow-lg transition duration-300"
                    >
                        💌 Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
