import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import App from '../../../components/header';
import {theme} from '../../../constants/theme';
import Overlay from '../../../components/overlays';

function CreateOffer(props) {
  const [offerPosted, setOfferPosted] = useState(false);
  return (
    <ImageBackground
      source={require('../../../assets/images/home.png')}
      style={{height: '100%', width: '100%'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(000000,000000,000000, 0.8)',
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: theme.primaryColor,
            paddingHorizontal: 15,
            // borderRadius: 45,
            borderTopRightRadius: 100,
            borderBottomLeftRadius: 100,
            paddingVertical: 30,
            elevation: 5,
            elevation: 2,
            // alignItems: 'center',
          }}>
          <Text
            style={{
              color: theme.textColor.whiteColor,
              // paddingTop: 40,
              // paddingBottom: 20,
              alignSelf: 'center',
              fontSize: 28,
              textAlign: 'center',
              fontWeight: '700',
              paddingVertical: 20,
            }}>
            Offer Successfully Uploaded
          </Text>
          <View
            style={{
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                borderRadius: 30,
                overflow: 'hidden',
                marginVertical: 10,
              }}>
              <GlobalButton
                height={40}
                width="100%"
                buttonText="My offer"
                onPress={() => {
                  props.navigation.navigate('SelectOffer');
                }}
              />
            </View>
            <View
              style={{
                borderRadius: 30,
                overflow: 'hidden',
                marginVertical: 10,
              }}>
              <GlobalButton
                height={40}
                width="100%"
                buttonText="Create new offer"
                onPress={() => {
                  props.navigation.navigate('createnewoffer');
                }}
              />
            </View>
            <View
              style={{
                borderRadius: 30,
                overflow: 'hidden',
                marginVertical: 10,
              }}>
              <GlobalButton
                height={40}
                width="100%"
                buttonText=" Dashboard"
                onPress={() => {
                  props.navigation.navigate('partnerhome');
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
export default CreateOffer;
