import i18n from 'i18next';
// import { reactI18nextModule } from 'react-i18next';
// import locale from 'react-native-locale-detector';
import { AsyncStorage } from 'react-native';
import { initReactI18next } from "react-i18next"



import de from './de.json';
import fe from './fe.json';
import en from './en.json';
import ar from './ar.json';

const STORAGE_KEY = '@APP:languageCode';


// creating a language detection plugin using expo
// http://i18n.com/docs/ownplugin/#languagedetector
const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async (callback) => {
    const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
    const lng = (savedDataJSON) ? savedDataJSON : null;
    const selectLanguage = lng || "en";
    console.log('detect - selectLanguage:===========', selectLanguage);
    callback(selectLanguage);
  },
  cacheUserLanguage: () => { }
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: 'ar',
    fallbackLng: 'en-US',
    resources: { en, fe, de, ar },

    // have a common namespace used around the full app
    ns: ['translation'],
    defaultNS: 'translation',

    debug: true,

    //   cache: {
    //  enabled: true
    // },

    interpolation: {
      escapeValue: false, // not needed for react as it does escape per default to prevent xss!
    }
  });


export default i18n;
