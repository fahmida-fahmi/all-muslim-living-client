// import React from 'react';

// const Section = ({ title, data }) => (
//     <div className="mb-4 border p-4 px-8 border-t-4 border-t-emerald-800 rounded-lg shadow-md bg-white">
//         <h2 className="text-lg font-semibold border-b mb-2">{title}</h2>
//         <div className="grid grid-cols-2 gap-2 text-sm">
//             {data.map(({ label, value }, idx) => (
//                 <React.Fragment key={idx}>

//                     <span className="font-medium py-2">{label}</span>
//                     <span className='py-2'>{value}</span>
//                 </React.Fragment>
//             ))}
//         </div>
//     </div>
// );


// const BioDataDetailsInfo = ({biodataInfo}) => {

//     const biodata = {
//         general: [
//             { label: 'Biodata No', value: `AIL-${generalInfo.bioDataId}` },
//             { label: 'Type', value: `${generalInfo.biodataType}` },
//             { label: 'Status', value: `${generalInfo.maritalStatus}` },
//             { label: 'Birth Year', value: `${generalInfo.birthYear}` },
//             { label: 'Age', value: `${new Date().getFullYear() - generalInfo.birthYear}` },
//             { label: 'Height', value: '5\'2"' },
//             { label: 'Complexion', value: 'Fair' },
//             { label: 'Weight', value: '48 kg' },
//             { label: 'Blood Group', value: 'A+' },
//             { label: 'Nationality', value: 'Bangladeshi' },
//         ],
//         address: [
//             { label: 'Permanent Address', value: 'Savar, Manikganj, Dhaka, Bangladesh' },
//             { label: 'Present Address', value: 'Savar, Manikganj, Dhaka, Bangladesh' },
//             { label: 'Where did you grow up?', value: 'Savar' },
//         ],
//         education: [
//             { label: 'SSC Passing Year', value: '2016' },
//             { label: 'Group', value: 'Science' },
//             { label: 'HSC Passing Year', value: '2018' },
//             { label: 'Diploma Subject', value: 'Computer Technology' },
//             { label: 'Other Education', value: 'Honours running, some madrasa education' },
//         ],
//         family: [
//             { label: 'Father Alive?', value: 'Yes' },
//             { label: 'Father’s Profession', value: 'Farmer (owns land)' },
//             { label: 'Mother Alive?', value: 'Yes' },
//             { label: 'Mother’s Profession', value: 'Housewife' },
//             { label: 'Siblings', value: '2 sisters' },
//             { label: 'Family Financial Status', value: 'Middle Class' },
//             { label: 'Religious Condition', value: 'Practicing, follow Qur’an-Sunnah' },
//         ],
//         personal: [
//             { label: 'Hijab since', value: '2017' },
//             { label: '5-time prayer', value: 'Yes, Alhamdulillah' },
//             { label: 'Qur’an understanding', value: 'Yes' },
//             { label: 'Follows Manhaj', value: 'Salaf' },
//             { label: 'Music/movies', value: 'Avoids both' },
//             { label: 'Medical Issues', value: 'None' },
//             { label: 'Special Need?', value: 'No' },
//         ],
//         occupation: [
//             { label: 'Occupation', value: 'Student' },
//             { label: 'Monthly Income', value: 'N/A' },
//         ],
//         marriage: [
//             { label: 'Guardian Aware?', value: 'Yes' },
//             { label: 'Willing to work?', value: 'No' },
//             { label: 'Marriage Purpose', value: 'Complete half of deen, avoid fitnah' },
//         ],
//         expectedPartner: [
//             { label: 'Age', value: '25–30' },
//             { label: 'Complexion', value: 'Brown to Fair' },
//             { label: 'Height', value: '5\'4" to 6\'' },
//             { label: 'District', value: 'Dhaka or nearby' },
//             { label: 'Marital Status', value: 'Never Married' },
//             { label: 'Profession', value: 'Practicing Muslim' },
//             { label: 'Financial', value: 'Stable, not luxury-oriented' },
//         ],
//     };
//     return (
//         <div>
//            <div className="w-3/4 mx-auto py-28 px-8 ">
//                 <h1 className="text-2xl font-bold mb-8 text-center">Matrimonial Biodata</h1>
//                 <div className='md:grid md:grid-cols-3 gap-20 '>
//                     <div className='grid-cols-3'>
//                         <SidebarCard />
//                     </div>
//                     <div className='col-span-2'>

//                         {/* <Section title="General Info" data={biodata.general} /> */}
//                         <Section title="Address" data={biodata.address} />
//                         <Section title="Educational Qualifications" data={biodata.education} />
//                         <Section title="Family Information" data={biodata.family} />
//                         <Section title="Personal Information" data={biodata.personal} />
//                         <Section title="Occupation" data={biodata.occupation} />
//                         <Section title="Marriage Related Info" data={biodata.marriage} />
//                         <Section title="Expected Life Partner" data={biodata.expectedPartner} />
//                         <div className="mt-6 text-center">
//                         </div>
//                         <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
//                             View Contact Info
//                         </button>
//                     </div>
//                 </div>
//             </div> 
//         </div>
//     );
// };

// export default BioDataDetailsInfo;
