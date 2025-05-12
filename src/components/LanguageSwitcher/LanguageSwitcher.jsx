import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-4 mt-4">
      <button onClick={() => handleChange('en')}>English</button>
      <button onClick={() => handleChange('bn')}>বাংলা</button>
    </div>
  );
};

export default LanguageSwitcher;
