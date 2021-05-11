import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import Header from '../../components/header';
import Button from '../../components/buttons/generalbutton';
import {Item} from 'native-base';
import * as Actions from '../../redux/actions/index';
import {connect} from 'react-redux';

const App = (props) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // _GetUserType();
    let data = props?.userData;
    setUserData({...userData, data});
    // console.log('userData++', userData?.data);
  }, []);
  useEffect(() => {
    // _GetUserType();
    let data = props?.userData;
    setUserData({...userData, data});
  }, [props.userData]);
  const Food = [
    {
      allinterests: ['Fitness', 'Buety', 'Dogs', 'Cats', 'Laundry'],
      Ifitness: 'Fitness',
      Ibeeauty: 'Beauty',
      Idogs: 'Dogs',
      Icats: 'Cats',
      Ilaundary: 'Laundary',
      Idetail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...',
      Ipassword: '*******',
      Ilocation: 'XYZ',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#423050'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} style={{flex: 1}}>
        <ImageBackground
          source={require('../../assets/images/statusbg.png')}
          style={{height: '100%', width: '100%'}}>
          <View
            style={{
              backgroundColor: 'rgba(00,00,00, 0.8)',
              flex: 1,
              // paddingVertical: 20,
            }}>
            <Header
              isTransparent={true}
              // leftArrow={true}
              navigation={props.navigation}
            />
            {Food.map((item, i) => {
              return (
                <View
                  style={{
                    flex: 1,
                    borderWidth: 0.5,
                    // borderColor: 'gray',
                    // elevation: 1,
                    backgroundColor: 'red',
                    overflow: 'hidden',
                    width: '90%',
                    alignSelf: 'center',
                    borderRadius: 40,
                    // alignItems: 'center',
                    marginVertical: 15,
                    backgroundColor: 'white',
                  }}>
                  <View
                    style={{
                      height: 120,
                      // borderWidth: 1,
                      overflow: 'hidden',
                      backgroundColor: 'white',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        width: '100%',
                        //  : 30,
                        overflow: 'hidden',
                        // borderWidth: 1,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        justifyContent: 'flex-start',
                      }}>
                      <Image
                        source={
                          props?.image?.length > 0
                            ? {uri: props.image[0]}
                            : require('../../assets/images/statusbg.png')
                        }
                        style={{
                          width: '100%',
                          height: '100%',
                        }}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                  <View
                    style={{flex: 1, borderWidth: 0, paddingHorizontal: 12}}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingVertical: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: 'red',
                          fontWeight: 'bold',
                        }}>
                        {/* Hill View Resturants */}
                        {userData?.data?.company_name}
                      </Text>
                    </View>
                    <Text style={{fontSize: 18, color: 'black'}}>
                      Interests
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        marginVertical: 10,
                      }}>
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
                        flexDirection: 'row',
                        // borderWidth: 1,
                        marginVertical: 5,
                      }}>
                      <View
                        style={{
                          width: '50%',
                          alignItems: 'flex-start',
                          paddingRight: 50,

                          justifyContent: 'center',
                        }}>
                        <Text style={{fontSize: 18}}>Contact </Text>
                        <Text
                          style={{
                            fontSize: 12,
                            marginVertical: 5,
                            alignItems: 'center',
                          }}>
                          {' '}
                          {userData?.data?.phone}{' '}
                        </Text>
                      </View>
                      <View
                        style={{
                          width: '50%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                        }}>
                        <Text style={{fontSize: 18}}>City </Text>
                        <Text style={{fontSize: 15, marginVertical: 5}}>
                          {' '}
                          {userData?.data?.city}{' '}
                        </Text>
                      </View>
                    </View>

                    <Text style={{fontSize: 14}}>Description </Text>
                    <View style={{marginVertical: 10}}>
                      <Text style={{fontSize: 10, lineHeight: 15}}>
                        {' '}
                        {userData?.data?.description}{' '}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginVertical: 10,
                      }}>
                      <View
                        style={{
                          height: 70,
                          width: 75,
                          elevation: 1,

                          marginHorizontal: 10,
                        }}>
                        <Image
                          source={require('../../assets/images/r1.png')}
                          style={{height: '100%', width: '100%'}}
                          resizeMode="cover"
                        />
                      </View>
                      <View
                        style={{
                          height: 70,
                          width: 75,
                          elevation: 1,
                          marginHorizontal: 10,
                        }}>
                        <Image
                          source={require('../../assets/images/r1.png')}
                          style={{height: '100%', width: '100%'}}
                          resizeMode="cover"
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        overflow: 'hidden',
                        // width: '70%',
                        marginVertical: 5,
                      }}>
                      <Button
                        buttonText="My Offer"
                        width={'80%'}
                        height={40}
                        onPress={() => props.navigation.navigate('SelectOffer')}
                      />
                    </View>

                    <View
                      style={{
                        overflow: 'hidden',
                        // width: '70%',
                        marginVertical: 5,
                      }}>
                      <Button
                        buttonText="Create new offer"
                        width={'80%'}
                        height={40}
                        onPress={() =>
                          props.navigation.navigate('createnewoffer')
                        }
                      />
                    </View>
                    <View
                      style={{
                        overflow: 'hidden',
                        // width: '70%',
                        marginVertical: 5,
                      }}>
                      <Button
                        width={'80%'}
                        buttonText="Dashboard"
                        height={40}
                        onPress={() => props.navigation.navigate('partnerhome')}
                      />
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProp = (state) => ({
  userData: state.reducers.userData,
  image: state.reducers.images_Interests,

  loader: state.reducers.loader,
});
const mapDispatchToProps = {
  Signup: Actions.Signup,
  Login: Actions.Login,
  Logout: Actions.Logout,
};

