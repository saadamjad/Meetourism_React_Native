import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import App from '../../components/header';
import {theme} from '../../constants/theme';
import Overlay from '../../components/overlays';
function SelectPaymentMethod(props) {
  const [state, setState] = useState({selected: 0});
  return (
    // <Overlay toggleOverlay={props.toggleOverlay} visible={props.visible}>
    <CustomView
      image={require('../../assets/images/home.png')}
      bg={'rgba(00,00,00, 0.8)'}
      scroll>
      <App leftArrow={true} navigation={props.navigation} isTransparent />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            paddingHorizontal: 40,
            // borderRadius: 45,
            borderTopRightRadius: 80,
            borderBottomLeftRadius: 80,
            borderTopLeftRadius: 80,
            paddingVertical: 40,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.textColor.blackColor,
              paddingBottom: 20,
              paddingTop: 40,
              fontSize: 20,
              fontWeight: '700',
            }}>
            Select Payment Method
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingBottom: 30,
              justifyContent: 'space-around',
            }}>
            {[
              require('../../assets/images/paypal.png'),
              require('../../assets/images/masterCard.png'),
              require('../../assets/images/visa.png'),
            ].map((val) => (
              <TouchableOpacity
                style={{width: 100, height: 30}}
                onPress={() =>
                  props.navigation.navigate('selectPaymentmethod')
                }>
                <Image
                  style={{width: '100%', height: '100%'}}
                  resizeMode="contain"
                  source={val}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </CustomView>
    // </Overlay>
  );
}
export default SelectPaymentMethod;
