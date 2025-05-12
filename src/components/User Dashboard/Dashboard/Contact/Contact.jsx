import React from 'react';
import useUsers from '../../../Hooks/useUsers';

const Contact = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [userData] = useUsers()
  console.log(userData.email)

  const fields = [
    {
      label: "Bride's name",
      name: 'brideName',
      type: 'text',
      placeholder: 'Enter full name',
      required: true,
    },
    {
      label: "Guardian's mobile number",
      name: 'guardianMobile',
      type: 'text',
      placeholder: '01700-000000',
      required: true,
      info: 'This number will be given if anyone wants to contact your guardian. After verifying by calling this number, the biodata will be approved. If you write the number of your friend, colleague, cousin, or yourself here, biodata will be permanently banned.',
    },
    {
      label: 'Relationship with guardian',
      name: 'guardianRelation',
      type: 'text',
      placeholder: 'Father',
      required: true,
    },
    {
      label: 'E-mail to receive biodata',
      name: 'email',
      type: 'email',
      // placeholder: 'your-email@gmail.com',
      value: userData?.email,
      required: true,
      info: 'To avoid unwanted incidents, enter the guardian\'s email address if possible.',
    },
  ];

  return (
    <div className="w-3/4 text-left p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 border-b pb-2">Contact</h2>

      {fields.map((field, index) => (
        <div key={index} className="mb-6">
          <label className="block text-gray-800 font-medium mb-2">
            {field.label} <span className="text-red-500">{field.required && '*'}</span>
          </label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md"
            placeholder={field.placeholder}
            required={field.required}
          />
          {field.info && <p className="text-sm text-purple-600 mt-2">{field.info}</p>}
        </div>
      ))}
    </div>
  );
};

export default Contact;
