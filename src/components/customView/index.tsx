import React from 'react';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const CustomView = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'orange'}}>
      <SafeAreaView style={{flex: 1}}>{props.children}</SafeAreaView>
    </View>
  );
};
export default CustomView;
