import Icon from 'react-native-vector-icons/Feather';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  AsyncStorage,
  Linking,
  Platform,
  ScrollView,
} from 'react-native';
import {Actions} from '../../../redux/actions/index';

import {connect} from 'react-redux';
import MapComponent from '../../../components/googlemap';
import GlobalButton from '../../../components/buttons/generalbutton';
import {theme} from '../../../constants/theme';
import {ImageBackground} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AnimatedLoader from '../../../components/loader';
import {FastImageComponent} from '../../../components/fastimage';

let statusValue = 0;

function DetailOffer1({
  props,
  data,
  _onPress,
  status,
  token,
  DeleteOffer,
  loader,
  UpdateOfferData,
  SaveOrderData,
}) {
  const [state, setState] = useState({
    edit: false,
    offerData: {},
    loader: true,
  });
  const [test, setTest] = useState();
  let userStatus = status == 'partner' ? true : false;
  let userLatitude = data?.user?.latitude;
  let userLongitute = data?.user?.longitude;
  let username = data?.user?.username;
  let description = data?.user?.description;

  useEffect(() => {
    setTest(data);
    let timer = setTimeout(() => {
      setState({...state, loader: false});
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const _UpdateOfferData = (data) => {
    UpdateOfferData(data);
    setState({...state, edit: !state.edit, loader: false});
  };
  const _OpenGoogleMaps = () => {
    const lat = test?.user?.latitude;
    const lng = test?.user?.longitude;
    const label = '';

    const scheme = Platform.select({
      ios: 'maps:' + lat + ',' + lng + '?q=' + label,
      android: 'geo:' + lat + ' , ' + lng + ' ?q= ' + label,
    });
    // const scheme =
    //   Platform.OS === 'ios'
    //     ? 'maps:0,0?q=' + label
    //     : 'geo:0,0?q=' + label;
    const latLng = `${lat},${lng}`;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);

    // const latitude = '24.9180';
    // const longitude = '67.0971';
    // const label = 'karachi, Khi, pakistan';

    // const url = Platform.select({
    // ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
    // android: 'geo:' + latitude + ',' + longitude + '?q=' + label,
    // });

    // Linking.canOpenURL(url).then((supported) => {
    //   console.log('urlll', url);
    //   if (supported) {
    //     return Linking.openURL(url);
    //   } else {
    //     console.log('else eeeeee');
    //     const browser_url =
    //       'https://www.google.de/maps/@' +
    //       latitude +
    //       ',' +
    //       longitude +
    //       '?q=' +
    //       label;
    //     return Linking.openURL(browser_url);
    //   }
    // });
  };
  return (
    <ImageBackground
      source={require('../../../assets/images/statusbg.png')}
      style={{height: '100%', width: '100%'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {console.log('S', test?.image_path)}
        {/* {console.log('S', test?.user)} */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(00,00,00,0.8)',

            justifyContent: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              paddingHorizontal: 12,
              alignSelf: 'flex-start',
            }}
            onPress={() => _onPress()}>
            <Icon
              type="AntDesign"
              name="arrowleft"
              style={{color: 'white', fontSize: 20}}
            />
          </TouchableOpacity>
          <View
            style={{
              // borderWidth: 1,
              width: '90%',
              paddingHorizontal: 15,
              paddingVertical: 20,
              alignSelf: 'center',
              backgroundColor: 'white',
              borderRadius: 40,
              height: '90%',
              overflow: 'hidden',
            }}>
            <View style={{width: '100%', borderWidth: 0, overflow: 'hidden'}}>
              <View
                style={{
                  // width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  // borderWidth: 1,
                  height: 40,
                }}>
                <TextInput
                  value={test?.title}
                  onChangeText={(text) => setTest({...test, title: text})}
                  editable={state.edit}
                  style={{
                    color: theme.secondaryColor,
                    fontSize: 24,
                    paddingHorizontal: 10,
                    padding: 0,
                    margin: 0,
                    borderBottomWidth: state.edit ? 1 : 0,
                    borderColor: 'red',
                    fontWeight: '700',

                    // width: '70%',
                  }}
                  maxLength={20}
                />
                {userStatus ? (
                  <TouchableOpacity
                    style={{
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      height: '100%',
                      width: 50,
                    }}
                    onPress={() => {
                      state.edit
                        ? _UpdateOfferData(test)
                        : setState({...state, edit: !state.edit});
                    }}>
                    <FontAwesome5
                      name={state.edit ? 'pen' : 'edit'}
                      color="black"
                      size={20}
                    />
                  </TouchableOpacity>
                ) : null}
              </View>
              <Text
                style={{
                  color: 'black',
                  paddingBottom: 10,
                  fontSize: 16,
                  // fontWeight: '500',
                  marginTop: 20,
                  fontWeight: 'bold',
                }}>
                Description
              </Text>
              <TextInput
                value={test?.description}
                onChangeText={(text) => setTest({...test, description: text})}
                style={{
                  color: 'black',
                  paddingBottom: 25,
                  borderBottomWidth: state.edit ? 1 : 0,
                  borderColor: 'red',
                  margin: 0,
                  padding: 0,
                  fontSize: 14,
                }}
                maxLength={100}
              />

              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',

                  justifyContent: 'flex-end',
                  height: 50,
                  // width: 100,

                  alignSelf: 'flex-end',
                  borderBottomWidth: state.edit ? 1 : 0,
                  borderColor: theme.secondaryColor,
                }}>
                <TextInput
                  editable={state.edit}
                  onChangeText={(text) => setTest({...test, price: text})}
                  value={`${test?.price}`}
                  style={{
                    color: theme.secondaryColor,
                    fontWeight: '700',

                    // borderBottomWidth: state.edit ? 1 : 0,
                    borderColor: 'red',
                    fontSize: 17,
                    height: '100%',
                    // padding: 0,
                    // margin: 0,
                    marginTop: 5,
                  }}
                />
                <Text
                  style={{
                    borderColor: 'red',
                    color: theme.secondaryColor,
                    // marginLeft: 5,

                    fontSize: 15,
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: '500',
                    paddingTop: 3,
                  }}>
                  $ {''}only/-
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  height: 200,
                  paddingVertical: 20,
                }}>
                {/* <Image
                  resizeMode="cover"
                  style={{height: '100%', width: '90%'}}
                  source={
                    test?.image_path
                      ? {uri: test?.image_path}
                      : require('../../../assets/images/burgerDrink.png')
                  }
                /> */}
                <FastImageComponent
                  resizeMode="cover"
                  style={{height: '100%', width: '90%'}}
                  source={
                    test?.image_path
                      ? {uri: test?.image_path}
                      : require('../../../assets/images/burgerDrink.png')
                  }
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                // borderWidth: 1,
                justifyContent: 'flex-end',
                paddingBottom: 30,
              }}>
              {/* {statusValue == 2 ? ( */}
              <View style={{flex: 1, borderWidth: 0, paddingHorizontal: 12}}>
                <MapComponent
                  data={test}
                  height={130}
                  // latitude={userLatitude}
                  username={username}
                  description={description}
                  // longitude={userLongitute}
                />
              </View>

              {!userStatus ? (
                <GlobalButton
                  buttonText="Open Google maps"
                  height={50}
                  marginVertical={20}
                  width="66%"
                  onPress={() => {
                    _OpenGoogleMaps();
                  }}
                />
              ) : null}
              <View style={{marginVertical: 10}}></View>
              {/* {console.log('testtest===', test.user.latitude)}
              {console.log('testtest===', test.user.longitude)} */}

              {!userStatus ? (
                <GlobalButton
                  buttonText="Pay the Offer"
                  height={50}
                  marginVertical={20}
                  width="66%"
                  onPress={() => SaveOrderData(test)}
                />
              ) : null}
              <View style={{marginVertical: 10}}></View>

              {state.edit ? (
                <GlobalButton
                  buttonText="Delete this offer"
                  height={50}
                  width="66%"
                  onPress={() => DeleteOffer(data)}
                />
              ) : null}
            </View>
          </View>
        </View>
      </ScrollView>

      <AnimatedLoader status={loader} loaderMessage={'Deleting...'} />
      <AnimatedLoader status={state.loader} />
    </ImageBackground>
  );
}
// const mapStateToProp = (state) => ({
//   userData: state.reducers.userData,
//   image: state.reducers.images_Interests,

//   loader: state.reducers.loader,
// });
// const mapDispatchToProps = {
//   Signup: Actions.Signup,
//   DeleteOffer: Actions.DeleteOffer,
// };

// export default connect(mapStateToProp, mapDispatchToProps)(DetailOffer1);

export default DetailOffer1;
