import React, {Component, useState, useEffect, useRef} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import LongHeader from '../../components/header/longheader';
import {Item, Icon} from 'native-base';
import {SwipeablePanel} from 'rn-swipeable-panel';
const Location = (props) => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(true);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  const _hello = () => {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          // backgroundColor: 'red',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingVertical: 20,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        {[
          {
            name: 'Meditation',
            time: '9:00 (25 min)',
            icon: (
              <Image
                resizeMode="contain"
                source={require('../../assets/images/share.png')}
              />
            ),
            an: false,
          },
          {
            name: 'Running',
            time: '9:25 (47 min)',
            icon: (
              <Image
                resizeMode="contain"
                source={require('../../assets/images/heartCircle.png')}
              />
            ),
            an: false,
          },

          {
            name: 'Yoga practice',
            time: '10:02 (1:16 hour)',
            icon: (
              <Image
                resizeMode="contain"
                source={require('../../assets/images/signal.png')}
              />
            ),
            an: true,
          },
        ].map((val, i) => (
          <View
            style={{
              paddingVertical: 20,
              marginVertical: 20,
              width: '90%',
              borderRadius: 40,
              backgroundColor: 'rgba(255,255,255,0.3)',
              flexDirection: val.an ? 'column' : 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                width: val.an ? '80%' : 'auto',
                flexDirection: 'row',
                alignSelf: 'center',
                justifyContent: !val.an ? 'center' : 'flex-start',
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: 'transparent',
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {val.icon}
              </View>
              <View
                style={{
                  height: '100%',
                  marginLeft: 10,
                }}>
                <Text style={{color: 'rgba(255,255,255,0.7)', fontSize: 12}}>
                  {val.time}
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 15,
                    fontWeight: i == 0 ? 'bold' : '400',
                  }}>
                  {val.name}
                </Text>
                {val.an && (
                  <Image
                    resizeMode="contain"
                    style={{marginTop: 10}}
                    source={require('../../assets/images/peoples.png')}
                  />
                )}
              </View>
            </View>

            {!val.an ? (
              <Image
                source={require('../../assets/images/Avatars.png')}
                resizeMode="contain"
              />
            ) : (
              <View style={{width: '100%', alignItems: 'center'}}>
                {/* <Image
  source={require('../../assets/images/peoples.png')}
/> */}
              </View>
            )}
          </View>
        ))}
      </View>
    );
  };

  return (
    <CustomView
      image={require('../../assets/images/map.jpg')}
      bg={'transparent'}
      scroll>
      <LongHeader
        navigation={props.navigation}
        leftArrow={true}
        searchIcon={true}
        backgroundColor={'transparent'}
        headerText="Location"
      />
      <SwipeablePanel
        fullWidth
        isActive={isPanelActive}
        openLarge={true}
        closeOnTouchOutside={true}
        onClose={() => setIsPanelActive(false)}
        style={{
          backgroundColor: theme.primaryColor,
          height: '70%',
        }}>
        <_hello />
      </SwipeablePanel>
    </CustomView>
  );
};

export default Location;
