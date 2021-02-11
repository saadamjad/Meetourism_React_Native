import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import App from '../../../components/header';
import {theme} from '../../../constants/theme';
import Longheader from '../../../components/header';
import {ImageBackground} from 'react-native';
let statusValue = 0;

function DetailOffer1(props) {
  const [statusValue, setStatusValue] = useState(0);
  useEffect(() => {
    _UserType();
  }, []);
  const _UserType = async () => {
    console.log('===');
    AsyncStorage.getItem('userStatus').then((res) => {
      console.log('==res', res);
      setStatusValue(res);
    });
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/statusbg.png')}
      style={{height: '100%', width: '100%'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            flex: 1,
            // backgroundColor: '#241332',
            backgroundColor: 'rgba(00,00,00,0.8)',
            // borderWidth: 1,
            // paddingVertical: 2,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              // borderWidth: 1,

              paddingHorizontal: 12,
              // paddingVertical: 10,
              alignSelf: 'flex-start',
            }}
            onPress={() =>
              //   setState({...state, visible: !state.visible, visible1: false})
              props._onPress()
            }>
            <Icon
              type="AntDesign"
              name="arrowleft"
              style={{color: 'white', fontSize: 20}}
            />
          </TouchableOpacity>
          <View
            style={{
              // borderWidth: 1,
              width: '90%',
              paddingHorizontal: 15,
              paddingVertical: 20,
              alignSelf: 'center',
              backgroundColor: 'white',
              borderRadius: 40,
              height: '90%',
              overflow: 'hidden',
            }}>
            <View style={{width: '100%', borderWidth: 0, overflow: 'hidden'}}>
              <View
                style={{
                  // width: '100%',
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
              <View style={{alignItems: 'flex-end'}}>
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
                  height: 200,
                  paddingVertical: 20,
                }}>
                <Image
                  resizeMode="contain"
                  style={{height: '100%', width: '100%'}}
                  source={require('../../../assets/images/burgerDrink.png')}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                // borderWidth: 1,
                justifyContent: 'flex-end',
                paddingBottom: 30,
              }}>
              {statusValue == 2 ? (
                <View style={{flex: 1, borderWidth: 0, paddingHorizontal: 12}}>
                  <Image
                    source={require('../../../assets/images/map.jpg')}
                    style={{height: '100%', width: '100%'}}
                    resizeMode="contain"
                  />
                </View>
              ) : (
                <GlobalButton
                  buttonText="Pay the Offer"
                  height={50}
                  width="66%"
                  onPress={() => props.navigation.navigate('payment')}
                />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
export default DetailOffer1;
