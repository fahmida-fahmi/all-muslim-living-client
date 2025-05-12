import React from 'react';

const PersonalInformation = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fields = [
    {
      label: 'What kind of clothes do you usually wear outside the house?',
      name: 'clothesOutside',
      type: 'text',
      required: true,
    },
    {
      label: 'Since when have you been wearing a veil with a niqab?',
      name: 'niqabSince',
      type: 'text',
      required: true,
    },
    {
      label: 'Since when have you been observing hijab?',
      name: 'hijabSince',
      type: 'text',
      required: false,
    },
    {
      label: 'Since when have you been keeping a beard?',
      name: 'BeardSince',
      type: 'text',
      required: false,
    },
    {
      label: 'Do you pray five times a day? Since when?',
      name: 'prayerRoutine',
      type: 'text',
      required: true,
    },
    {
      label: 'Usually how many times (waqt) a week are your prayers missed (Qaza)?',
      name: 'missedPrayers',
      type: 'text',
      required: true,
    },
    {
      label: 'Do you comply with mahram / non-mahram?',
      name: 'mahramCompliance',
      type: 'text',
      required: true,
    },
    {
      label: 'Are you able to recite the Quran correctly?',
      name: 'quranRecitation',
      type: 'text',
      required: true,
    },
    {
      label: 'How much do you understand the Qur’an?',
      name: 'quranUnderstanding',
      type: 'text',
      required: false,
    },
    {
      label: 'Which Fiqh do you follow?',
      name: 'fiqh',
      type: 'select',
      required: true,
      options: ['Hanafi', 'Shafi\'i', 'Maliki', 'Hanbali', 'Other'],
    },
    {
      label: 'Do you follow any particular Manhaj?',
      name: 'manhaj',
      type: 'text',
      required: false,
    },
    {
      label: 'Do you watch or listen to dramas / movies / serials / songs?',
      name: 'entertainment',
      type: 'text',
      required: true,
    },
    {
      label: 'Do you engage in music or movies?',
      name: 'musicMovies',
      type: 'text',
      required: false,
    },
    {
      label: 'Do you have any mental or physical diseases?',
      name: 'mentalPhysical',
      type: 'text',
      required: true,
    },
    {
      label: 'Do you have any medical issues?',
      name: 'medicalIssues',
      type: 'text',
      required: false,
    },
    {
      label: 'Do you have any special needs?',
      name: 'specialNeeds',
      type: 'text',
      required: false,
    },
    {
      label: 'Are you involved in any special work of deen?',
      name: 'deenWork',
      type: 'text',
      required: true,
    },
    {
      label: 'What are your ideas or beliefs about the shrine (Mazar)?',
      name: 'shrineBelief',
      type: 'textarea',
      required: true,
    },
    {
      label: 'Write the names of at least 3 Islamic books you have read',
      name: 'islamicBooks',
      type: 'textarea',
      required: true,
    },
    {
      label: 'Write the names of at least 3 Islamic scholars of your choice',
      name: 'islamicScholars',
      type: 'textarea',
      required: true,
    },
    {
      label: 'Which category do you think applies to you?',
      name: 'applicableCategory',
      type: 'text',
      required: true,
    },
    {
      label: 'What are your hobbies?',
      name: 'hobbies',
      type: 'textarea',
      required: false,
    },
    {
      label: 'Your personal mobile number',
      name: 'mobileNumber',
      type: 'number',
      required: true,
    },
  ];
  

  return (
    <div className="w-3/4 text-left p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 border-b pb-2">Personal Information</h2>

      {fields.map((field, index) => (
        <div key={index} className="mb-5">
          <label className="block text-gray-800 font-medium mb-1">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>

          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
              rows={4}
              required={field.required}
            />
          ) : field.type === 'select' ? (
            <select
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
              required={field.required}
            >
              <option value="">Select</option>
              {field.options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
              required={field.required}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default PersonalInformation;
