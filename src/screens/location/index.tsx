import React, {Component, useState, useEffect, useRef} from 'react';
import {View, Image, TouchableOpacity, Text,ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';
// import Style from './style';
import CustomView from '../../components/customView';
import {theme} from '../../constants/theme';
import LongHeader from '../../components/header/longheader';
import {SwipeablePanel} from 'rn-swipeable-panel';
import MapComponent from '../../components/googlemap';
import {FastImageComponent} from '../../components/fastimage';
// import { ScrollView } from 'react-native-gesture-handler';

const Location = (props) => {
  const data = props?.route?.params?.data;
  let userLatitude = data?.latitude;
  let userLongitute = data?.longitude;
  let username = data?.username;
  let description = data?.description;
  console.log('name', username);

  useEffect(() => {
    let value = state?.data?.map((val, index) => {
      return {...val, name: data?.interests[index]?.name};
    });
    setState({...state, data: value});
  }, []);
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(true);
  const [state, setState] = useState({
    loader: false,
    data: [
      {
        // name: 'Meditation',
        time: '9:00 (25 min)',
        icon: require('../../assets/images/share.png'),

        an: false,
      },
      {
        // name: 'Running',
        time: '9:25 (47 min)',
        icon: require('../../assets/images/heartCircle.png'),

        an: false,
      },

      {
        // name: 'Yoga practice',
        time: '10:02 (1:16 hour)',
        icon: require('../../assets/images/signal.png'),

        // icon: (
        //   <FastImageComponent
        //     resizeMode="contain"
        //     source={require('../../assets/images/signal.png')}
        //   />
        // ),
        an: true,
      },
    ],
  });

  const openPanel = () => {
    console.log("runingggg")
    setIsPanelActive(true);
  };

  const closePanel = () => {
    // setIsPanelActive(false);
    setIsPanelActive(true);

  };

  const _hello = () => {
    return ( <ScrollView>

      <View
        style={{
          height: '100%',
          width: '100%',
          // backgroundColor: 'white',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          paddingVertical: 20,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        {state.data &&
          state?.data?.map((val, i) => (
            <View
              key={i}
              style={{
                paddingVertical: 20,
                marginVertical: 20,
                width: '90%',
                borderRadius: 40,
                backgroundColor: 'rgba(255,255,255,0.3)',
                flexDirection: val?.an ? 'column' : 'row',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  width: val?.an ? '80%' : 'auto',
                  flexDirection: 'row',
                  alignSelf: 'center',
                  // justifyContent: !val.an ? 'center' : 'flex-start',
                }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'transparent',
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {/* {val?.icon} */}
                  <FastImageComponent
                    resizeMode="contain"
                    source={val?.icon}
                    style={{height: 30, width: 30}}
                  />
                </View>
                <View
                  style={{
                    height: '100%',
                    marginLeft: 10,
                  }}>
                  <Text style={{color: 'rgba(255,255,255,0.7)', fontSize: 12}}>
                    {val?.time}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 15,
                      fontWeight: i == 0 ? 'bold' : '400',
                    }}>
                    {val?.name}
                  </Text>
                  {val?.an && (
                    <FastImageComponent
                      resizeMode="contain"
                      style={{marginTop: 10}}
                      source={require('../../assets/images/peoples.png')}
                    />
                  )}
                </View>
              </View>

              {!val?.an ? (
                <FastImageComponent
                  source={require('../../assets/images/Avatars.png')}
                  resizeMode="contain"
                  style={{height: 60, width: 60}}
                />
              ) : (
                <View style={{width: '100%', alignItems: 'center'}}></View>
              )}
            </View>
          ))}
      </View>
      </ScrollView>
    );
  };
  const MapComponent2=()=>{
    return  <View
    style={{flex:0.4}}
    >

  <SwipeablePanel
    fullWidth
    noBackgroundOpacity={true}
    isActive={  true}
    noBar ={true}
    onlySmall={true}
    onClose={() =>  {}}
    style={{
      backgroundColor: theme.primaryColor,
      height: '80%',
    }}>
    <_hello />
  </SwipeablePanel>
      </View>
  }

  const GoogleMapComponent=()=>{
    return   <View
    style={{width:'100%',flex:1,overflow:'hidden',position:'absolute',height:'100%'}}
    >
    <MapComponent
      height={'100%'}
      width={'100%'}
      // latitude={24.8607} longitude={67.0011}
      
      latitude={userLatitude}
      username={username}
      description={description}
      longitude={userLongitute}
      />
    
      </View>
  }

  return (
    <CustomView bg={'transparent'} >
      
      <LongHeader
        navigation={props.navigation}
        leftArrow={true}
        // searchIcon={true}
        backgroundColor={'transparent'}
        headerText="Location"
      />
      {GoogleMapComponent()}
    <View style={{flex:1,justifyContent:'flex-end'}} >

   <View style={{flex:0.5,borderTopLeftRadius:40,borderTopRightRadius:40,backgroundColor:theme.primaryColor}} >
         

    <_hello />
    </View>

       </View> 
    </CustomView>
  );
};

export default Location;
