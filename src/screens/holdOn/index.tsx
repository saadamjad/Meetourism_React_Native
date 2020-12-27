import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import App from '../../components/header';
import {theme} from '../../constants/theme';
import {Button, Overlay} from 'react-native-elements';
// import Overlay from '../../components/overlays';
function HoldOn(props) {
  const [state, setState] = useState({selected: 0});
  return (
    <CustomView bg={'transparent'} scroll>
      <Overlay
        overlayStyle={{
          backgroundColor: 'transparent',
          width: '100%',
          height: '100%',
        }}
        onBackdropPress={props.toggleOverlay}
        visible={props.visible}>
        {/* //     <App leftArrow={true} navigation={props.navigation} isTransparent /> */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              backgroundColor: 'white',
              paddingHorizontal: 40,
              // borderRadius: 45,
              borderTopRightRadius: 100,
              borderBottomLeftRadius: 100,
              paddingVertical: 30,
              // alignItems: 'center',
            }}>
            <Text
              style={{
                color: theme.secondaryColor,
                paddingBottom: 10,
                fontSize: 24,
                fontWeight: '700',
              }}>
              Hold On!
            </Text>
            <Text
              style={{
                color: theme.textColor.greyColor,
                paddingBottom: 20,
                fontSize: 14,
              }}>
              Would you like to complete your profile now. Click yes to continue
              or skip to continue later.
            </Text>
            <View
              style={{
                width: '40%',
                justifyContent: 'flex-end',
                alignSelf: 'flex-end',
                flexDirection: 'row',
              }}>
              <GlobalButton
                backgroundColor={theme.buttonGreyColor}
                buttonText="SKIP"
                onPress={() => {
                  props.toggleOverlay();
                  props.navigation.navigate('Status');
                }}
                height={50}
                width={80}
              />
              <GlobalButton
                width={80}
                onPress={() => {
                  props.toggleOverlay();
                  props.navigation.navigate('Status');
                }}
                buttonText="YES"
                height={50}
              />
            </View>
          </View>
        </View>
      </Overlay>
    </CustomView>
  );
}
export default HoldOn;
