import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import App from '../../components/header';
import {theme} from '../../constants/theme';
import Overlay from '../../components/overlays';
function OfferUploaded(props) {
  const [state, setState] = useState({selected: 0});
  return (
    // <Overlay toggleOverlay={props.toggleOverlay} visible={props.visible}>
    <CustomView
      image={require('../../assets/images/home.png')}
      bg={'rgba(255,255,255, 0.95)'}
      scroll>
      {/* //     <App leftArrow={true} navigation={props.navigation} isTransparent /> */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'rgba(000,000,000, 0.7)',
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: theme.primaryColor,
            paddingHorizontal: 15,
            // borderRadius: 45,
            borderTopRightRadius: 100,
            borderBottomLeftRadius: 100,
            paddingVertical: 60,
            elevation: 2,
            // alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.textColor.whiteColor,
              paddingTop: 40,
              paddingBottom: 20,
              alignSelf: 'center',
              fontSize: 30,
              textAlign: 'center',
              fontWeight: '700',
            }}>
            Offer Successfully Uploaded
          </Text>

          <GlobalButton
            buttonText="My Offer"
            height={40}
            onPress={() => props.navigation.navigate('Selectoffer')}
          />
          {/* <GlobalButton buttonText="Create new offer" height={40} /> */}
          <GlobalButton
            buttonText="Dashboard"
            height={40}
            onPress={() => props.navigation.navigate('drawer')}
          />
        </View>
      </View>
    </CustomView>
    // </Overlay>
  );
}
export default OfferUploaded;
