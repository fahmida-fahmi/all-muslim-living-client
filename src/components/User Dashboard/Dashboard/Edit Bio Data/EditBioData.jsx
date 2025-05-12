import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GeneralInfo from './GeneralInfo';
import Address from '../Address/Address';
import EducationalQualification from '../Education/EducationalQualification';
import FamilyInformation from '../Family Info/FamilyInformation';
import PersonalInformation from '../PersonalInfo/PersonalInfo';
import OccupationInfo from '../OccupationInfo/OccupationInfo';
import MarriageInfo from '../MarriageInfo/MarrigeInfo';
import ExpectedPartner from '../ExpectedPartner/ExpectedPartner';
import Pledge from '../Pledge/Pledge';
import Contact from '../Contact/Contact';
import { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function EditBioData() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  const [formData, setFormData] = useState({
    generalInfo: {
      bioDataId: '',
      biodataType: '',
      maritalStatus: '',
      birthYear: '',
      height: '',
      complexion: '',
      weight: '',
      bloodGroup: '',
      nationality: '',
    },
    address: {
      permanentAddress: '',
      permanentArea: '',
      presentAddress: '',
      presentArea: '',
      grewUp: '',
      sameAsPermanent: true,
    },
    educationDetails: {
      educationMethod: '',
      highestQualification: '',
      sscYear: '',
      sscGroup: '',
      sscResult: '',
      postSscMedium: '',
      hscYear: '',
      hscGroup: '',
      hscResult: '',
      graduationSubject: '',
      institution: '',
      graduationYear: '',
      otherQualifications: '',
      islamicTitles: '',
    },
    expectedPartner: {
      age: '',
      complexion: '',
      height: '',
      education: '',
      profession: '',
      maritalStatus: '',
      financialCondition: '',
      district: '',
      expectedQualities: '',
    },
    familyDetails: {
      fatherName: '',
      fatherAlive: '',
      fatherProfession: '',
      motherName: '',
      motherAlive: '',
      motherProfession: '',
      brothersCount: '',
      brothersInfo: '',
      sistersCount: '',
      unclesProfession: '',
      financialStatus: '',
      financialDescription: '',
      religiousCondition: '',
    },
    marriageRelatedInfo: {
      guardiansConsent: '',
      willingToWork: '',
      continueStudies: '',
      continueJob: '',
      marriageThoughts: '',
    },
    occupationIncome: {
      occupation: '',
      professionDescription: '',
      monthlyIncome: '',
    },
    pledge: {
      parentConsent: '',
      truthPledge: '',
      falseInfoAgreement: '',
    },
    personalInfo: {
      hijabSince: '',
      prayer: '',
      quranUnderstanding: '',
      manhaj: '',
      musicMovies: '',
      medicalIssues: '',
      specialNeeds: '',
      clothesOutside: '',
      niqabSince: '',
      BeardSince: '',
      prayerRoutine: '',
      missedPrayers: '',
      mahramCompliance: '',
      quranRecitation: '',
      fiqh: '',
      entertainment: '',
      mentalPhysical: '',
      deenWork: '',
      shrineBelief: '',
      islamicBooks: '',
      islamicScholars: '',
      applicableCategory: '',
      hobbies: '',
      mobileNumber: ''

    },
    contact: {
      brideName: '',
      groomName: '',
      guardianMobile: '',
      guardianRelation: '',
      email: '',
    },
  });



  // Submit handler for create or update
  const submitDataToBackend = async () => {
    setIsSubmitting(true);
    try {
      const url = formData.generalInfo.bioDataId
        ? `https://all-muslim-living-server.onrender.com/biodatas/${formData._id}`
        : `https://all-muslim-living-server.onrender.com/biodatas`;

      const method = formData._id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('✅ Data submitted successfully');
      } else {
        console.error('❌ Failed to submit data');
      }
    } catch (error) {
      console.error('🚨 Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (allStepsCompleted()) {
      submitDataToBackend();
    }
  }, [completed]);

  const combinedSteps = [
    {
      label: 'General Info',
      content: (
        <GeneralInfo
          formData={formData.generalInfo}
          setFormData={(updated) =>
            setFormData((prev) => ({
              ...prev,
              generalInfo: { ...prev.generalInfo, ...updated },
            }))
          }
        />
      ),
    },
    {
      label: 'Address',
      content: (
        <Address
          formData={formData.address}
          setFormData={(updated) =>
            setFormData((prev) => ({
              ...prev,
              address: { ...prev.address, ...updated },
            }))
          }
        />
      ),
    },
    {
      label: 'Educational Qualification',
      content: (
        <EducationalQualification
          formData={formData.educationDetails}
          setFormData={(updated) =>
            setFormData((prev) => ({
              ...prev,
              educationDetails: { ...prev.educationDetails, ...updated },
            }))
          }
        />
      ),
    },
    {
      label: 'Family Information',
      content: (
        <FamilyInformation
          formData={formData.familyDetails}
          setFormData={(updated) =>
            setFormData((prev) => ({
              ...prev,
              familyDetails: { ...prev.familyDetails, ...updated },
            }))
          }
        />
      ),
    },
    {
      label: 'Personal Information',
      content: (
        <PersonalInformation
          formData={formData.personalInfo}
          setFormData={(updated) =>
            setFormData((prev) => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, ...updated },
            }))
          }
        />
      ),
    },
    {
      label: 'Occupation Information',
      content: (
        <OccupationInfo
          formData={formData.occupationIncome}
          setFormData={(updated) =>
            setFormData((prev) => ({
              ...prev,
              occupationIncome: { ...prev.occupationIncome, ...updated },
            }))
          }
        />
      ),
    },
    {
      label: 'Marriage Related Information',
      content: (
        <MarriageInfo
          formData={formData.marriageRelatedInfo}
          setFormData={(updated) =>
            setFormData((prev) => ({
              ...prev,
              marriageRelatedInfo: { ...prev.marriageRelatedInfo, ...updated },
            }))
          }
        />
      ),
    },
    {
      label: 'Expected Life Partner',
      content: (
        <ExpectedPartner
          formData={formData.expectedPartner}
          setFormData={(updated) =>
            setFormData((prev) => ({
              ...prev,
              expectedPartner: { ...prev.expectedPartner, ...updated },
            }))
          }
        />
      ),
    },
    {
      label: 'Pledge',
      content: (
        <Pledge
          formData={formData.pledge}
          setFormData={(updated) =>
            setFormData((prev) => ({
              ...prev,
              pledge: { ...prev.pledge, ...updated },
            }))
          }
        />
      ),
    },
    {
      label: 'Contact',
      content: (
        <Contact
          formData={formData.contact}
          setFormData={(updated) =>
            setFormData((prev) => ({
              ...prev,
              contact: { ...prev.contact, ...updated },
            }))
          }
        />
      ),
    },
  ];


  const totalSteps = () => combinedSteps.length;
  const completedSteps = () => Object.keys(completed).length;
  const isLastStep = () => activeStep === totalSteps() - 1;
  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? combinedSteps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleStep = (step) => () => setActiveStep(step);

  const handleComplete = () => {
    setCompleted({ ...completed, [activeStep]: true });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (

    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        width: isMobile ? '100%' : '80%',
        margin: 'auto',
      }}
    >
      {/* Stepper */}
      <Box
        sx={{
          width: isMobile ? '100%' : '25%',
          mt: isMobile ? 2 : 10,
          mb: isMobile ? 2 : 0,
          // overflowX: 'auto',      // Enables horizontal scroll if needed
          whiteSpace: 'nowrap',   // Keeps step buttons in one line
          maxWidth: '100%',
        }}
      >
        <Stepper
          nonLinear
          activeStep={activeStep}
          orientation={isMobile ? 'horizontal' : 'vertical'}
          sx={{
        flexShrink: 0,
        marginLeft: isMobile ? 2 : 2, // Adjust margin for mobile view
      }}
        >
          {combinedSteps.map((step, index) => (
            <Step key={index} completed={completed[index]} sx={{
    px: 0, // padding-left and padding-right = 0
  }}>
              
              <StepButton
                color="inherit"
                onClick={handleStep(index)}
                sx={{
                  paddingRight: 0, // Adjust padding for different screen sizes          // Reduce padding (you can also use px, py, pt, pb
                }}
              >
                <Box sx={{ display: { xs: 'none', md: 'inline' } }}>
                  {step.label}
                </Box>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Step content */}
      <Box
        sx={{
          flex: 1,
          width: isMobile ? '100%' : 'auto',
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
          overflowY: 'auto',
        }}
      >
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              🎉 All steps completed - you're finished!
            </Typography>
            {isSubmitting && <Typography sx={{ color: 'gray' }}>Submitting data...</Typography>}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box>{combinedSteps[activeStep].content}</Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== combinedSteps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Box>
  );
};


