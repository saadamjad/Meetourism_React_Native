import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import App from '../../../components/header';
import {theme} from '../../../constants/theme';
import Longheader from '../../../components/header/longheader';

import Overlay from '../../../components/overlays';
function DetailOffer1(props) {
  return (
    // <Overlay toggleOverlay={props.toggleOverlay} visible={props.visible}>
    <CustomView bg={'#241433'} scroll>
      {/* <App leftArrow={true} navigation={props.navigation} isTransparent /> */}
      <View
        style={{
          width: '85%',
          flex: 1,
          backgroundColor: 'white',
          paddingHorizontal: 20,
          borderRadius: 45,
          // paddingVertical: 50,
          alignItems: 'center',
          alignSelf: 'center',
          // borderWidth: 1,
        }}>
        <View style={{flex: 1, borderWidth: 0, width: '100%'}}>
          <View
            style={{
              height: 50,
              width: '100%',
              // borderWidth: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: theme.secondaryColor,
                  // paddingBottom: 25,
                  fontSize: 24,
                  fontWeight: '700',
                  // width: '70%',
                }}>
                Whopper Feast
              </Text>
            </View>
            {/* <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}
              style={{
                // borderWidth: 1,
                flex: 1,
                // borderEndWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="cross" type="Entypo" />
            </TouchableOpacity> */}
          </View>
          <View style={{width: '100%', borderWidth: 0, overflow: 'hidden'}}>
            <Text
              style={{
                color: 'black',
                paddingBottom: 10,
                fontSize: 16,
                // fontWeight: '500',
                marginTop: 20,
                fontWeight: 'bold',
              }}>
              Description
            </Text>
            <Text
              style={{
                color: 'black',
                paddingBottom: 25,
                fontSize: 14,
              }}>
              10 Chicken Whopper and 10 Drink
            </Text>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
              <Text
                style={{
                  color: theme.secondaryColor,
                  fontWeight: '700',
                  fontSize: 15,
                }}>
                15.99$.only/-
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                // marginTop: 40,
                height: 200,
              }}>
              <Image
                resizeMode="contain"
                style={{height: '100%', width: '100%'}}
                source={require('../../../assets/images/burgerDrink.png')}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            // height: 100
            // borderWidth: 1,
            flex: 1,

            justifyContent: 'flex-end',
            paddingBottom: 20,
            // backgroundColor: 'yellow',
          }}>
          <GlobalButton
            buttonText="Pay the Offer"
            height={50}
            width={190}
            onPress={() => props.navigation.navigate('payment')}
          />
          {/* <GlobalButton
            buttonText="cancel"
            titleStyle={'black'}
            backgroundColor={'white'}
            height={50}
            width={190}
            onPress={() => props.CloseOverlay()}
          /> */}
        </View>
      </View>
    </CustomView>
    // </Overlay>
  );
}
export default DetailOffer1;
