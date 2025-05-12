// src/pages/FAQ.tsx
import React from "react";

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Frequently Asked Questions (FAQ)
      </h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700">What is All Muslim Living?</h2>
          <p className="text-lg text-gray-600 mt-2">
            All Muslim Living is a platform that provides resources and information about how Muslims live in different cultures and regions.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-700">How do I join All Muslim Living?</h2>
          <p className="text-lg text-gray-600 mt-2">
            You can join by creating an account on our website, and once you're signed up, you'll have access to all the resources and features we offer.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700">Is there a mobile app for All Muslim Living?</h2>
          <p className="text-lg text-gray-600 mt-2">
            Currently, our platform is only available through the web. We are working on a mobile app, so stay tuned for future updates.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700">How can I contact customer support?</h2>
          <p className="text-lg text-gray-600 mt-2">
            You can contact customer support by visiting the "Contact Us" page or emailing us at support@allmuslimliving.com.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-700">Do you have an affiliate program?</h2>
          <p className="text-lg text-gray-600 mt-2">
            Yes, we offer an affiliate program where you can earn commissions by referring others to our platform. You can find more information in the "Affiliate Program" section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
