import React from 'react';

const Pledge = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fields = [
    {
      label: 'Do your parents know that you are submitting biodata to the OrdhekDeen.com website?',
      name: 'parentConsent',
      options: ['Yes', 'No'],
      required: true,
    },
    {
      label: 'By Allah, testify that all the information given is true.',
      name: 'truthPledge',
      options: ['I testify', 'I do not testify'],
      required: true,
    },
    {
      label:
        'If you provide any false information, OrdhekDeen.com will not take any responsibility for the conventional law and the hereafter. Do you agree?',
      name: 'falseInfoAgreement',
      options: ['I agree', 'I disagree'],
      required: true,
    },
  ];

  return (
    <div className="w-3/4 text-left p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 border-b pb-2">Pledge</h2>

      {fields.map((field, index) => (
        <div key={index} className="mb-6">
          <label className="block text-gray-800 font-medium mb-2">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          <select
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md"
            required={field.required}
          >
            <option value="">Select</option>
            {field.options.map((option, idx) => (
              <option key={idx} value={option.toLowerCase().replace(/\s+/g, '_')}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Pledge;
