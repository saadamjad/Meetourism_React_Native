import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../header';
import {theme} from '../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: theme.secondaryColor}}>
      <Header
        text={true}
        isTransparent={true}
        isVisibleIcon={true}
        navigation={props.navigation}
        //   drawerIcon={true}
      />
      <View
        style={{
          flex: 0.4,
          width: '85%',
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            //   flex: 1,
            flexDirection: 'row',
            height: '80%',
            paddingBottom: 20,
            width: '100%',
            // justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}>
          <View style={{width: '74%'}}>
            {props.icon ? (
              <AntDesign
                name={'checkcircleo'}
                size={80}
                color={theme.iconsColor.white}
              />
            ) : (
              <>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 18,
                    color: theme.textColors.white,
                    lineHeight: 30,
                    letterSpacing: 0.5,
                  }}>
                  {props.suggest}
                </Text>
                <Text
                  style={{
                    fontSize: 27,
                    fontFamily: 'Roboto-Bold',
                    //   fontWeight: 'bold',
                    lineHeight: 30,
                    letterSpacing: 0.5,
                    color: theme.textColors.white,
                  }}>
                  {props.name}
                </Text>
              </>
            )}
          </View>
          <Image
            source={require('../../assets/icons/logo-white.png')}
            style={{height: 80, width: 80, resizeMode: 'contain'}}
          />
        </View>
        {/* <View style={{flex: 1, justifyContent: 'flex-end'}}> */}
        <View
          style={{
            // flex: 0.5,
            height: 22,
            backgroundColor: theme.headerColor,
            width: '95%',
            alignSelf: 'center',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          }}></View>
      </View>
      <View
        style={{
          flex: 0.7,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 20,
          overflow: 'hidden',
        }}>
        {props.children}
      </View>
    </View>
  );
};

export default App;
