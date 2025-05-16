import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SidebarCard from '../SidebarCard';
import SingleBioDataDetailsSkeleton from '../../Skeleton/SingleBioDataDetailsSkeleton';
import useBiodatasInfo from '../../Hooks/useBioData';

const Section = ({ title, data }) => (
    <div className="mb-4 border p-4 px-8 border-t-4 border-t-emerald-800 rounded-lg shadow-md bg-white">
        <h2 className="text-lg font-semibold border-b mb-2">{title}</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
            {data.map(({ label, value }, idx) => (
                <React.Fragment key={idx}>

                    <span className="font-medium py-2">{label}</span>
                    <span className='py-2'>{value}</span>
                </React.Fragment>
            ))}
        </div>
    </div>
);

const SingleBioDataDetails = () => {
    const { id } = useParams();
    console.log(id);
    const [biodata, setBiodata] = useState(null);

    const [biodatas] = useBiodatasInfo()
    useEffect(() => {
        fetch(`https://all-muslim-living-server.onrender.com/biodatas/${id}`)
            .then((response) => response.json())
            .then((data) => setBiodata(data))
        // .catch((error) => console.error('Error fetching biodata:', error));
    }, [id]);

    console.log(biodatas);
    
    if (!biodata) {
        return <div><SingleBioDataDetailsSkeleton/></div>;
    }

    const {
        // _id,
        generalInfo,
        address,
        educationDetails,
        expectedPartner,
        marriageRelatedInfo,
        familyDetails,
        occupationIncome,
        contact,
        personalInfo,
        pledge,
    } = biodata;

    const presentYear = new Date().getFullYear();
    const birthYear = generalInfo?.birthYear?.split?.('-')[0];
    const age = birthYear ? presentYear - parseInt(birthYear) : 'N/A';


    const formattedBiodata = {
        general: [
            { label: 'Biodata No', value: `AIL-${generalInfo.bioDataId}` },
            { label: 'Type', value: generalInfo.biodataType },
            { label: 'Status', value: generalInfo.maritalStatus },
            { label: 'Birth Year', value: generalInfo.birthYear },
            { label: 'Age', value: age },
            { label: 'Height', value: generalInfo.height },
            { label: 'Complexion', value: generalInfo.complexion },
            { label: 'Weight', value: generalInfo.weight || 'N/A' },
            { label: 'Blood Group', value: generalInfo.bloodGroup || 'N/A' },
            { label: 'Nationality', value: generalInfo.nationality || 'Bangladeshi' },
        ],
        address: [
            { label: 'Permanent Address', value: address.permanentAddress },
            { label: 'Permanent Area', value: address.permanentArea },
            { label: 'Present Address', value: address.presentAddress },
            { label: 'Present Area', value: address.presentArea },
            { label: 'Where did you grow up?', value: address.grewUp },
        ],
        educationDetails: [
            { label: 'Education Method', value: educationDetails.educationMethod },
            { label: 'Highest Qualification', value: educationDetails.highestQualification },
            { label: 'SSC Passing Year', value: educationDetails.sscYear },
            { label: 'SSC Group', value: educationDetails.sscGroup },
            { label: 'SSC Result', value: educationDetails.sscResult },
            { label: 'Post SSC Medium', value: educationDetails.postSscMedium },
            { label: 'HSC Passing Year', value: educationDetails.hscYear },
            { label: 'HSC Group', value: educationDetails.hscGroup },
            { label: 'HSC Result', value: educationDetails.hscResult },
            { label: 'Graduation Subject', value: educationDetails.graduationSubject },
            { label: 'Graduation Year', value: educationDetails.graduationYear },
            { label: 'Institution', value: educationDetails.institution },
            { label: 'Other Qualifications', value: educationDetails.otherQualifications },
            { label: 'Islamic Titles', value: educationDetails.islamicTitles },
        ],
        familyDetails: [
            { label: 'Father’s Name', value: familyDetails.fatherName },
            { label: 'Father Alive?', value: familyDetails.fatherAlive ? 'Yes' : 'No' },
            { label: 'Father’s Profession', value: familyDetails.fatherProfession },
            { label: 'Mother’s Name', value: familyDetails.motherName },
            { label: 'Mother Alive?', value: familyDetails.motherAlive ? 'Yes' : 'No' },
            { label: 'Mother’s Profession', value: familyDetails.motherProfession },
            { label: 'Number of Brothers', value: familyDetails.brothersCount },
            { label: 'Brothers Info', value: familyDetails.brothersInfo },
            { label: 'Number of Sisters', value: familyDetails.sistersCount },
            { label: 'Uncles’ Profession', value: familyDetails.unclesProfession },
            { label: 'Family Financial Status', value: familyDetails.financialStatus },
            { label: 'Financial Description', value: familyDetails.financialDescription },
            { label: 'Religious Condition', value: familyDetails.religiousCondition },
        ],
        personalInfo: [
            { label: 'Hijab since', value: personalInfo.hijabSince },
            { label: '5-time prayer', value: personalInfo.prayer },
            { label: 'Qur’an understanding', value: personalInfo.quranUnderstanding },
            { label: 'Follows Manhaj', value: personalInfo.manhaj },
            { label: 'Music/movies', value: personalInfo.musicMovies },
            { label: 'Medical Issues', value: personalInfo.medicalIssues },
            { label: 'Special Need?', value: personalInfo.specialNeeds },
            { label: 'Clothes Outside', value: personalInfo.clothesOutside },
            { label: 'Niqab Since', value: personalInfo.niqabSince },
            { label: 'Beard Since', value: personalInfo.BeardSince },
            { label: 'Prayer Routine', value: personalInfo.prayerRoutine },
            { label: 'Missed Prayers', value: personalInfo.missedPrayers },
            { label: 'Mahram Compliance', value: personalInfo.mahramCompliance },
            { label: 'Qur’an Recitation', value: personalInfo.quranRecitation },
            { label: 'Fiqh', value: personalInfo.fiqh },
            { label: 'Entertainment', value: personalInfo.entertainment },
            { label: 'Mental/Physical Issues', value: personalInfo.mentalPhysical },
            { label: 'Deen Work', value: personalInfo.deenWork },
            { label: 'Shrine Belief', value: personalInfo.shrineBelief },
            { label: 'Islamic Books', value: personalInfo.islamicBooks },
            { label: 'Islamic Scholars', value: personalInfo.islamicScholars },
            { label: 'Applicable Category', value: personalInfo.applicableCategory },
            { label: 'Hobbies', value: personalInfo.hobbies },
            { label: 'Mobile Number', value: personalInfo.mobileNumber },
          ],          
        occupationIncome: [
            { label: 'Occupation', value: occupationIncome.occupation },
            { label: 'Description of your Profession', value: occupationIncome.professionDescription },
            { label: 'Monthly Income', value: occupationIncome.monthlyIncome || 'N/A' },
        ],
        marriageRelatedInfo: [
            { label: 'Guardian Aware?', value: marriageRelatedInfo.guardiansConsent },
            { label: 'Willing to work?', value: marriageRelatedInfo.willingToWork },
            { label: 'Want to continue Study After marriage', value: marriageRelatedInfo.continueStudies },
            { label: 'Want to continue job after Marriage', value: marriageRelatedInfo.continueJob },
            { label: 'Marriage Purpose', value: marriageRelatedInfo.marriageThoughts },
        ],
        expectedPartner: [
            // { label: 'Age', value: expectedPartner.age },
            { label: 'Complexion', value: expectedPartner.complexion },
            { label: 'Height', value: expectedPartner.height },
            { label: 'Profession', value: expectedPartner.education },
            { label: 'Profession', value: expectedPartner.profession },
            { label: 'Marital Status', value: expectedPartner.maritalStatus },
            { label: 'Financial', value: expectedPartner.financialCondition },
            { label: 'District', value: expectedPartner.district },
            { label: 'Expectation of Qualities', value: expectedPartner.expectedQualities },
        ],
        pledge: [
            { label: 'parentConsent', value: pledge.parentConsent },
            { label: 'ALl truth', value: pledge.truthPledge },
            { label: 'Is that all true', value: pledge.falseInfoAgreement },
        ],
        contact: [
            { label: 'Bride Name', value: contact.brideName },
            { label: 'Guardian Mobile', value: contact.guardianMobile },
            { label: 'Guardian Relation', value: contact.guardianRelation },
            { label: 'Email', value: contact.email },
        ],
    };
    console.log(formattedBiodata.general[0].value);

    return (
        <div>
            <div className=" w-full md:w-3/4 md:mx-auto py-28 md:px-8 px-4 ">
                <h1 className="text-2xl font-bold mb-8 capitalize">{contact.brideName}'s Biodata</h1>
                <div className='md:grid md:grid-cols-3 gap-20 block'>
                    <div className=''>
                        <SidebarCard
                            generalInfo={generalInfo}
                            
                        />
                    </div>
                    <div className='col-span-2'>

                        {/* <Section title="General Info" data={formattedBiodata.general} /> */}
                        <Section title="Address" data={formattedBiodata.address} />
                        <Section title="Educational Qualifications" data={formattedBiodata.educationDetails} />
                        <Section title="Family Information" data={formattedBiodata.familyDetails} />
                        <Section title="Personal Information" data={formattedBiodata.personalInfo} />
                        <Section title="Occupation" data={formattedBiodata.occupationIncome} />
                        <Section title="Marriage Related Info" data={formattedBiodata.marriageRelatedInfo} />
                        <Section title="Expected Life Partner" data={formattedBiodata.expectedPartner} />
                        <Section title="Pledge" data={formattedBiodata.pledge} />
                        <Section title="Contact" data={formattedBiodata.contact} />
                        <div className="mt-6 text-center">
                        </div>
                        <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
                            View Contact Info
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBioDataDetails;