import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import App from '../../components/header';
import {theme} from '../../constants/theme';
import Overlay from '../../components/overlays';
function AddPayment(props) {
  const [state, setState] = useState({selected: 0});
  const [overlay, setOverlay] = useState(true);
  return (
    // <Overlay toggleOverlay={props.toggleOverlay} visible={overlay}>
    <CustomView bg={'rgba(00,00,00, 0.6)'} scroll>
      <App leftArrow={true} navigation={props.navigation} isTransparent />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        <View
          style={{
            width: '90%',
            backgroundColor: 'white',
            paddingHorizontal: 60,
            borderTopRightRadius: 100,
            borderBottomLeftRadius: 100,
            borderTopLeftRadius: 100,
            paddingVertical: 40,
            alignItems: 'center',
          }}>
          <View
            style={{
              // flexDirection: 'row',
              width: '100%',
              paddingBottom: 30,
              // justifyContent: 'space-around',
            }}>
            {[
              {name: 'Add Account', description: 'Create new account'},
              {
                name: 'Select Account',
                description: 'Pay through Selected Account',
              },
            ].map((val, i) => (
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'center',
                  paddingVertical: 20,
                }}>
                <TouchableOpacity
                  // onPress={() => setState({...state, selected: i})}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 25,
                    height: 25,
                    borderRadius: 150,
                    backgroundColor:
                      state.selected == i ? '#A8FFFF' : '#E7E7E7',
                    borderWidth: 0.5,
                  }}
                  onPress={() => {
                    props.navigation.navigate('PaymentDetails');
                  }}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 15,
                      height: 15,
                      borderRadius: 150,
                      backgroundColor:
                        state.selected == i
                          ? '#31FFAC'
                          : theme.textColor.lightWhiteColor,
                      borderWidth: 0.5,
                    }}></View>
                </TouchableOpacity>
                <View style={{marginLeft: 20}}>
                  <Text
                    style={{color: theme.textColor.blackColor, fontSize: 16}}>
                    {val.name}
                  </Text>
                  <Text
                    style={{color: theme.textColor.blackColor, fontSize: 10}}>
                    {val.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </CustomView>
    // </Overlay>
  );
}
export default AddPayment;
