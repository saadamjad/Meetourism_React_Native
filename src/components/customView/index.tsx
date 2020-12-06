import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../constants/theme';

const CustomView = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: props.bg ? props.bg : 'orange',
        zIndex: 0,
      }}>
      <SafeAreaView style={{flex: 1, zIndex: 0}}>
        {props.scroll ? (
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              zIndex: 0,
            }}>
            {props.withBg ? (
              <>
                <View
                  style={{
                    backgroundColor: theme.primaryColor,
                    height: '40%',
                    borderBottomLeftRadius: 150,
                  }}></View>
                <View
                  style={{
                    position: 'absolute',
                    // backgroundColor: 'red',
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                  }}>
                  <ScrollView
                    contentContainerStyle={{
                      // backgroundColor: 'white',
                      // height: '100%',
                      flexGrow: 1,
                      width: '100%',
                    }}>
                    {props.children}
                  </ScrollView>
                </View>
              </>
            ) : (
              props.children
            )}
            {/* {props.children} */}
          </ScrollView>
        ) : (
          props.children
        )}
      </SafeAreaView>
    </View>
  );
};
export default CustomView;
