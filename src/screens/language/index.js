import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { theme } from '../../constants/theme';
import Header from '../../components/header';
import { useTranslation } from 'react-i18next';
import { AsyncStorage } from 'react-native'

// import i18n from 'i18next';
import i18n from '../../I18n'

const App = (props) => {

  const { t } = useTranslation();
  const asyncStorage = async (lang) => {
    console.log("STORED")
    try {
      await AsyncStorage.setItem('@APP:languageCode', lang);
    } catch (error) {
      console.log(` Hi Errorrrr : ${error}`);
    }


  }
  const getLanguage = (language) => {
    return language === 0 ? (i18n.changeLanguage('en'), asyncStorage()) : language === 1 ? (i18n.changeLanguage('fe'), asyncStorage()) : language === 2 ? (i18n.changeLanguage('de'), asyncStorage()) : language === 3 ? (i18n.changeLanguage('ar'), asyncStorage()) : null

    // if (language === 0) {
    //   return i18n.changeLanguage('en')
    // }
    // else if (language === 1) {
    //   return i18n.changeLanguage('fe')

    // }
    // else if (language === 2) {
    //   return i18n.changeLanguage('de')
    // }
    // else if (language === 3) {
    //   return i18n.changeLanguage('ar')
    // }
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.primaryColor,
      }}>
      <Header
        text={true}
        isTransparent={true}
        leftArrow={true}
        isVisibleIcon={true}
        navigation={props.navigation}
        //   drawerIcon={true}
        text={t('Langauges')}
        textColor={'white'}
      />
      <View style={{ flex: 1 }}>
        {['English', 'French', 'German', 'Arabic'].map((item, i) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                flexDirection: 'row',
                paddingVertical: 20,
                alignItems: 'center',
                paddingLeft: 20,
              }}

              onPress={() => getLanguage(i)}
            >
              <View
                style={{
                  height: 16,
                  width: 16,
                  borderRadius: 16,
                  borderWidth: 1,
                  backgroundColor: 'white',
                }}></View>
              <Text style={{ color: 'white', fontSize: 16, marginLeft: 10 }}>
                {t(item)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
export default App;
