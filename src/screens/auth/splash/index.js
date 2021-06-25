import { View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import { connect } from 'react-redux';

import * as Actions from '../../../redux/actions/index';
const App = (props) => {
  useEffect(() => {
    console.log(
      'tokentokentokentoken===================================',
      props.token,
      'statusss',
      props.status,
    );

    setTimeout(() => {

      if (props.token) {
        if (props.status === 'partner') {
          console.log('if');
          props.navigation.replace('PartnerStack', {
            screen: 'partnerhome',
          });
        } else {
          console.log('elseeeee');

          props.navigation.replace('drawer');
        }
      } else {
        props.navigation.replace('signin');
        // props.navigation.replace('splash');
      }
    }, 1200);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={{ resizeMode: 'contain', height: 150, width: 150 }}
      />
    </View>
  );
};
const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  loader: state.reducers.loader,
  token: state.reducers.token,
  status: state.reducers.status,
});
const mapDispatchToProps = {
  Signup: Actions.Signup,
  Login: Actions.Login,
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
