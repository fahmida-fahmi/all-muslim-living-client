import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import FemalePic from "../../assets/Avater for Stattstics/female.jpg";
import malePic from "../../assets/Avater for Stattstics/male.png";
import maleFemale from "../../assets/Avater for Stattstics/male&Female.png";
import ring from "../../assets/Avater for Stattstics/ring.png";
import useBiodatas from '../Hooks/useBiodatasAll';

const UserStatistics = () => {
  const [biodatas] = useBiodatas();

  let maleCount = 0;
  let femaleCount = 0;

  biodatas.forEach((biodata) => {
    if (biodata?.generalInfo?.biodataType === 'Male') maleCount++;
    else if (biodata?.generalInfo?.biodataType === 'Female') femaleCount++;
  });

  const totalBiodatas = biodatas.length;
  const totalSuccessfulMarriage = 0;

  const statistics = [
    { label: "Total Bride's BioDatas", value: femaleCount, img: FemalePic },
    { label: "Total Groom's BioDatas", value: maleCount, img: malePic },
    { label: "Total Successful Marriages", value: totalSuccessfulMarriage, img: ring },
    { label: "Total BioDatas", value: totalBiodatas, img: maleFemale },
  ];

  return (
    <div className='bg-opacity-80 py-10 w-3/4 mx-auto'>
      <div className=' py-10'>
        <h1 className='lg:text-5xl text-3xl text-center font-bold mb-12'>
          All Muslim Living <span>User Statistics</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center border-4 border-emerald-600 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img className="w-20 mb-4" src={stat.img} alt={stat.label} />
              <p className="text-lime-700 font-light mb-2 text-center">{stat.label}</p>
              <p className="text-4xl text-red-800 font-bold">
                <CountUp end={stat.value} duration={2} />
              </p>
              <div className="absolute inset-0 bg-dotted-pattern pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserStatistics;
