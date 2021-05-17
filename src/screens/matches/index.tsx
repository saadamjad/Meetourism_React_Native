import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/header';
import GlobalButton from '../../components/buttons/generalbutton';
import {theme} from '../../constants/theme';
import AnimatedLoader from '../../components/loader';

import {connect} from 'react-redux';

import {Actions} from '../../redux/actions/index';
const App = (props) => {
  const [buttonHide, setButtonHide] = useState(false);
  const token = props.token;
  const offers = props.alloffers;

  const [state, setState] = useState({
    offers: [],
    loader: false,
    matches: [],
  });

  useEffect(() => {
    _GetMatchesData(), props.GetAllOffers(null, token);
  }, []);
  useEffect(() => {
    setState({...state, matches: props.matches});
  }, [props.matches]);

  const _GetMatchesData = async () => {
    setState({...state, loader: true});
    // '133|7YAjWfsLSQqRW4tI1VURjA4z1NAV7Sn2XyjV9Z7h',
    let value = await props.GetMatchesData(token);
    setState({...state, loader: false, matches: props.matches});
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#241332',
      }}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Header
          leftArrow={true}
          searchIcon={true}
          sColor={'black'}
          height={40}
          navigation={props.navigation}
        />
        <View
          style={{
            // height: 100,
            backgroundColor: 'white',
            // paddingVertical: 7,
            paddingBottom: 15,
            width: '100%',
            borderWidth: 0,
            marginBottom: 2,
          }}>
          <ScrollView contentContainerStyle={{flexGrow: 1}} horizontal={true}>
            {props.alloffers &&
              props.alloffers.map((item, i) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('offerdescriptions', {
                        index: i,
                      });
                    }}
                    style={{alignItems: 'center', marginHorizontal: 10}}>
                    <View
                      style={{
                        height: 55,
                        width: 85,
                        borderRadius: 40,
                        borderWidth: 1,
                        overflow: 'hidden',
                        borderColor: 'red',
                        backgroundColor: 'white',
                      }}>
                      <Image
                        source={
                          item.image_path
                            ? {uri: item.image_path}
                            : require('../../assets/images/burgerBackground.png')
                        }
                        style={{height: '100%', width: '100%'}}
                        resizeMode="cover"
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 10,
                        color: '#0A0A0A',
                        marginTop: 5,
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                );
              })}
          </ScrollView>
        </View>

        {state?.matches?.length > 0
          ? state.matches.map((item, i) => {
              {
                console.log('item>>>', item.interests);
              }
              return (
                <View
                  style={{
                    flex: 1,
                    paddingVertical: 15,
                    borderBottomWidth: 1.5,
                    borderColor: theme.primaryColor1,
                    backgroundColor: theme.primaryColor,
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      borderRadius: 30,
                      width: '88%',
                      alignSelf: 'center',
                      backgroundColor: 'white',
                      paddingVertical: 10,
                      marginVertical: 10,
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,

                      elevation: 5,
                    }}>
                    <Text
                      style={{
                        color: '#FF0606',
                        fontSize: 26,
                        textAlign: 'center',
                        marginTop: 6,
                      }}>
                      {' '}
                      See Your Match{' '}
                    </Text>
                    <Text
                      style={{
                        color: '#707070',
                        marginVertical: 10,
                        fontSize: 14,
                        textAlign: 'center',
                        marginTop: 10,
                        lineHeight: 20,
                      }}>
                      {' '}
                      Mutual sympathy. Do not waste {'\n'} and write to Him/her
                    </Text>

                    <View style={{borderWidth: 0, width: '100%'}}>
                      <Image
                        source={require('../../assets/icons/group.png')}
                        style={{height: 240, width: '100%'}}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={{paddingHorizontal: 25, marginBottom: 10}}>
                      <Text
                        style={{
                          color: 'black',
                          fontWeight: 'bold',
                          marginBottom: 10,
                        }}>
                        Description{' '}
                      </Text>
                      <Text style={{fontSize: 12, color: '#707070'}}>
                        {item.description}
                      </Text>
                    </View>

                    {/* {buttonHide ? ( */}
                    {/* <View style={{overflow: 'hidden'}}>
                    <GlobalButton
                      onPress={() =>
                        props.navigation.navigate('matchprofile', {
                          // buttonHide: true,
                          data: item,
                        })
                      }
                      width="48%"
                      buttonText="Profile"
                      height={40}
                    />
                  </View> */}
                    {/* ) : ( */}
                    <View style={{overflow: 'hidden'}}>
                      <GlobalButton
                        onPress={() =>
                          props.navigation.navigate('matchprofile', {
                            data: item,
                          })
                        }
                        width="48%"
                        buttonText="Profile"
                        height={40}
                      />
                    </View>
                    {/* )} */}

                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('search')}
                      style={{
                        width: '60%',
                        alignItems: 'center',
                        alignSelf: 'center',
                      }}>
                      <Text style={{fontSize: 15, marginVertical: 5}}>
                        {' '}
                        Back to search
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })
          : null}
      </ScrollView>

      <AnimatedLoader
        status={state.loader}
        loaderMessage={`Getting Matches...`}
      />
    </View>
  );
};
const mapStateToProp = (state) => ({
  loader: state.reducers.loader,
  matches: state.reducers.matchesData,
  alloffers: state.reducers.alloffers,
  token: state.reducers.token,
});
const mapDispatchToProps = {
  GetMatchesData: Actions.GetMatchesData,
  GetAllOffers: Actions.GetAllOffers,
  // Login: Actions.Login,
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
