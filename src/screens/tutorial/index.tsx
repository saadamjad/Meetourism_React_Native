import React, {Component, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';

const firstSlide = () => (
  <View
    style={{
      height: '50%',
      // backgroundColor: 'black',
      width: '100%',
      justifyContent: 'center',
    }}>
    <View style={{width: '100%', height: 220, alignItems: 'flex-end'}}>
      <View
        style={{
          width: '80%',
          backgroundColor: theme.primaryColor,
          // paddingVertical: 50,
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: 100,
        }}>
        <Text style={{color: 'white', fontSize: 34, fontWeight: '800'}}>
          Welcome to Meetourism
        </Text>
      </View>
      <View
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
      </View>
    </View>
  </View>
);
const secondSlide = () => (
  <View
    style={{
      height: '50%',
      // backgroundColor: 'black',
      width: '100%',
      justifyContent: 'center',
    }}>
    <View style={{width: '100%', height: 220, alignItems: 'flex-end'}}>
      <View
        style={{
          width: '80%',
          backgroundColor: theme.primaryColor,
          // paddingVertical: 50,
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomLeftRadius: 100,
        }}>
        <Text style={{color: 'white', fontSize: 34, fontWeight: '800'}}>
          Welcome to Meetourism
        </Text>
      </View>
      <View
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
      </View>
    </View>
  </View>
);

const Tutorial = (props) => {
  const [state, setState] = useState({selectedIndex: 0});
  return (
    <CustomView>
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
