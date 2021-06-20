import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import GlobalHeader from '../../components/header';
import {Icon} from 'native-base';
import { useTranslation } from 'react-i18next';
const App = (props) => {
  const {t,i18n}= useTranslation()
  const [ismyState, setmyState] = useState({
    picker2: false,
  });

  const getLanguage = (language)=>{
    if(language === 0){
      console.log("English")
      return i18n.changeLanguage('en')
    }
    else if(language === 1){
      return i18n.changeLanguage('zh')

    }
    else if(language === 2){
      return i18n.changeLanguage('fr')
    }
  }
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView style={{flex: 1, marginTop: 20}}>
      {/* <StatusBar
          animated={true}
          backgroundColor={'transparent'}
          translucent={true}
          barStyle="light-content"
        /> */}
        <GlobalHeader
          backgroundColor={false}
          transparent={false}
          screenText={'Select Language'}
          isBack={true}
          navigation={props.navigation}
        />
     
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: '35%',
              // backgroundColor: 'pink',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 1,
                lineHeight: 25,
                paddingBottom: 20,
              }}>
              {t("Please Select Language")}
            </Text>
          </View>
          {/* ========== Picker ========== */}

          <View
            style={{
              height: '50%',
              //  backgroundColor: 'teal'
            }}>
            <ModalDropdown
              // options={true}
              renderRightComponent={() => (
                <Icon
                  name={ismyState.picker2 ? 'up' : 'down'}
                  type={'AntDesign'}
                  style={{fontSize: 13, color: '#FFF'}}
                />
              )}
              style={{
                width: '100%',
                borderWidth: 1,
                borderColor: '#F6931B',
                height: 40,
                backgroundColor: 'transparent',
                justifyContent: 'center',
                paddingLeft: 15,
                borderRadius: 5,
                // marginTop: 8,
              }}
              defaultValue="Select Language"
              textStyle={{
                letterSpacing: 1,
                width: '90%',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#FFF',
              }}
              dropdownListProps={{}}
              onDropdownWillShow={() =>
                setmyState({...ismyState, picker2: true})
              }
              onDropdownWillHide={() =>
                setmyState({...ismyState, picker2: false})
              }
              dropdownTextHighlightStyle={{color: '#DE2516'}}
              dropdownStyle={{
                height: 130,
                width: '90%',
                backgroundColor: '#FFF',
                marginLeft: -16,
              }}
              dropdownTextStyle={{
                fontSize: 15,
                color: '#F6931B',
                paddingLeft: 10,
                fontWeight: 'bold',
              }}
              options={[
                'English',
                'Chinese',
                'French',
              ]}
              
              onSelect={(s)=>getLanguage(s)}
              ></ModalDropdown>
          </View>

          <View
            style={{
              justifyContent: 'flex-end',
              marginTop: 10,
            }}>
            <LinearGradient
              colors={['#F6931B', '#DE2516']}
              style={{
                alignSelf: 'center',
                borderRadius: 5,
              }}>
              <Button
                title={t("Save")}
                onPress={() => {
                  props.navigation.replace('drawer');
                }}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  height: 40,
                  width: 301,
                }}
              />
            </LinearGradient>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default App;
