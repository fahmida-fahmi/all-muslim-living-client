import React from 'react';

const Address = ({ formData, setFormData }) => {
  // if (!formData?.address) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    const updatedAddress = {
      ...formData.address,
      [name]: newValue,
    };

    // Handle sameAsPermanent logic
    if (name === 'sameAsPermanent' && checked) {
      updatedAddress.presentAddress = formData.address.permanentAddress;
      updatedAddress.presentArea = formData.address.permanentArea;
    }

    // If user edits permanent address while "sameAsPermanent" is checked, update present too
    if (formData.address?.sameAsPermanent && (name === 'permanentAddress' || name === 'permanentArea')) {
      if (name === 'permanentAddress') {
        updatedAddress.presentAddress = value;
      }
      if (name === 'permanentArea') {
        updatedAddress.presentArea = value;
      }
    }

    setFormData({
      ...formData,
      address: updatedAddress,
    });
    // console.log(updatedAddress);
  };

  const fields = [
    {
      label: 'Permanent Address',
      name: 'permanentAddress',
      type: 'text',
      required: true,
    },
    {
      label: 'Present Address',
      name: 'permanentArea',
      type: 'text',
      required: true,
      helpText: "Write the name of the village or area without entering the house number. Example- Mirpur 10, Baghmara.",
    },
    {
      label: 'Present Address',
      name: 'presentAddress',
      type: 'text',
      required: true,
      isConditional: true,
    },
    {
      label: 'Present Area',
      name: 'presentArea',
      type: 'text',
      required: true,
      isConditional: true,
      helpText: "Write the name of the village or area without entering the house number. Example- Mirpur 10, Baghmara.",
    },
    {
      label: 'Where did you grow up?',
      name: 'grewUp',
      type: 'text',
      required: true,
    },
  ];

  return (
    <div className="w-3/4 text-left p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 border-b pb-2">Address</h2>

      {fields.map((field, index) => {
        // if (field.isConditional && formData.address?.sameAsPermanent) return null;

        return (
          <div key={index} className="mb-5">
            {/* {field.label && ( */}
              <label htmlFor={field.name} className="block text-gray-800 font-medium mb-1">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
            {/* )} */}

            <input
              type="text"
              // id={field.name}
              name={field.name}
              value={formData.address?.[field.name] || ''}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md"
              required={field.required}
              placeholder={
                field.name === 'presentAddress'
                  ? 'Select your Location'
                  : field.label || 'e.g. Mirpur 10, Baghmara'
              }
            />

            {field.helpText && (
              <p className="text-sm text-purple-600 mt-1">{field.helpText}</p>
            )}
          </div>
        );
      })}

      <div className="mb-5">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="sameAsPermanent"
            checked={formData.address?.sameAsPermanent || false}
            onChange={handleChange}
            className="mr-2"
          />
          <span className="text-gray-700">Same as permanent address</span>
        </div>
      </div>
    </div>
  );
};

export default Address;
