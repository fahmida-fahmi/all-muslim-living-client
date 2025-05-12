import React from 'react';
// import marriageBg from '../../../assets/banner bg imgs/wed-ring.jpg'; // 🔁 Use your image path here
const SearchBioDataForm = () => {
  return (

    <div
      className="relative bg-cover bg-center py-24 px-6  bg-gradient-to-bl from-white to-emerald-300">
      {/* Overlay to slightly darken the background */}
      {/* <div className="absolute inset-0 bg-emerald-200 opacity-50 z-0"></div> */}


      <div className='flex justify-center items-center'>

        <h2 className="-top-52 absolute  text-center text-2xl font-bold  mb-4 z-10">Search Biodata</h2>
      </div>
      <div className="flex justify-center items-center ">
        {/* <div className=''> */}

        <div className='absolute -top-35  w-1/3 mx-auto text-emerald-700 bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/30 space-y-6'>

          {/* Looking For */}
          <div className='mb-4 '>
            <label htmlFor="lookingFor" className="block  font-semibold mb-2">
              I'm looking for
            </label>
            <select
              id="lookingFor"
              className="w-full px-4 py-3 rounded-full bg-white/20  border border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all duration-300"
            >
              <option value="all">All</option>
              <option value="male">Male's Biodata</option>
              <option value="female">Female's Biodata</option>
            </select>
          </div>

          {/* Marital Status */}
          <div className='mb-4'>
            <label htmlFor="maritalStatus" className="block font-semibold mb-2">
              Marital Status
            </label>
            <select
              id="maritalStatus"
              className="w-full px-4 py-3 rounded-full bg-white/20 border border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all duration-300"
            >
              <option value="all">All</option>
              <option value="neverMarried">Never Married</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widow">Widow</option>
              <option value="widower">Widower</option>
            </select>
          </div>

          {/* Country */}
          <div className='mb-4'>
            <label htmlFor="country" className="block font-semibold mb-2">
              Country
            </label>
            <select
              id="country"
              className="w-full px-4 py-3 rounded-full bg-white/20 border border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-all duration-300"
            >
              <option value="all">All</option>
              <option value="bd">Bangladesh</option>
              <option value="sa">Saudi Arabia</option>
              <option value="uk">United Kingdom</option>
              <option value="us">United States</option>
              <option value="ae">UAE</option>
              <option value="my">Malaysia</option>
            </select>
          </div>


          {/* Submit Button */}
          <div className="pt-4 text-center">
            <button
              type="submit"

              className="cursor-pointer bg-gradient-to-r from-emerald-600 via-teal-200 to-emerald-600 hover:from-emerald-200
             hover:via-teal-600 hover:to-emerald-300 border-2 border-emerald-600 hover:border-emerald-800  hover:text-white font-bold px-6 py-3 rounded-full w-full transition-all duration-300 shadow-md"
            >
              🔍 Search
            </button>
          </div>

        </div>
        {/* </div> */}
      </div>
      {/* <div className=''>
        <CreateBioData/>
      </div> */}

    </div>

  );
};

export default SearchBioDataForm;
