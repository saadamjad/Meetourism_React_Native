import Icon from 'react-native-vector-icons/Feather';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import App from '../../components/header';
import {theme} from '../../constants/theme';
import {Overlay} from 'react-native-elements';
import {FastImageComponent} from '../../components/fastimage';
// import Overlay from '../../components/overlays';
function Successful(props) {
  return (
    // <Overlay
    //   style={{flex: 1}}
    //   overlayStyle={{
    //     flex: 1,
    //     width: '100%',
    //     height: '100%',
    //     backgroundColor: 'rgba(66,48,80, 1)',
    //   }}
    //   isVisible={props.visible}
    //   onBackdropPress={() => props.toggle()}>
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
            color: theme.secondaryColor,
            paddingBottom: 25,
            fontSize: 24,
            fontWeight: '700',
          }}>
          Whopper Feast
        </Text>
        <View style={{width: '100%'}}>
          <Text
            style={{
              color: theme.textColor.blackColor,
              paddingBottom: 10,
              fontSize: 16,
              fontWeight: '500',
            }}>
            Description
          </Text>
          <Text
            style={{
              color: theme.textColor.greyColor,
              paddingBottom: 25,
              fontSize: 14,
            }}>
            10 Chicken Whopper and 10 Drink
          </Text>
          <View style={{width: '100%', alignItems: 'flex-end', paddingTop: 15}}>
            <Text style={{color: theme.secondaryColor, fontWeight: '700'}}>
              15.99$.only/-
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 60,
            }}>
            <FastImageComponent
              resizeMode="contain"
              source={require('../../assets/images/burgerDrink.png')}
            />
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <FastImageComponent
              resizeMode="cover"
              style={{width: '100%', height: 200}}
              source={require('../../assets/images/map.jpg')}
            />
          </View>
          <View
            style={{
              width: '100%',
              // height: 100
              marginTop: 20,
              flex: 0.2,
              justifyContent: 'flex-end',
              // backgroundColor: 'yellow',
            }}>
            <GlobalButton
              buttonText="Pay the Offer"
              height={40}
              onPress={() => {
                props.func();
              }}
            />
          </View>
        </View>
      </View>
    </View>
    // </Overlay>
  );
}
export default Successful;
