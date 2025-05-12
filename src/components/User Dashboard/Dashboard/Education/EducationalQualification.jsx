import React, { useState } from 'react';

const EducationalQualification = ({ formData, setFormData }) => {


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fields = [
    {
      label: 'Your Education Method',
      name: 'educationMethod',
      type: 'select',
      required: true,
      options: ['General', 'Madrasa'],
    },
    {
      label: 'Highest educational qualification',
      name: 'highestQualification',
      type: 'select',
      required: true,
      options: ['Graduate', 'HSC', 'SSC'],
    },
    {
      label: 'SSC / Dakhil / Equivalent Passing year',
      name: 'sscYear',
      type: 'text',
      required: true,
    },
    {
      label: 'Group (SSC)',
      name: 'sscGroup',
      type: 'select',
      required: true,
      options: ['Science', 'Commerce', 'Arts'],
    },
    {
      label: 'Result (SSC)',
      name: 'sscResult',
      type: 'select',
      required: true,
      options: ['A+ (All Subjects)', 'A', 'B', 'C'],
    },
    {
      label: 'What medium did you study after SSC?',
      name: 'postSscMedium',
      type: 'select',
      required: true,
      options: ['HSC', 'Diploma'],
    },
    {
      label: 'HSC / Alim / Equivalent passing year',
      name: 'hscYear',
      type: 'text',
      required: true,
    },
    {
      label: 'Group (HSC)',
      name: 'hscGroup',
      type: 'select',
      required: true,
      options: ['Science', 'Commerce', 'Arts'],
    },
    {
      label: 'Result (HSC)',
      name: 'hscResult',
      type: 'select',
      required: true,
      options: ['A+', 'A', 'B', 'C'],
    },
    {
      label: 'Graduation study subject',
      name: 'graduationSubject',
      type: 'text',
      required: true,
    },
    {
      label: 'Name of educational institution',
      name: 'institution',
      type: 'text',
      required: true,
    },
    {
      label: 'Graduation passing year',
      name: 'graduationYear',
      type: 'text',
      required: true,
    },
    {
      label: 'Other educational qualifications',
      name: 'otherQualifications',
      type: 'textarea',
      required: false,
    },
    {
      label: 'Islamic educational titles',
      name: 'islamicTitles',
      type: 'text',
      required: false,
    },
  ];

  return (
    <div className="w-3/4 text-left p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 border-b pb-2">Educational Qualifications</h2>

      {fields.map((field, index) => (
        <div key={index} className="mb-5">
          <label className="block text-gray-800 font-medium mb-1">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>

          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
              rows={4}
              required={field.required}
            />
          ) : field.type === 'select' ? (
            <select
              name={field.name}
              value={formData[field.name]}
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
              value={formData[field.name]}
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

export default EducationalQualification;
