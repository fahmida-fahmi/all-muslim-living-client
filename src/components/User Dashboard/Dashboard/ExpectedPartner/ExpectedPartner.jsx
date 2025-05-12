import React from 'react';

const ExpectedPartner = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSliderChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      age: parseInt(e.target.value),
    }));
  };

  const fields = [
    {
      label: 'Age',
      name: 'age',
      type: 'slider',
      required: true,
    },
    {
      label: 'Complexion',
      name: 'complexion',
      type: 'text',
      required: true,
      helpText: "Don't write 'Any' or 'Adjustable'.",
    },
    {
      label: 'Height',
      name: 'height',
      type: 'text',
      required: true,
      helpText: "Don't write 'Any' or 'Adjustable'.",
    },
    {
      label: 'Educational Qualification',
      name: 'education',
      type: 'text',
      required: true,
    },
    {
      label: 'District',
      name: 'district',
      type: 'text',
      required: true,
      helpText: "Do not write 'Any district'. Mention specific districts in consultation with family.",
    },
    {
      label: 'Marital Status',
      name: 'maritalStatus',
      type: 'text',
      required: true,
    },
    {
      label: 'Profession',
      name: 'profession',
      type: 'text',
      required: true,
      helpText: "Don't write 'Any', 'Adjustable', or 'Any halal occupation'.",
    },
    {
      label: 'Financial Condition',
      name: 'financialCondition',
      type: 'text',
      required: true,
      helpText: "Be specific rather than 'any'.",
    },
    {
      label: 'Expected qualities or attributes of your life partner',
      name: 'expectedQualities',
      type: 'textarea',
      required: true,
      helpText: 'You may write your expectations in detail. Also, you may mention if there is any special condition.',
    },
  ];

  return (
    <div className="w-3/4 text-left p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 border-b pb-2">Expected Life Partner</h2>

      {fields.map((field, index) => (
        <div key={index} className="mb-5">
          <label htmlFor={field.name} className="block text-gray-800 font-medium mb-1">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>

          {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
              rows={5}
              required={field.required}
            />
          ) : field.type === 'slider' ? (
            <div className="flex items-center space-x-4">
              <span>{formData.age}</span>
              <input
                type="range"
                min="10"
                max="90"
                value={formData.age}
                onChange={handleSliderChange}
                className="w-full accent-purple-700"
              />
              <span>70</span>
            </div>
          ) : (
            <input
              type="text"
              id={field.name}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
              required={field.required}
            />
          )}

          {field.helpText && (
            <p className="text-sm text-purple-600 mt-1">
              {field.helpText.split(/(?=<strong>|<\/strong>)/g).map((part, i) => (
                <span key={i} dangerouslySetInnerHTML={{ __html: part }} />
              ))}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpectedPartner;
