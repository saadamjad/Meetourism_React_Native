import React, {Component, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
// import {Icon} from 'native-base';
// import Style from './style';
import CustomView from '../../../components/customView';
import {theme} from '../../../constants/theme';
import {Icon} from 'native-base';
// import Header from '../../../components/header/longheader';
// import LongHeader from '../../../components/header/longheader';
const Status = (props) => {
  const [state, setState] = useState({});
  return (
    <CustomView scroll image={require('../../../assets/images/background.png')}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(rgba(255, 255, 255, 0.8))',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: '50%',
            // backgroundColor: 'white',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            source={require('../../../assets/images/logo.png')}
            style={{height:150,width:150}}
          
          />
        </View>
        <View
          style={{
            height: '50%',
            width: '100%',
          }}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 150,
              backgroundColor: 'white',
              // elevation: 5,
              borderTopLeftRadius: 100,
              // borderBottomLeftRadius: 100,
              justifyContent: 'space-around',
              alignItems: 'center',
              borderBottomColor: 'lightgrey',
              borderLeftColor: 'lightgrey',
              // borderWidth: 1,
              borderColor: 'transparent',
              zIndex: 3,
            }}
            onPress={()=>props.navigation.navigate('drawer')}
            >
            <Text
              style={{
                color: theme.secondaryColor,
                fontSize: 24,
                fontWeight: '700',
              }}>
              Your Current Status?
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                style={{fontSize: 18}}
                type="FontAwesome5"
                name="user-alt"
              />
              <Text
                style={{
                  color: theme.textColor.blackColor,
                  fontSize: 18,
                  marginLeft: 5,
                }}>
                Single
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 150,
              backgroundColor: 'white',
              // elevation: 2,
              //   borderTopLeftRadius: 100,
              // borderBottomLeftRadius: 100,
              borderBottomColor: 'lightgrey',
              borderLeftColor: 'lightgrey',
              // borderWidth: 1,
              borderColor: 'transparent',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: -60,
              zIndex: 2,
            }}>
            <Text
              style={{
                color: theme.secondaryColor,
                fontSize: 22,
                fontWeight: '700',
              }}></Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                style={{fontSize: 18}}
                type="FontAwesome5"
                name="user-alt"
              />
              <Icon
                style={{fontSize: 18}}
                type="FontAwesome5"
                name="user-alt"
              />
              <Text
                style={{
                  color: theme.textColor.blackColor,
                  fontSize: 18,
                  marginLeft: 5,
                }}>
                In a Relationship
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 150,
              backgroundColor: 'white',
              // elevation: 2,
              //   borderTopLeftRadius: 100,
              // borderBottomLeftRadius: 100,
              borderBottomColor: 'lightgrey',
              borderLeftColor: 'lightgrey',
              // borderWidth: 1,
              borderColor: 'transparent',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: -60,
              zIndex: 1,
            }}>
            <Text
              style={{
                color: theme.secondaryColor,
                fontSize: 22,
                fontWeight: '700',
              }}></Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                style={{fontSize: 18}}
                type="FontAwesome5"
                name="user-alt"
              />
              <Icon
                style={{fontSize: 18}}
                type="FontAwesome5"
                name="user-alt"
              />
              <Text
                style={{
                  color: theme.textColor.blackColor,
                  fontSize: 18,
                  marginLeft: 5,
                }}>
                In a Relationship
              </Text>
            </View>
          </TouchableOpacity>
          <View
            style={{flex: 1, backgroundColor: 'white', marginTop: -100}}></View>
        </View>
      </View>
    </CustomView>
  );
};

export default Status;
