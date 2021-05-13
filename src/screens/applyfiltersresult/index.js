import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  Text,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {connect} from 'react-redux';

import Longheader from '../../components/header/longheader';

import {theme} from '../../constants/theme';
import * as Actions from '../../redux/actions/index';
const App = (props) => {
  const [state, setState] = useState({});
  useEffect(() => {
    const param = props?.route?.params?.data;

    if (param) {
      setState({...state, filterResults: param});
    } else {
      setState({...state, filterResults: []});
    }
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Longheader
        headerText="Offers"
        filterIcon
        OpenFilter={() => setState({...state, showFilter: true})}
        alignItemsText="center"
        backgroundColor={theme.textColor.whiteColor}
        leftArrow={true}
        paddingLeft={10}
        navigation={props.navigation}
      />
      <ScrollView>
        <>
          {state.filterResults &&
            state.filterResults.map((val, i) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setState({...state, showOfferDetails: true, index: i});
                  }}
                  activeOpacity={1}
                  style={{width: '100%', marginVertical: 10}}>
                  <View
                    style={{
                      height: 200,
                      width: '90%',
                      borderTopRightRadius: 120,
                      borderBottomRightRadius: 120,
                      justifyContent: 'flex-end',
                      overflow: 'hidden',
                      backgroundColor: 'white',
                      elevation: 2,
                    }}>
                    <ImageBackground
                      resizeMode="cover"
                      style={{
                        height: '100%',
                        width: '100%',
                        justifyContent: 'flex-end',
                      }}
                      source={
                        val.image_path
                          ? {uri: val.image_path}
                          : require('../../assets/images/download.jpg')
                      }></ImageBackground>
                  </View>

                  <View
                    style={{
                      width: '85%',
                      alignSelf: 'center',
                      flexDirection: 'row',
                      marginTop: 20,
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: 40,
                        width: 40,
                        borderRadius: 40,
                        overflow: 'hidden',
                        borderWidth: 1,
                      }}>
                      <Image
                        style={{height: '100%', width: '100%'}}
                        resizeMode="cover"
                        source={
                          val.user.profile_url
                            ? {uri: val.user.profile_url}
                            : require('../../assets/images/avatar.png')
                        }
                      />
                    </View>
                    <View style={{marginLeft: 20}}>
                      <Text
                        style={{
                          color: theme.textColor.blackColor,
                          fontWeight: '800',
                        }}>
                        {val.title}
                      </Text>
                      <Text
                        style={{
                          color: theme.textColor.greyColor,
                          fontSize: 13,
                        }}>
                        {moment(val.created_at).format('DD-MM-YYYY')}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </>
      </ScrollView>
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
