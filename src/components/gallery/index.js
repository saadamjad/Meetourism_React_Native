import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
const App = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsPagination={false}
      showsButtons={true}
      // color={'red'}
      // ={{color: 'red'}}
    >
      {/* <View style={styles.slide1}> */}
      <Image
        source={require('../../assets/images/profile.png')}
        style={{height: '100%', width: '100%'}}
        resizeMode="cover"
      />
      {/* <Text style={styles.text}>Hello Swiper</Text> */}
      {/* </View> */}
      <View style={styles.slide2}>
        <Image
          source={require('../../assets/images/background.png')}
          style={{height: '100%', width: '100%'}}
        />
        {/* <Text style={styles.text}>Beautiful</Text> */}
      </View>
      <View style={styles.slide3}>
        <Image
          source={require('../../assets/images/profile.png')}
          style={{height: '100%', width: '100%'}}
        />
        {/* <Text style={styles.text}>And simple</Text> */}
      </View>
    </Swiper>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
