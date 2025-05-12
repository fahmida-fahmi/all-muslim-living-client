// src/pages/Guide.tsx
import React from "react";

const Guide = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Matrimony Guide
      </h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-700">
            How to Create a Matrimony Profile
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Creating a profile on our platform is easy! Follow these simple steps:
          </p>
          <ol className="list-decimal pl-5 text-gray-600">
            <li>Sign up with your email or mobile number.</li>
            <li>Fill out your personal information, including your background and preferences.</li>
            <li>Upload clear and recent photos of yourself.</li>
            <li>Complete your profile by adding your family details and other relevant information.</li>
          </ol>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-700">
            How to Search for Matches
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Use our advanced search filters to find potential matches based on the following criteria:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Location</li>
            <li>Religion and Cultural Background</li>
            <li>Age and Height Preferences</li>
            <li>Family Type</li>
            <li>Education and Profession</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">
            How to Connect with Potential Matches
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Once you find someone you're interested in, here are the ways you can connect:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Send a "Like" to express interest.</li>
            <li>Start a conversation through our messaging system.</li>
            <li>Request for a video call or phone call to get to know each other better.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">
            Safety and Privacy Tips
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Your safety and privacy are our top priority. Follow these tips to ensure a secure experience:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Do not share your personal or financial information with anyone you haven’t met in person.</li>
            <li>Use the platform’s built-in communication tools for initial conversations.</li>
            <li>Report any suspicious activity to our support team immediately.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700">
            How to Block or Report a Profile
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            If you encounter any inappropriate behavior, you can block or report a profile:
          </p>
          <ol className="list-decimal pl-5 text-gray-600">
            <li>Go to the profile of the user you want to block or report.</li>
            <li>Click on the "Report" or "Block" button available on the profile page.</li>
            <li>Follow the instructions provided to complete the process.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default Guide;
