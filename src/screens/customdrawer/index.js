import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
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
      }}>
      <View
        style={{
          // borderWidth: 1,
          justifyContent: 'space-evenly',
          paddingLeft: 30,
          height: '26%',
        }}>
        <View style={{flexDirection: 'row', borderWidth: 0}}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              borderWidth: 1,
              borderRadius: 50,
              borderColor: '#D47FA6',
            }}></TouchableOpacity>
          <View style={{flex: 1, borderWidth: 0, alignItems: 'flex-end'}}>
            <TouchableOpacity
              style={{
                width: 70,

                paddingRight: 20,
                alignItems: 'center',
              }}>
              <Entypo name="cross" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{color: 'white'}}> Lady in the Blue</Text>
        </View>
        <View>
          <Text style={{color: '#0000005D'}}> @LadyintheBlue</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        {
          (array = [
            {
              title: 'Home',
              name: 'HomeScreen',
              type: 'FontAwesome',
              icon: require('../../assets/icons/trolley.png'),
            },
            {
              title: 'Match',
              name: 'OurProducts',
              type: 'Entypo',
              // icon: require('../assets/icons/70.png'),
              icon: require('../../assets/icons/trolley.png'),
            },
            {
              title: 'Events ',
              name: 'Home',

              type: 'Fontisto',
              // icon: require('../assets/icons/69.png'),
              icon: require('../../assets/icons/trolley.png'),
            },
            {
              title: 'Search Location ',
              name: 'Home',
              type: 'FontAwesome5',
              // icon: require('../assets/icons/68.png'),
              icon: require('../../assets/icons/trolley.png'),
            },

            {
              title: 'About us ',
              name: 'visitwebsite',

              type: 'FontAwesome',
              // icon: require('../assets/icons/67.png'),
              icon: require('../../assets/icons/trolley.png'),
            },
            {
              title: 'Search for Date',
              name: 'Home',
              type: 'Entypo',
              // icon: require('../assets/icons/66.png'),
              icon: require('../../assets/icons/trolley.png'),
            },
            {
              title: 'Offers',
              name: 'Home',
              // icon: require('../assets/icons/65.png'),
              icon: require('../../assets/icons/trolley.png'),
            },
            {
              title: 'Contact Us',
              name: 'Home',
              // icon: require('../assets/icons/64.png'),
              icon: require('../../assets/icons/trolley.png'),
            },
            {
              title: 'About Us',
              name: 'login',
              icon: require('../../assets/icons/trolley.png'),
            },
            {
              title: 'Log Out',
              name: 'Home',
              // icon: require('../assets/icons/64.png'),
              icon: require('../../assets/icons/trolley.png'),
            },
          ].map(
            (val, i) => (
              console.log('loop', val),
              (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate(val.name ? val.name : '')
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
                    style={{height: 15, width: 15, marginRight: 10}}
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
