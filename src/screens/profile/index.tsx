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
import {connect} from 'react-redux';

import * as Actions from '../../redux/actions/index';

const Profile = (props) => {
  const [userType, setUserType] = useState('0');
  const [userData, setUserData] = useState({});
  // useEffect(() => {
  //   // _GetUserType();
  //   let data = props?.userData;
  //   setUserData({...userData, data});
  // }, []);
  useEffect(() => {
    // _GetUserType();
    // let data = props.editSetting ? props.userData.data : props?.userData;
    let data = props?.userData;
    // setUserData(data);
    setUserData({...userData, data});
  }, [props.userData]);

  return (
    <CustomView scroll
    bg="white"
    >
      <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
        <ImageBackground
          style={{width: '100%', height: 400}}
          resizeMode="stretch"
          source={
            props.userData?.profile_url
              ? {uri: props.userData?.profile_url}
              : require('../../assets/images/profile.png')
          }>
          <Header
            navigation={props.navigation}
            leftArrow={true}
            isTransparent={true}
            // searchIcon={true}
          />
        </ImageBackground>

        <View
          style={{
            flex: 1,
         
            backgroundColor: 'white',
            width: '100%',
            marginTop: -180,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            alignItems: 'center',
            overflow:'hidden'
          }}>
            <View
            style={{flex:1,
            paddingVertical: 10,
           width:'100%',alignSelf:'center'}}
            >

          <Text
            style={{
              color: theme.secondaryColor,
              fontSize: 30,
              alignSelf:'center',

              fontWeight: '700',
              paddingBottom: 5,
            }}>
            {userData?.data?.username}

            {/* patric pulso */}
          </Text>
          <View style={{flex: 1, paddingHorizontal: 20, paddingVertical: 5}}>
            <Text style={{fontSize: 15, color: 'black', marginVertical: 5}}>
              Interests
            </Text>
            <View style={{flexDirection: 'row',
           flexWrap:'wrap',}}>
              {userData?.data?.interests &&
                userData?.data.interests.map((value, i) => {
                  console.log('values', value.name);
                  return (
                    <View
                      style={{
                        width: '20%',
                        paddingVertical: 10,
                       

                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 10}}>{value.name}</Text>
                    </View>
                  );
                })}
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
                {name: 'AGE', value: userData.data?.age},
                {name: 'Contact', value: userData.data?.phone},
                {name: 'City', value: userData.data?.city},
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
                {name: 'Height', value: userData.data?.height},
                {name: 'Shape', value: userData.data?.weight},
                {name: 'EyeColor', value: userData.data?.eye_color},
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
              {userData.data?.description}
            </Text>
            <Text style={{fontSize: 18, paddingVertical: 5}}>Language</Text>
            <SliderCom trackStyle="black" />

            {userType == '2' || props?.route?.params?.status == 1 ? (
              <GlobalButton
                buttonText="Dashboard"
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
      </View>
    </CustomView>
  );
};

const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  image: state.reducers.images_Interests,
  loader: state.reducers.loader,
  editSetting: state.reducers.editSetting,
});
const mapDispatchToProps = {
  Signup: Actions.Signup,
  Login: Actions.Login,
};

export default connect(mapStateToProp, mapDispatchToProps)(Profile);
