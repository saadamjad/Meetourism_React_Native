import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import App from '../../../components/header';
import {theme} from '../../../constants/theme';
import Overlay from '../../components/overlays';
function DetailOffer(props) {
  return (
    <Overlay toggleOverlay={props.toggleOverlay} visible={props.visible}>
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
              <View style={{width: '100%', alignItems: 'flex-end'}}>
                <Text style={{color: theme.secondaryColor, fontWeight: '700'}}>
                  15.99$.only/-
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  marginTop: 80,
                }}>
                <Image
                  resizeMode="contain"
                  source={require('../../../assets/images/burgerDrink.png')}
                />
              </View>
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
            </View>
          </View>
        </View>
      </CustomView>
    </Overlay>
  );
}
export default DetailOffer;
