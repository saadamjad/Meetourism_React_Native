import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import Longheader from '../../../components/header/longheader';
import {theme} from '../../../constants/theme';

function SelectOffer(props) {
  return (
    <CustomView bg={theme.textColor.whiteColor} scroll>
      <Longheader
        headerText="SelectOffer"
        filterIcon
        alignItemsText="center"
        backgroundColor={theme.textColor.whiteColor}
        leftArrow={true}
        navigation={props.navigation}
      />
      <View
        style={{
          flex: 1,
          marginTop: 40,
          // justifyContent: 'center',
          alignItems: 'center',
        }}>
        {[0, 1, 2, 3].map((val) => (
          <TouchableOpacity
            onPress={() => {
              // navigate to screen there
            }}
            activeOpacity={1}
            style={{width: '100%', height: 280, marginVertical: 10}}>
            <View
              style={{
                height: '80%',
                width: '90%',
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                justifyContent: 'flex-end',
                overflow: 'hidden',
              }}>
              <ImageBackground
                resizeMode="stretch"
                style={{
                  height: '100%',
                  width: '100%',
                  justifyContent: 'flex-end',
                }}
                source={require('../../../assets/images/BG.png')}>
                <View
                  style={{
                    flexDirection: 'row',
                    height: '25%',
                    paddingLeft: 35,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{color: theme.textColor.whiteColor, fontSize: 18}}>
                      256
                    </Text>
                    <Icon
                      style={{
                        color: theme.textColor.whiteColor,
                        fontSize: 22,
                        marginLeft: 10,
                      }}
                      type="MaterialIcons"
                      name="chat-bubble-outline"
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: 20,
                    }}>
                    <Text
                      style={{color: theme.textColor.whiteColor, fontSize: 18}}>
                      256
                    </Text>
                    <Icon
                      style={{
                        color: theme.textColor.whiteColor,
                        fontSize: 22,
                        marginLeft: 10,
                      }}
                      type="AntDesign"
                      name="hearto"
                    />
                  </View>
                </View>
              </ImageBackground>
            </View>

            <View
              style={{
                width: '85%',
                alignSelf: 'center',
                flexDirection: 'row',
                marginTop: 20,
              }}>
              <Image source={require('../../../assets/images/avatar.png')} />
              <View style={{marginLeft: 20}}>
                <Text
                  style={{
                    color: theme.textColor.blackColor,
                    fontWeight: '800',
                  }}>
                  Fast Food
                </Text>
                <Text style={{color: theme.textColor.greyColor, fontSize: 13}}>
                  8 Nov
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </CustomView>
  );
}
export default SelectOffer;