export default connect(mapStateToProp, mapDispatchToProps)(App);

// <>
// {Food.map((item, i) => {
//   return (
//     <View
//       style={{
//         backgroundColor: '#fff',
//         width: '90%',
//         alignSelf: 'center',
//         borderRadius: 30,
//         overflow: 'hidden',
//         marginBottom: 15,
//       }}
//       key={i}>
//       <View
//         style={{
//           height: 170,
//           borderRadius: 30,
//           overflow: 'hidden',
//           justifyContent: 'flex-start',
//         }}>
//         <Image
//           source={require('../../../src/assets/images/r3.png')}
//           style={{resizeMode: 'cover', width: '100%', height: '100%'}}
//         />
//       </View>
//       <Text
//         style={{
//           fontSize: 22,
//           fontWeight: 'bold',
//           color: '#c4320f',
//           alignSelf: 'center',
//           marginVertical: 10,
//         }}>
//         Hill View Resturants
//       </Text>
//       <View
//         style={{
//           width: '90%',
//           height: 450,
//           alignSelf: 'center',
//         }}>
//         <Text style={{fontSize: 16, fontWeight: 'bold'}}>Interests</Text>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             marginVertical: 10,
//           }}>
//           <Text style={{fontSize: 12}}> {item.Ifitness}</Text>
//           <Text style={{fontSize: 12}}>{item.Ibeeauty}</Text>
//           <Text style={{fontSize: 12}}>{item.Idogs}</Text>
//           <Text style={{fontSize: 12}}>{item.Icats}</Text>
//           <Text style={{fontSize: 12}}>{item.Ilaundary}</Text>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             // backgroundColor: 'red',
//             width: '55%',
//             justifyContent: 'space-between',
//           }}>
//           <View
//            >
//             <Text
//               style={{
//                 fontWeight: 'bold',
//                 fontSize: 18,
//                 marginBottom: 10,
//               }}>
//               Contact
//             </Text>
//             <Text style={{fontWeight: 'bold', fontSize: 12}}>
//               {item.Ipassword}
//             </Text>
//           </View>
//           <View

//             >
//             <Text
//               style={{
//                 fontWeight: 'bold',
//                 fontSize: 18,
//                 marginBottom: 10,
//               }}>
//               City
//             </Text>
//             <Text style={{fontWeight: 'bold', fontSize: 12}}>
//               {item.Ilocation}
//             </Text>
//           </View>
//         </View>
//         <Text
//           style={{
//             fontSize: 15,
//             fontWeight: 'bold',
//             marginVertical: 15,
//           }}>
//           Description
//         </Text>
//         <Text style={{textAlign: 'left', fontSize: 12, marginBottom: 10}}>
//           {item.Idetail}
//         </Text>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'center',
//             marginVertical: 15,
//           }}>
//           <View
//             style={{
//               height: 60,
//               width: 70,
//               overflow: 'hidden',
//               marginRight: 10,
//             }}>
//             <Image
//               source={require('../../../src/assets/images/r1.png')}
//               style={{height: '100%', width: '100%'}}
//               resizeMode="cover"
//             />
//           </View>
//           <View
//             style={{
//               height: 60,
//               width: 70,
//               overflow: 'hidden',
//             }}>
//             <Image
//               source={require('../../../src/assets/images/r2.png')}
//               style={{height: '100%', width: '100%'}}
//               resizeMode="cover"
//             />
//           </View>
//         </View>
//         <Button
//           buttonText="My Offer"
//           onPress={() => props.navigation.navigate('SelectOffer')}
//         />
//         <Button
//           buttonText="Create new offer"
//           onPress={() => props.navigation.navigate('createnewoffer')}
//         />

//       </View>
//     </View>
//   );
// })}
// </>
