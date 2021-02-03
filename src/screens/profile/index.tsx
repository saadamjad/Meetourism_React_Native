import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import SliderCom from '../../components/slider';
import {theme} from '../../constants/theme';
import Header from '../../components/header';
// import { useFocusEffect } from '@react-navigation/native';

const Profile = (props) => {
  const [userType, setUserType] = useState('0');
  useEffect(() => {
    _GetUserType();
  }, []);

  const _GetUserType = async () => {
    try {
      const value = await AsyncStorage.getItem('userType');
      if (value !== null) {
        // We have data!!
        setUserType(value);

        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  return (
    <CustomView scroll>
      <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
        <ImageBackground
          style={{width: '100%', height: 400}}
          resizeMode="stretch"
          source={require('../../assets/images/profile.png')}>
          <Header
            navigation={props.navigation}
            leftArrow={true}
            isTransparent={true}
            searchIcon={true}
          />
        </ImageBackground>

        <View
          style={{
            // height: '80%',
            flex: 1,
            paddingVertical: 20,
            // paddingVertical: 10,
            backgroundColor: 'white',
            width: '100%',
            marginTop: -180,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            alignItems: 'center',
            paddingHorizontal: 30,
          }}>
          <Text
            style={{
              color: theme.secondaryColor,
              fontSize: 30,
              fontWeight: '700',
              paddingBottom: 5,
            }}>
            Patrick Tulso
          </Text>
          <View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 5}}>
            <Text style={{fontSize: 15, color: 'black', marginVertical: 5}}>
              Interests
            </Text>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',

                borderWidth: 0,
                marginVertical: 5,
              }}>
              {['Fitness', 'Beauty', 'Dogs', 'Cats', 'Laundry'].map((val) => (
                <Text style={{fontSize: 10, color: 'black'}}>{val}</Text>
              ))}
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop: 10,
                // borderWidth: 1,
              }}>
              {[
                {name: 'AGE', value: '17'},
                {name: 'Contact', value: 'xxxxxxx'},
                {name: 'City', value: 'XYZ'},
              ].map((val) => (
                <View style={{width: '25%', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#998FA2',
                      fontWeight: 'bold',
                    }}>
                    {val.name}
                  </Text>
                  <Text style={{fontSize: 13, marginTop: 10}}>{val.value}</Text>
                </View>
              ))}
            </View>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop: 15,
              }}>
              {[
                {name: 'Height', value: '5.9'},
                {name: 'Shape', value: 'slim'},
                {name: 'EyeColor', value: 'Blue'},
              ].map((val) => (
                <View style={{width: '25%', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#998FA2',
                      fontWeight: 'bold',
                    }}>
                    {val.name}
                  </Text>
                  <Text style={{fontSize: 13, marginTop: 10}}>{val.value}</Text>
                </View>
              ))}
            </View>

            <Text style={{fontSize: 15, paddingVertical: 10}}>Description</Text>
            <Text style={{lineHeight: 20, color: 'gray', fontSize: 11}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sodales pulvinar lectus eu consequat. Sed sagittis ex non purus
              porttitor, sit amet posuere justo ultrices.
            </Text>
            <Text style={{fontSize: 18, paddingVertical: 5}}>Language</Text>
            <SliderCom trackStyle="black" />
            {/* <GlobalButton
              buttonText="Dashboard"
              width="70%"
              onPress={() => props.navigation.navigate('drawer')}
            /> */}

            {/* {console.log('===props', props.route.params.status==1)} */}

            {userType == '2' || props?.route?.params?.status == 1 ? (
              <GlobalButton
                buttonText="Dashboard "
                width="70%"
                onPress={() => props.navigation.navigate('drawer')}
              />
            ) : (
              <GlobalButton
                buttonText="See Your Matches"
                width="70%"
                onPress={() => props.navigation.navigate('SeeYourMatch')}
              />
            )}
          </View>
        </View>
      </View>
    </CustomView>
  );
};

export default Profile;
