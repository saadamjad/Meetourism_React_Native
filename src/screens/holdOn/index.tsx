import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import App from '../../components/header';
import {theme} from '../../constants/theme';
import Overlay from '../../components/overlays';
function HoldOn(props) {
  const [state, setState] = useState({selected: 0});
  return (
    // <Overlay toggleOverlay={props.toggleOverlay} visible={props.visible}>
    //   <CustomView bg={'rgba(66,48,80, 0.6)'} scroll>
    //     <App leftArrow={true} navigation={props.navigation} isTransparent />
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
            paddingBottom: 20,
            fontSize: 24,
            fontWeight: '700',
          }}>
          Hold On!
        </Text>
        <Text
          style={{
            color: theme.textColor.greyColor,
            paddingBottom: 40,
            fontSize: 16,
          }}>
          Would you like to complete your profile now. Click yes to continue or
          skip to continue later.
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
            height={50}
          />
          <GlobalButton buttonText="YES" height={50} />
        </View>
      </View>
    </View>
    //   </CustomView>
    // </Overlay>
  );
}
export default HoldOn;
