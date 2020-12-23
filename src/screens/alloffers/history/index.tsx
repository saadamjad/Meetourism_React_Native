import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import App from '../../../components/header';
import {theme} from '../../../constants/theme';
import Overlay from '../../../components/overlays';
function History(props) {
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
          paddingHorizontal: 20,
          borderRadius: 45,
          paddingVertical: 50,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: theme.secondaryColor,
            paddingBottom: 25,
            fontSize: 24,
            fontWeight: '700',
          }}>
          History
        </Text>
        {[0, 1, 2].map((val, i) => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setState({...state, selected: i})}
            style={{
              flexDirection: 'row',
              width: '100%',
              marginVertical: 10,
            }}>
            <Icon
              style={{
                fontSize: 24,
                color:
                  state.selected == i
                    ? theme.iconsColor.color3
                    : theme.iconsColor.color4,
              }}
              name="checksquareo"
              type="AntDesign"
            />
            <View style={{height: 210, width: '90%'}}>
              <Image
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
                source={require('../../../assets/images/history.png')}
              />
            </View>
          </TouchableOpacity>
        ))}
        <View
          style={{
            width: '100%',
            height: 40,
            marginVertical: 20,
            borderBottomWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              width: '90%',

              height: '100%',
              borderRadius: 1,
              fontSize: 18,
              borderStyle: 'solid',
            }}
            placeholder="Upload to"
            placeholderTextColor={theme.textColor.greyColor}
          />
          <View style={{width: '10%', alignItems: 'center'}}>
            <Icon style={{fontSize: 10}} type="AntDesign" name="caretdown" />
          </View>
        </View>
        <View style={{width: '100%', justifyContent: 'flex-end'}}>
          <GlobalButton buttonText="Upload" height={40} />
        </View>
      </View>
    </View>
    //   </CustomView>
    // </Overlay>
  );
}
export default History;
