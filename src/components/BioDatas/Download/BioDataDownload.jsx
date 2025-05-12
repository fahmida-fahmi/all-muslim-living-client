import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Section = ({ title, data }) => (
    <div className="mb-4 border p-4 px-8 border-t-4 border-t-emerald-800 rounded-lg bg-white shadow-sm">
        <h2 className="text-lg font-semibold border-b mb-2">{title}</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
            {data.map(({ label, value }, idx) => (
                <React.Fragment key={idx}>
                    <span className="font-medium py-1">{label}</span>
                    <span className="py-1">{value}</span>
                </React.Fragment>
            ))}
        </div>
    </div>
);

const BiodataDownload = () => {
    const { id } = useParams();
    const [biodata, setBiodata] = useState(null);

    useEffect(() => {
        fetch(`https://all-muslim-living-server.onrender.com/biodatas/${id}`)
            .then((response) => response.json())
            .then((data) => setBiodata(data));
    }, [id]);

    if (!biodata) {
        return <div className="text-center py-20 text-gray-500">Loading...</div>;
    }

    const {
        generalInfo, address, educationDetails, expectedPartner,
        marriageRelatedInfo, familyDetails, occupationIncome,
        contact, personalInfo, pledge,
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
        ],
        occupationIncome: [
            { label: 'Occupation', value: occupationIncome.occupation },
            { label: 'Profession Description', value: occupationIncome.professionDescription },
            { label: 'Monthly Income', value: occupationIncome.monthlyIncome || 'N/A' },
        ],
        marriageRelatedInfo: [
            { label: 'Guardian Aware?', value: marriageRelatedInfo.guardiansConsent },
            { label: 'Willing to work?', value: marriageRelatedInfo.willingToWork },
            { label: 'Study After Marriage?', value: marriageRelatedInfo.continueStudies },
            { label: 'Job After Marriage?', value: marriageRelatedInfo.continueJob },
            { label: 'Marriage Purpose', value: marriageRelatedInfo.marriageThoughts },
        ],
        expectedPartner: [
            { label: 'Complexion', value: expectedPartner.complexion },
            { label: 'Height', value: expectedPartner.height },
            { label: 'Education', value: expectedPartner.education },
            { label: 'Profession', value: expectedPartner.profession },
            { label: 'Marital Status', value: expectedPartner.maritalStatus },
            { label: 'Financial', value: expectedPartner.financialCondition },
            { label: 'District', value: expectedPartner.district },
            { label: 'Qualities', value: expectedPartner.expectedQualities },
        ],
        pledge: [
            { label: 'Parent Consent', value: pledge.parentConsent },
            { label: 'All Truth', value: pledge.truthPledge },
            { label: 'Agreement on Truth', value: pledge.falseInfoAgreement },
        ],
        contact: [
            { label: 'Bride Name', value: contact.brideName },
            { label: 'Guardian Mobile', value: contact.guardianMobile },
            { label: 'Guardian Relation', value: contact.guardianRelation },
            { label: 'Email', value: contact.email },
        ],
    };

    return (
        <div className="max-w-5xl mx-auto py-16 px-6 print:px-0 print:py-4">
            
            <h1 className="text-2xl font-bold text-center mb-10">{contact.brideName}'s Biodata</h1>
            <Section title="General Info" data={formattedBiodata.general} />
            <Section title="Address" data={formattedBiodata.address} />
            <Section title="Educational Qualifications" data={formattedBiodata.educationDetails} />
            <Section title="Family Information" data={formattedBiodata.familyDetails} />
            <Section title="Personal Information" data={formattedBiodata.personalInfo} />
            <Section title="Occupation" data={formattedBiodata.occupationIncome} />
            <Section title="Marriage Related Info" data={formattedBiodata.marriageRelatedInfo} />
            <Section title="Expected Life Partner" data={formattedBiodata.expectedPartner} />
            <Section title="Pledge" data={formattedBiodata.pledge} />
            <Section title="Contact" data={formattedBiodata.contact} />
        </div>
    );
};

export default BiodataDownload;
