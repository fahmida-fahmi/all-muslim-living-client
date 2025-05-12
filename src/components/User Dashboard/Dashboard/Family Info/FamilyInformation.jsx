import React from 'react';

const FamilyInformation = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fields = [
    { label: "Father's Name", name: "fatherName", type: "text", required: true },
    {
      label: "Is your father alive?",
      name: "fatherAlive",
      type: "select",
      required: true,
      options: ['Yes', 'No'],
    },
    {
      label: "Description of father's profession",
      name: "fatherProfession",
      type: "text",
      required: true,
    },
    { label: "Mother's Name", name: "motherName", type: "text", required: true },
    {
      label: "Is your mother alive?",
      name: "motherAlive",
      type: "select",
      required: true,
      options: ['Yes', 'No'],
    },
    {
      label: "Description of mother's profession",
      name: "motherProfession",
      type: "text",
      required: true,
    },
    {
      label: "How many brothers do you have?",
      name: "brothersCount",
      type: "select",
      required: true,
      options: ['0', '1', '2', '3', 'More'],
    },
    {
      label: "Brothers information",
      name: "brothersInfo",
      type: "textarea",
      required: true,
    },
    {
      label: "How many sisters do you have?",
      name: "sistersCount",
      type: "select",
      required: true,
      options: ['No sister', '1', '2', '3', 'More'],
    },
    {
      label: "Profession of uncles",
      name: "unclesProfession",
      type: "textarea",
      required: false,
    },
    {
      label: "Family financial status",
      name: "financialStatus",
      type: "select",
      required: true,
      options: ['Lower class', 'Middle class', 'Upper middle class', 'Rich'],
    },
    {
      label: "Description of financial condition",
      name: "financialDescription",
      type: "textarea",
      required: true,
    },
    {
      label: "How is your family's religious condition?",
      name: "religiousCondition",
      type: "textarea",
      required: true,
    },
  ];

  return (
    <div className="w-3/4 text-left p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 border-b pb-2">Family Information</h2>

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

export default FamilyInformation;
