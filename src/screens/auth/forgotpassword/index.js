import React, {useState, useRef} from 'react';
import Header from '../../../components/header';

import {
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Text,
  TextInput,
  Image,
} from 'react-native';
import {theme} from '../../../constants/theme';

const App = (props) => {
  const [email, setEmail] = useState('');
  const [newpassword, setNewPassword] = useState(false);

  const _NewPassword = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <View
            style={{
              borderBottomColor: theme.borderColor.inActiveBorderColor,
              borderBottomWidth: 1,
              width: '80%',
              height: 40,
              marginTop: 20,
            }}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={{
                width: '100%',
                height: '100%',
                fontSize: 16,
                // borderBottomWidth: 1,
              }}
              placeholderTextColor={'black'}
              placeholder={'New Password'}
              keyboardType="email-address"
            />
          </View>
          <View
            style={{
              borderBottomColor: theme.borderColor.inActiveBorderColor,
              borderBottomWidth: 1,
              width: '80%',
              height: 40,
              marginTop: 20,
            }}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={{
                width: '100%',
                height: '100%',
                fontSize: 16,
                // borderBottomWidth: 1,
              }}
              placeholderTextColor={'black'}
              placeholder={'Confirm Password'}
              keyboardType="email-address"
            />
          </View>
          <TouchableOpacity
            disabled={email.length > 0 ? false : true}
            style={{
              backgroundColor: email.length > 0 ? theme.secondaryColor : 'gray',
              width: '80%',

              height: 50,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}
            onPress={() => props.navigation.goBack()}
            activeOpacity={0.75}>
            <Text style={{color: theme.textColor.whiteColor}}>update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const _EnterEmail = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            justifyContent: 'center',
            marginTop: 30,
            alignItems: 'center',
          }}>
          <View
            style={{
              borderBottomColor: theme.borderColor.inActiveBorderColor,
              borderBottomWidth: 1,
              width: '80%',
              height: 40,
              marginTop: 20,
            }}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={{
                width: '100%',
                height: '100%',
                fontSize: 16,
                // borderBottomWidth: 1,
              }}
              placeholderTextColor={'black'}
              placeholder={'Enter Email'}
              keyboardType="email-address"
            />
          </View>
          <TouchableOpacity
            disabled={email.length > 0 ? false : true}
            style={{
              backgroundColor: email.length > 0 ? theme.secondaryColor : 'gray',
              width: '80%',

              height: 50,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}
            onPress={() => setNewPassword(true)}
            activeOpacity={0.75}>
            <Text style={{color: theme.textColor.whiteColor}}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header
          text={true}
          isTransparent={true}
          leftArrow={true}
          isVisibleIcon={true}
          navigation={props.navigation}
          //   drawerIcon={true}
          text={newpassword ? 'New Password' : ' Password Reset'}
          textColor={'black'}
        />
        {newpassword ? _NewPassword() : _EnterEmail()}
      </View>
    </>
  );
};
export default App;
