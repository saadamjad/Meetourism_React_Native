import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import App from '../../../components/header';
import {theme} from '../../../constants/theme';

function Successfull(props) {
  return (
    <CustomView bg={'rgba(66,48,80, 0.6)'} scroll>
      <App leftArrow={true} navigation={props.navigation} isTransparent />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            paddingHorizontal: 20,
            borderRadius: 45,
            paddingVertical: 50,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{position: 'absolute', right: 20, top: 10}}>
            <Icon name="cross" type="Entypo" />
          </TouchableOpacity>
          <Text
            style={{
              color: theme.textColor.blackColor,
              paddingBottom: 25,
              fontSize: 30,
              fontWeight: '700',
            }}>
            SAVE THE QR
          </Text>
          <View style={{width: '100%'}}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                // marginTop: 80,
              }}>
              <Image
                resizeMode="contain"
                source={require('../../../assets/images/qr.png')}
              />
            </View>

            <GlobalButton buttonText="Save Qr" height={40} width={'40%'} />

            <View
              style={{
                width: '100%',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <Image
                resizeMode="cover"
                style={{width: '100%', height: 200}}
                source={require('../../../assets/images/map.jpg')}
              />
            </View>
            <View style={{marginTop: 20}}>
              <GlobalButton buttonText="Main Menu" height={40} />
            </View>
          </View>
        </View>
      </View>
    </CustomView>
  );
}
export default Successfull;
