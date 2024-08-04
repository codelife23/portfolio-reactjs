import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './translations';
import { getValueFromLocalStorage } from 'helpers';
import { STORAGE_LANGUAGE_CODE } from 'variables';

const languageFromStorage = getValueFromLocalStorage(STORAGE_LANGUAGE_CODE);

const language = languageFromStorage
  ? languageFromStorage
  : window.navigator.language === 'pl-PL'
  ? 'pl-PL'
  : 'en-EN';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: language,
    fallbackLng: 'en-EN',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
