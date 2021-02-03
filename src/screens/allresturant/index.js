import React from 'react';
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
const App = (props) => {
  const Food = [
    {
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
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          isTransparent={true}
          leftArrow={true}
          navigation={props.navigation}
        />
        {Food.map((item, i) => {
          return (
            <View
              style={{
                backgroundColor: '#fff',
                width: '90%',
                // height: 680,
                // backgroundColor: 'red',
                alignSelf: 'center',
                borderRadius: 30,
                overflow: 'hidden',
                marginBottom: 15,
              }}
              key={i}>
              <View
                style={{
                  //   backgroundColor: 'blue',
                  height: 170,
                  borderRadius: 30,
                  overflow: 'hidden',
                  justifyContent: 'flex-start',
                  //   position:"absolute",
                  //   zIndex:0.9,
                  //   top:50
                }}>
                <Image
                  source={require('../../../src/assets/images/r3.png')}
                  style={{resizeMode: 'cover', width: '100%', height: '100%'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: '#c4320f',
                  alignSelf: 'center',
                  marginVertical: 10,
                }}>
                Hill View Resturant
              </Text>
              <View
                style={{
                  //   backgroundColor: 'yellow',
                  width: '90%',
                  height: 450,
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                  Interests
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                  }}>
                  <Text style={{fontSize: 12}}> {item.Ifitness}</Text>
                  <Text style={{fontSize: 12}}>{item.Ibeeauty}</Text>
                  <Text style={{fontSize: 12}}>{item.Idogs}</Text>
                  <Text style={{fontSize: 12}}>{item.Icats}</Text>
                  <Text style={{fontSize: 12}}>{item.Ilaundary}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // backgroundColor: 'red',
                    width: '55%',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={
                      {
                        //   backgroundColor: 'teal'
                      }
                    }>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        marginBottom: 10,
                      }}>
                      Contact
                    </Text>
                    <Text style={{fontWeight: 'bold', fontSize: 12}}>
                      {item.Ipassword}
                    </Text>
                  </View>
                  <View
                    style={
                      {
                        //   backgroundColor: 'teal'
                      }
                    }>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        marginBottom: 10,
                      }}>
                      City
                    </Text>
                    <Text style={{fontWeight: 'bold', fontSize: 12}}>
                      {item.Ilocation}
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginVertical: 15,
                  }}>
                  Description
                </Text>
                <Text
                  style={{textAlign: 'left', fontSize: 12, marginBottom: 10}}>
                  {item.Idetail}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginVertical: 15,
                  }}>
                  <View
                    style={{
                      height: 60,
                      width: 70,
                      overflow: 'hidden',
                      marginRight: 10,
                    }}>
                    <Image
                      source={require('../../../src/assets/images/r1.png')}
                      style={{height: '100%', width: '100%'}}
                      resizeMode="cover"
                    />
                  </View>
                  <View
                    style={{
                      height: 60,
                      width: 70,
                      overflow: 'hidden',
                    }}>
                    <Image
                      source={require('../../../src/assets/images/r2.png')}
                      style={{height: '100%', width: '100%'}}
                      resizeMode="cover"
                    />
                  </View>
                </View>
                <Button
                  buttonText="My Offer"
                  onPress={() => props.navigation.navigate('SelectOffer')}
                />
                <Button
                  buttonText="Create new offer"
                  onPress={() => props.navigation.navigate('createOffer')}
                />

                {/* ============issy upper yellow============== */}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
