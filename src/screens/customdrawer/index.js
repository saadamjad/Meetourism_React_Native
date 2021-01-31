import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Value} from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo';
const DrawerContent = (props) => {
  let array;
  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: '#ED1C24',
        width: '90%',
        borderWidth: 1,
        height: '93%',
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60,
        opacity: 0.9,
        overflow: 'hidden',
      }}>
      <View
        style={{
          justifyContent: 'space-evenly',
          height: '26%',
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
                // borderWidth: 1,
                borderRadius: 50,
                borderColor: '#D47FA6',
              }}>
              <Image
                source={require('../../assets/icons/row.png')}
                style={{height: '100%', width: '100%'}}
                resizeMode="contain"></Image>
            </TouchableOpacity>
            <View style={{flex: 1, borderWidth: 0, alignItems: 'flex-end'}}>
              <TouchableOpacity
                style={{
                  width: 70,

                  paddingRight: 20,
                  alignItems: 'center',
                }}
                onPress={() => props.navigation.closeDrawer()}>
                <Image
                  source={require('../../assets/icons/drawer.png')}
                  style={{height: 30, width: 50}}
                  resizeMode="contain"></Image>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 40,
              marginVertical: 5,
            }}>
            <Text style={{color: 'white', fontSize: 18}}>
              {' '}
              Lady in the Blue
            </Text>
          </View>
          <View
            style={{
              paddingLeft: 40,
            }}>
            <Text style={{color: '#0000005D', fontSize: 15}}>
              {' '}
              @LadyintheBlue
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{flex: 1}}>
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
              // name: 'HomeScreen',
              name: props.navigation.closeDrawer(),
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
              title: 'About us ',
              name: 'visitwebsite',

              type: 'FontAwesome',
              // icon: require('../assets/icons/67.png'),
              icon: require('../../assets/icons/info.png'),
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
              name: 'offers',
              // icon: require('../assets/icons/65.png'),
              icon: require('../../assets/icons/offers.png'),
            },
            {
              title: 'Contact Us',
              name: 'Home',
              // icon: require('../assets/icons/64.png'),
              icon: require('../../assets/icons/singleuser.png'),
            },

            {
              title: 'Log Out',
              name: 'Auth',
              // icon: require('../assets/icons/64.png'),
              icon: require('../../assets/icons/logout.png'),
            },
          ].map(
            (val, i) => (
              console.log('loop', val),
              (
                <TouchableOpacity
                  onPress={
                    () => val.name && props.navigation.navigate(val.name)

                    // i == 4
                    //   ? props.navigation.navigate('name')
                    //   : props.navigation.navigate('setting')
                  }
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
                  <Image
                    source={val.icon}
                    style={{height: 15, width: 15, marginRight: 15}}
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
              )
            ),
          ))
        }
      </View>
    </View>
  );
};
export default DrawerContent;
