import React, {useState, useEffect} from 'react';
import AnimatedLoader from 'react-native-animated-loader';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../constants/theme';

const Loader = ({status, loaderMessage, path}) => {
  return (
    <AnimatedLoader
      visible={status}
      overlayColor="rgba(255,255,255,0.6)"
      source={require('./loaders.json')}
      animationStyle={styles.lottie}
      speed={1}>
      <Text
        style={{
          color: theme.primaryColor,
          fontSize: 15,
          fontWeight: 'bold',
        }}>
        {loaderMessage ? `${loaderMessage}` : null}
      </Text>
    </AnimatedLoader>
  );
};
export default Loader;
const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});
