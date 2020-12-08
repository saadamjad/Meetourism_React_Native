import React, {Component, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import Header from '../../components/header/longheader';

const Tutorial = (props) => {
  const [state, setState] = useState({selectedIndex: 0});

  const firstSlide = () => (
    <View
      style={{
        height: '50%',
        // backgroundColor: 'black',  
        width: '100%',
        justifyContent: 'center',
      }}>
      <View style={{width: '100%', height: 210, alignItems: 'flex-end'}}>
        <View
          style={{
            width: '80%',
            borderWidth: 1,
            backgroundColor: theme.primaryColor,
            // paddingVertical: 50,
            height: 180,
            justifyContent: 'center',
            // alignItems: 'center',
            borderBottomLeftRadius: 100,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 34,
              fontWeight: '800',
              textAlign: 'center',
            }}>
            Welcome to Meetourism
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setState({...state, selectedIndex: 1})}
          style={{
            backgroundColor: theme.secondaryColor,
            width: '45%',
            position: 'absolute',
            height: 60,
            bottom: 0,
            borderTopLeftRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomLeftRadius: 30,
            flexDirection: 'row',
          }}>
          <Text style={{color: 'white', fontWeight: '300', fontSize: 18}}>
            Get Started
          </Text>
          {/* <Icon name="arrowright" type="AntDesign" /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
  const secondSlide = () => (
    <View
      style={{
        height: '30%',
        // backgroundColor: 'black',
        width: '100%',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '100%',
          height: 220,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: theme.secondaryColor,
            width: 160,
            justifyContent: 'center',
            alignItems: 'center',
            height: 45,
            borderRadius: 30,
          }}
          onPress={() => props.navigation.navigate('signin')}>
          <Text style={{color: theme.textColor.whiteColor, fontSize: 20}}>
            Avail Offer
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: 140,
            justifyContent: 'center',
            alignItems: 'center',
            height: 60,
          }}>
          <Text style={{color: theme.textColor.whiteColor, fontSize: 13}}>
            Skip to Login
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <CustomView
      image={
        state.selectedIndex == 0
          ? require('../../assets/images/background.png')
          : require('../../assets/images/burgerBackground.png')
      }>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View
          style={{
            height: 40,
            width: '45%',
            alignSelf: 'flex-end',
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            {[0, 1].map((val, i) => (
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 50,
                  marginHorizontal: 2,
                  backgroundColor:
                    i == state.selectedIndex
                      ? theme.textColor.whiteColor
                      : theme.textColor.greyColor,
                  opacity: i == state.selectedIndex ? 1 : 0.5,
                }}></View>
            ))}
          </View>
          <Text style={{color: 'white'}}>SKIP</Text>
        </View>
        {state.selectedIndex == 0 ? firstSlide() : secondSlide()}
      </View>
    </CustomView>
  );
};

export default Tutorial;
