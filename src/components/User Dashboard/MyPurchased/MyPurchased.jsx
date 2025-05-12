import React from 'react';

const MyPurchased = () => {
  const myPurchased = []; // Example: [{ id: 1, biodataNo: 'BD123', birthYear: 1990, location: 'New York' }];

  return (
    <div className="w-full px-5">
      <div className="">
        <div className="flex items-center mb-6">
          {/* <button className="bg-purple-700 text-white p-2 rounded-full mr-4">
            <span className="material-icons">arrow_back</span>
          </button> */}
          <h1 className="text-3xl font-semibold text-purple-800 text-center flex-grow">My Purchased</h1>
        </div>
        <div className='my-12 text-2xl'>
            You've purchased {myPurchased.length} biodatas contact information so far.
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-50 text-gray-600 font-semibold border-b-gray-400 border-b">
              <tr>
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Biodata No</th>
                <th className="px-6 py-3">Purchased date</th>
                <th className="px-6 py-3">Option</th>
              </tr>
            </thead>
            <tbody>
              {myPurchased.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                    No data available
                  </td>
                </tr>
              ) : (
                myPurchased.map((user, index) => (
                  <tr key={user.id} className="border-t">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">{user.biodataNo}</td>
                    <td className="px-6 py-4">{user.purchasedDate}</td>
                    <td className="px-6 py-4">
                      <button className="text-red-600 hover:underline">Remove</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

       
      </div>
    </div>
  );
};

export default MyPurchased;
