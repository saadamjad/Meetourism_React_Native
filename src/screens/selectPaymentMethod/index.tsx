import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import App from '../../components/header';
import {theme} from '../../constants/theme';

function SelectPaymentMethod(props) {
  const [state, setState] = useState({selected: 0});
  return (
    <CustomView bg={'rgba(66,48,80, 0.6)'} scroll>
      <App leftArrow={true} navigation={props.navigation} isTransparent />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            paddingHorizontal: 40,
            // borderRadius: 45,
            borderTopRightRadius: 100,
            borderBottomLeftRadius: 100,
            borderTopLeftRadius: 100,
            paddingVertical: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.textColor.blackColor,
              paddingBottom: 20,
              paddingTop: 40,
              fontSize: 24,
              fontWeight: '700',
            }}>
            Select Payment Method
          </Text>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingBottom: 60,
              justifyContent: 'space-around',
            }}>
            {[
              require('../../assets/images/paypal.png'),
              require('../../assets/images/masterCard.png'),
              require('../../assets/images/visa.png'),
            ].map((val) => (
              <TouchableOpacity>
                <Image resizeMode="contain" source={val} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </CustomView>
  );
}
export default SelectPaymentMethod;
