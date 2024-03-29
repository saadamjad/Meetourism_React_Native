import Icon from 'react-native-vector-icons/Feather';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import App from '../../../components/header';
import {theme} from '../../../constants/theme';
import Overlay from '../../../components/overlays';
import {FastImageComponent} from '../../../components/fastimage';

function DealOffer(props) {
  return (
    // <Overlay toggleOverlay={props.toggleOverlay} visible={props.visible}>
    <CustomView
      image={require('../../../assets/images/statusbg.png')}
      bg={'rgba(00,00,00, 0.6)'}
      scroll>
      <App navigation={props.navigation} isTransparent />
      <View
        style={{
          // flex: 1,
          justifyContent: 'center',
          alignItems: 'center',

          // height: '60%',
          // backgroundColor: 'red',
        }}>
        <View
          style={{
            width: '80%',
            backgroundColor: 'white',
            paddingHorizontal: 20,
            borderRadius: 50,
            elevation: 5,
            borderBottomRightRadius: 0,
            paddingVertical: 30,
            // height: '60%',
            alignItems: 'center',
          }}>
          {/* <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{position: 'absolute', right: 20, top: 10}}>
            <Icon name="cross" type="Entypo" />
          </TouchableOpacity> */}
          <Text
            style={{
              color: theme.textColor.blackColor,
              fontSize: 20,
              fontWeight: '700',
            }}>
            Order has been placed
          </Text>
          <Text
            style={{
              color: theme.textColor.blackColor,
              // paddingBottom: 10,
              fontSize: 16,
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
              {/* <Image
                resizeMode="contain"
                source={require('../../../assets/images/qr.png')}
                style={{height: 150, width: 200}}
              /> */}

              <FastImageComponent
                resizeMode="contain"
                source={require('../../../assets/images/qr.png')}
                style={{height: 150, width: 200}}
              />
            </View>

            <GlobalButton buttonText="Save QR" height={34} width={'50%'} />

            <View
              style={{
                width: '100%',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <FastImageComponent
                resizeMode="contain"
                style={{height: 150, width: 200}}
                source={require('../../../assets/images/map.jpg')}
              />
            </View>
            <View style={{marginTop: 20, overflow: 'hidden'}}>
              <GlobalButton
                buttonText="Main Menu"
                height={40}
                onPress={() => props.navigation.navigate('Home')}
              />
            </View>
          </View>
        </View>
      </View>
    </CustomView>
    // </Overlay>
  );
}
export default DealOffer;
