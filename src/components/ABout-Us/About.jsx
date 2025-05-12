import React from 'react';

const About = () => {
  return (
    <section className="py-20  pt-32 w-3/4 mx-auto">
      <div className="container mx-auto text-left">
        <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          We are a dedicated team committed to providing excellent services and delivering quality solutions. With expertise in various fields, we aim to make a positive impact on the community by creating meaningful and impactful work.
        </p>
        
        {/* Bismillah in Arabic and English meaning */}
        <div className="text-2xl mb-4">
          <p className="text-center font-semibold text-xl mb-4">بِسْمِ ٱللَّهِ</p>
          <p className="text-center text-lg">In the name of Allah, the Most Gracious, the Most Merciful</p>
        </div>

        <p className="text-lg text-gray-700 mb-6">
          Our mission is to bring value to every project we work on, ensuring that our efforts align with our core values of integrity, quality, and innovation. We strive to deliver excellence in every aspect of our work.
        </p>

        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
        <p className="text-lg text-gray-700 mb-6">
          Our vision is to create a future where our work makes a difference in people’s lives, contributing positively to society while continuously striving for progress. We aim to be a leader in our field, setting standards for quality and service that others aspire to meet.
        </p>

        <h3 className="text-2xl font-bold mb-4">Our Values</h3>
        <ul className="text-lg text-gray-700 list-disc list-inside">
          <li><strong>Integrity:</strong> We are committed to honesty and transparency in everything we do.</li>
          <li><strong>Excellence:</strong> We deliver the highest quality in our services and solutions.</li>
          <li><strong>Innovation:</strong> We believe in the power of creativity and technological advancement to solve problems.</li>
          <li><strong>Community:</strong> We aim to build a stronger, more connected community through our work.</li>
        </ul>

        <p className="text-lg text-gray-700 mt-6">
          Thank you for taking the time to learn more about us. We hope to continue making a difference and contributing to the growth and success of those we serve.
        </p>
      </div>
    </section>
  );
};

export default About;
