import React from 'react';
import { useTranslation } from 'react-i18next';

const LenguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <select
      onChange={handleLanguageChange}
      value={i18n.language}
      className="absolute top-0 right-0 appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 z-100"
    >
      <option value="es">Español</option>
      <option value="en">English</option>
      <option value="ca">Català</option>
    </select>
  );
};

export default LenguageSwitcher;
