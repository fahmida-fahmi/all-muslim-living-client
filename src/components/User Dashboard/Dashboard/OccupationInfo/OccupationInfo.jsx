import React from 'react';

const OccupationInfo = ({ formData, setFormData }) => {

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fields = [
    {
      label: 'Occupation',
      name: 'occupation',
      type: 'select',
      options: [
        'Student',
        'Government Job',
        'Private Job',
        'Engineer',
        'Doctor',
        'Teacher',
        'Freelancer',
        'Business',
        'Unemployed',
        'Other',
      ],
      required: true,
    },
    {
      label: 'Description of Profession',
      name: 'professionDescription',
      type: 'textarea',
      required: true,
      hint:
        'You may write where your working place is, which company you are working in, whether your earnings are halal or not, etc.',
    },
    {
      label: 'Monthly Income',
      name: 'monthlyIncome',
      type: 'text',
      required: false,
      placeholder: 'e.g., 20,000 Taka',
    },
  ];

  return (
    <div className="w-3/4 text-left p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 border-b pb-2">
        Occupational Information
      </h2>

      {fields.map((field, index) => (
        <div key={index} className="mb-5">
          <label className="block text-gray-800 font-medium mb-1">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>

          {field.type === 'select' ? (
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
          ) : field.type === 'textarea' ? (
            <>
              <textarea
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md"
                rows={5}
                required={field.required}
              />
              {field.hint && <p className="text-sm text-purple-600 mt-1">{field.hint}</p>}
            </>
          ) : (
            <input
              type="text"
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
              required={field.required}
              placeholder={field.placeholder || ''}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default OccupationInfo;
