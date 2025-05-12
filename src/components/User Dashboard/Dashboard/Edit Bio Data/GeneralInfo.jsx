import React from 'react';

const GeneralInfo = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fields = [
    {
      label: "Biodata Type",
      name: "biodataType",
      type: "select",
      options: ["Female", "Male"],
      required: true,
    },
    {
      label: "Marital Status",
      name: "maritalStatus",
      type: "select",
      options: [ "Never Married",
        "Divorced",
        "Widowed",
        "Separated",
        "Awaiting Divorce",
        "Annulled",
        "Married"],
      required: true,
    },
    {
      label: "Birth Year",
      name: "birthYear",
      type: "date",
      required: true,
    },
    {
      label: "Height",
      name: "height",
      type: "select",
      options: ["less than 4'0\"",
        "4'0\"",
        "4'1\"",
        "4'2\"",
        "4'3\"",
        "4'4\"",
        "4'5\"",
        "4'6\"",
        "4'7\"",
        "4'8\"",
        "4'9\"",
        "4'10\"",
        "4'11\"",
        "5'0\"",
        "5'1\"",
        "5'2\"",
        "5'3\"",
        "5'4\"",
        "5'5\"",
        "5'6\"",
        "5'7\"",
        "5'8\"",
        "5'9\"",
        "5'10\"",
        "5'11\"",
        "6'0\"",
        "6'1\"",
        "6'2\"",
        "6'3\"",
        "6'4\"",
        "6'5\"",
        "6'6\"",
        "6'7\"",
        "6'8\"",
        "6'9\"",
        "6'10\"",
        "6'11\"",
        "7'0\"",
        "More than 7'0\""],

      required: true,
    },
    {
      label: "Complexion",
      name: "complexion",
      type: "select",
      options: ["Very Fair", "Fair", "Light Brown", "Dark"],
      required: true,
    },
    {
      label: "Weight",
      name: "weight",
      type: "select",
      options: [
        "Under 30 kg",
        "30 kg",
        "32 kg",
        "34 kg",
        "36 kg",
        "38 kg",
        "40 kg",
        "42 kg",
        "44 kg",
        "46 kg",
        "48 kg",
        "50 kg",
        "52 kg",
        "54 kg",
        "56 kg",
        "58 kg",
        "60 kg",
        "62 kg",
        "64 kg",
        "66 kg",
        "68 kg",
        "70 kg",
        "72 kg",
        "74 kg",
        "76 kg",
        "78 kg",
        "80 kg",
        "82 kg",
        "84 kg",
        "86 kg",
        "88 kg",
        "90 kg",
        "92 kg",
        "94 kg",
        "96 kg",
        "98 kg",
        "100 kg",
        "105 kg",
        "110 kg",
        "115 kg",
        "120 kg",
        "More than 120 kg"
      ],
      required: true,
    },
    {
      label: "Blood Group",
      name: "bloodGroup",
      type: "select",
      options: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      required: true,
    },
    {
      label: "Nationality",
      name: "nationality",
      type: "select",
      options: ["Bangladeshi", "Other"],
      required: true,
    },
  ];

  return (
    <div className="w-3/4 text-left p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 border-b pb-2">General Info</h2>

      {fields.map((field, index) => (
        <div key={index} className="mb-5">
          <label className="block text-gray-800 font-medium mb-1">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          {field.type === "select" ? (
            <select
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
              required={field.required}
            >
              <option value="">Select</option>
              {field.options.map((option, idx) => (
                <option key={idx} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
              required={field.required}
            />
          )}
        </div>
      ))}

      <p className="text-sm text-purple-700 mt-2">
        Please provide the actual date of birth. Falsifying or providing an inaccurate age in the birth certificate or national identity card will not be accepted.
      </p>
    </div>
  );
};

export default GeneralInfo;
