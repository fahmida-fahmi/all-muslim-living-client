import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 ">
      <div className="w-3/4 mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-6">
              <i className="fas fa-search text-4xl text-indigo-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800">Discover Services</h3>
            </div>
            <p className="text-gray-600">
              Browse through our list of services and choose the ones that best meet your needs. We offer a wide range of options.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-6">
              <i className="fas fa-cogs text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800">Customize Your Plan</h3>
            </div>
            <p className="text-gray-600">
              Tailor the services to fit your specific requirements, ensuring you get exactly what you need.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="mb-6">
              <i className="fas fa-check-circle text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-800">Get Started</h3>
            </div>
            <p className="text-gray-600">
              Once you're ready, proceed with the final steps and start using the services right away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
