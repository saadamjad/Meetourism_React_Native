import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  AsyncStorage,
} from 'react-native';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import App from '../../../components/header';
import {theme} from '../../../constants/theme';
import Longheader from '../../../components/header';
let statusValue = 0;

function DetailOffer1(props) {
  const [statusValue, setStatusValue] = useState(0);
  useEffect(() => {
    _UserType();
  }, []);
  const _UserType = async () => {
    let value = await AsyncStorage.getItem('userStatus');
    setStatusValue(value);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#241332',
        // borderWidth: 1,
        // paddingVertical: 2,
        justifyContent: 'center',
      }}>
      <Longheader
        leftArrow={true}
        isTransparent={true}
        navigation={props.navigation}
      />
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
        {statusValue == 2 ? null : (
          <View
            style={{
              flex: 1,
              // borderWidth: 1,
              justifyContent: 'flex-end',
              paddingBottom: 30,
            }}>
            <GlobalButton
              buttonText="Pay the Offer"
              height={50}
              width="66%"
              onPress={() => props.navigation.navigate('payment')}
            />
          </View>
        )}
      </View>
    </View>
  );
}
export default DetailOffer1;
