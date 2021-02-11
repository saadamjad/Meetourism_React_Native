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
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import SliderCom from '../../../components/slider';
import {theme} from '../../../constants/theme';
import Header from '../../../components/header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Gallery from '../../../components/gallery';
const Profile = (props) => {
  const [buttonHide, setButtonHide] = useState(false);
  const [userType, setUserType] = useState('0');

  useEffect(() => {
    _GetUserType();

    console.log(
      '==================================================================',
    );
    // console.log('props?.route?.params?.dashboard', props?.route);

    if (props?.route?.params) {
      console.log('andr agyaa ha ', props?.route?.params);
      setButtonHide(true);
    }
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
  const _Gallery = () => {
    // return <Gallery />;
    props.navigation.navigate('Gallery');
  };

  return (
    <CustomView scroll>
      <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
        <ImageBackground
          style={{width: '100%', height: 400}}
          resizeMode="stretch"
          source={require('../../../assets/images/profile.png')}>
          <Header
            navigation={props.navigation}
            leftArrow={true}
            isTransparent={true}
            // searchIcon={true}
          />
        </ImageBackground>

        <View
          style={{
            // height: '80%',
            flex: 1,
            paddingVertical: 20,
            // paddingVertical: 10,
            backgroundColor: '#F1F0F2',
            width: '100%',
            marginTop: -180,
            // borderTopLeftRadius: 40,
            borderTopRightRadius: 70,
            // alignItems: 'center',
            paddingHorizontal: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: '700',
              //   paddingBottom: 10,
            }}>
            Peter
          </Text>
          <Text style={{fontSize: 15, color: '#9E94A6'}}>
            San Francisco, CA
          </Text>
          <Text style={{fontSize: 13, color: '#9E94A6'}}>20 years</Text>
          <View
            style={{
              width: '100%',
              overflow: 'hidden',
              flexDirection: 'row',
              height: 100,
              alignSelf: 'center',
              borderRadius: 40,
              elevation: 1,
              marginVertical: 10,
              backgroundColor: 'white',
            }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: '33.33%',
                borderWidth: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => props.navigation.navigate('innerchat')}>
              <Image
                source={require('../../../assets/images/path.png')}
                style={{height: 20, width: 20, tintColor: '#9E94A6'}}
                resizeMode="contain"
              />
              <Text style={{fontSize: 12, marginTop: 7, color: '#8F989D'}}>
                Chat{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: '33.33%',
                borderWidth: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              //  onPress={()=>props.navigation.navigate('allchat')}
              onPress={() =>
                // alert('In process ')
                // <Gallery />
                _Gallery()
              }>
              {/* <Image
                source={require('../../../assets/icons/singleuser.png')}
                style={{height: 20, width: 20, tintColor: 'purple'}}
                resizeMode="contain"
              /> */}
              <Feather name="users" color="#8A56AC" size={20} />
              <Text style={{fontSize: 12, marginTop: 7, color: '#8F989D'}}>
                Gallery{' '}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: '33.33%',
                borderWidth: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome name="user" color="#8A56AC" size={20} />
              {/* <Image
                source={require('../../../assets/icons/userss.png')}
                style={{height: 20, width: 20, tintColor: 'purple'}}
                resizeMode="contain"
              /> */}
              <Text style={{fontSize: 12, marginTop: 7, color: '#8F989D'}}>
                Follow{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '100%',
              overflow: 'hidden',
              borderRadius: 20,
              elevation: 1,
              marginVertical: 10,
              backgroundColor: 'white',
            }}>
            <View style={{flex: 1, paddingHorizontal: 30, paddingVertical: 20}}>
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
                  marginTop: 15,
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
                    <Text style={{fontSize: 13, marginTop: 10}}>
                      {val.value}
                    </Text>
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
                    <Text style={{fontSize: 13, marginTop: 10}}>
                      {val.value}
                    </Text>
                  </View>
                ))}
              </View>

              <Text style={{fontSize: 15, paddingVertical: 10}}>
                Description
              </Text>
              <Text style={{lineHeight: 20, color: 'gray', fontSize: 11}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                sodales pulvinar lectus eu consequat. Sed sagittis ex non purus
                porttitor, sit amet posuere justo ultrices.
              </Text>
              <Text style={{fontSize: 18, paddingVertical: 10}}>Language</Text>
              <SliderCom trackStyle="black" />
              {console.log('--------', props.navigation)}
              {buttonHide || userType == '2' ? null : (
                <GlobalButton
                  buttonText="Dashboard"
                  width="70%"
                  onPress={() => props.navigation.replace('drawer')}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </CustomView>
  );
};

export default Profile;
