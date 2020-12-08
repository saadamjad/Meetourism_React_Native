import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Longheader from '../../components/header/longheader';

const App = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#241332',
      }}>
      <Longheader leftArrow={true} searchIcon={true} headerText="User Setting page" />
    </View>
  );
};
export default App;
