import React from 'react';

const MarriageInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fields = [
    {
      label: 'Do your guardians agree to your marriage?',
      name: 'guardiansConsent',
      type: 'text',
      required: true,
    },
    {
      label: 'Are you willing to do any job after marriage?',
      name: 'willingToWork',
      type: 'text',
      required: true,
    },
    {
      label: 'Would you like to continue your studies after marriage?',
      name: 'continueStudies',
      type: 'text',
      required: true,
    },
    {
      label: 'Would you like to continue your job after marriage?',
      name: 'continueJob',
      type: 'text',
      required: false,
      hint: 'Leave empty if you are not employed.',
    },
    {
      label: 'Why are you getting married? What are your thoughts on marriage?',
      name: 'marriageThoughts',
      type: 'textarea',
      required: true,
    },
  ];

  return (
    <div className="w-3/4 text-left p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 border-b pb-2">
        Marriage Related Information
      </h2>

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
              rows={5}
              required={field.required}
            />
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

          {field.hint && <p className="text-sm text-purple-600 mt-1">{field.hint}</p>}
        </div>
      ))}
    </div>
  );
};

export default MarriageInfo;
