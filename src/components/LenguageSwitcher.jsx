import React from 'react';
import { useTranslation } from 'react-i18next';

const LenguageSwitcher = ({idioma,setIdioma}) => {
  const { i18n,t } = useTranslation();
  setIdioma(i18n.language);
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
      className="absolute z-100 top-1 right-1 m-1 appearance-none bg-white border border-gray-300 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 z-100"
    >
      <option value="es">{t('esp')}</option>
      <option value="en">{t('ing')}</option>
      <option value="ca">{t('cat')}</option>
    </select>
  );
};

export default LenguageSwitcher;
