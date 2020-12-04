import React, {useEffect} from 'react';
import {Image} from 'react-native';
const App = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('signin');
    }, 1200);
  }, []);
  return (
    <Image
      source={require('../../../assets/images/bukata-splash.png')}
      style={{resizeMode: 'cover', height: '100%', width: '100%'}}
    />
  );
}

export default App;
