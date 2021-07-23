import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { FastImageComponent } from '../../components/fastimage';
import { Actions } from '../../redux/actions/index';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const DrawerContent = (props) => {
  const [state, setState] = useState({
    userData: props.userData
  })
  // const profileImage = props.userData ? props?.userData?.images[0]?.image_path : null;
  let array;
  var checkUrl = typeof state.userData?.profile_url === 'string' && state?.userData?.profile_url?.search('https://meetourism.com')
  var image1WithUrl = `https://meetourism.com/storage/${state.userData?.profile_url}`
  checkUrl == -1 ? true : false
  // console.log("source", checkUrl)

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      // this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ED1C24',
        // backgroundColor: 'blue',
        marginVertical: 10,
        width: '90%',
        borderWidth: 1,
        // height: '93%',
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        opacity: 0.9,
        overflow: 'hidden',
      }}>
      <View
        style={{
          justifyContent: 'space-evenly',
          // height: '26%',
          flex: 0.24,
        }}>
        <ImageBackground
          source={require('../../assets/icons/group1.png')}
          style={{
            height: '100%',
            width: '100%',
          }}
          resizeMode="cover">
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 0,
              paddingLeft: 40,
              marginTop: 28,
            }}>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                borderWidth: 1,
                borderRadius: 50,
                overflow: 'hidden',
                borderColor: '#D47FA6',
              }}>

              <FastImageComponent
                source={state.userData?.profile_url
                  ? { uri: checkUrl ? image1WithUrl : state.userData?.profile_url }
                  : require('../../assets/icons/row.png')}
                style={{ height: '100%', width: '100%' }}
                resizeMode="cover" />
            </TouchableOpacity>
            <View style={{ flex: 1, borderWidth: 0, alignItems: 'flex-end' }}>
              <TouchableOpacity
                style={{
                  width: 70,

                  paddingRight: 20,
                  alignItems: 'center',
                }}
                onPress={() => props.navigation.closeDrawer()}>
                <FastImageComponent
                  source={require('../../assets/icons/drawer.png')}
                  style={{ height: 30, width: 50 }}
                  resizeMode="contain" />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 40,
              marginVertical: 5,
            }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              {' '}
              {props.userData?.first_name + ' ' + props.userData?.last_name}
            </Text>
          </View>
          <View
            style={{
              paddingLeft: 40,
            }}>
            <Text style={{ color: 'white', fontSize: 12 }}>
              {' '}
              @{props.userData?.username}{' '}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 0.76, paddingVertical: 3 }}>
        <ScrollView>
          {
            (array = [
              // {
              //   title: 'Admin screens',
              //   name: 'adminscreens',
              //   // icon: require('../assets/icons/64.png'),
              //   icon: require('../../assets/icons/singleuser.png'),
              // },
              {
                title: 'Home',
                name: 'Home',
                // name: props.navigation.closeDrawer(),
                type: 'FontAwesome',
                icon: require('../../assets/icons/home.png'),
              },
              {
                title: 'Match',
                name: 'Match',
                type: 'Entypo',
                // icon: require('../assets/icons/70.png'),
                icon: require('../../assets/icons/userss.png'),
              },
              // {
              //   title: 'Orders',
              //   name: 'userorders',
              //   type: 'Entypo',
              //   // icon: require('../assets/icons/70.png'),
              //   icon: require('../../assets/icons/userss.png'),
              // },
              {
                title: 'Events ',
                name: 'Calender',

                type: 'Fontisto',
                // icon: require('../assets/icons/69.png'),
                icon: require('../../assets/icons/calendar.png'),
              },
              {
                title: 'Search Location ',
                name: 'search',
                type: 'FontAwesome5',
                // icon: require('../assets/icons/68.png'),
                icon: require('../../assets/icons/search.png'),
              },
              {
                title: 'Calender ',
                name: 'Calender',
                type: 'FontAwesome5',
                // icon: require('../assets/icons/68.png'),
                icon: require('../../assets/icons/search.png'),
              },

              {
                title: 'Search for Date',
                name: 'search',

                type: 'Entypo',
                // icon: require('../assets/icons/66.png'),
                icon: require('../../assets/icons/search.png'),
              },
              {
                title: 'Offers',
                name: 'Selectoffer',
                // icon: require('../assets/icons/65.png'),
                icon: require('../../assets/icons/offers.png'),
              },
              {
                title: 'Contact Us',
                // name: 'Home',
                // icon: require('../assets/icons/64.png'),
                icon: require('../../assets/icons/singleuser.png'),
              },

              {
                title: 'About us ',
                // name: 'visitwebsite',

                type: 'FontAwesome',
                // icon: require('../assets/icons/67.png'),
                icon: require('../../assets/icons/info.png'),
              },
              {
                title: 'Language ',

                type: 'FontAwesome',
                name: 'Langauge',

                icon: require('../../assets/icons/info.png'),
              },
              {
                title: 'Log Out',
                name: 'Auth',
                // icon: require('../assets/icons/64.png'),
                icon: require('../../assets/icons/logout.png'),
              },
            ].map((val, i) => (
              <TouchableOpacity
                onPress={() => {
                  if (val.name == 'Auth') {
                    props.Logout(props.navigation);
                    signOut()
                  } else {
                    val.name && props.navigation.navigate(val.name);
                  }
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  marginTop: 5,
                  borderColor: 'black',
                  paddingVertical: 10,
                  width: '96%',
                  borderRadius: 1,
                  alignSelf: 'center',
                  borderColor: '#dc92a2',
                }}>
                <FastImageComponent
                  source={val.icon}
                  style={{ height: 15, width: 15, marginRight: 15 }}
                  resizeMode="contain"
                />

                <Text
                  style={{
                    letterSpacing: 1,

                    flex: 1,
                    // textAlign: 'left',
                    color: 'white',
                  }}>
                  {val.title}
                </Text>
              </TouchableOpacity>
            )))
          }
        </ScrollView>
      </View>
    </View>
  );
};
const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  loader: state.reducers.loader,
  image: state.reducers.images_Interests,

});

const mapDispatchToProps = {
  Logout: Actions.Logout,
};

export default connect(mapStateToProp, mapDispatchToProps)(DrawerContent);
