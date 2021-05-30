import React, {useState, useRef, useEffect} from 'react';

import MapView, {Marker, Polyline} from 'react-native-maps';

import {View, Text} from 'react-native';
import {Actions} from '../../redux/actions/index';

import {connect} from 'react-redux';

const GoogleMap = (props) => {
  const map = useRef();
  const loginUser = props?.userData;

  console.log('latitude==?', props?.username);
  console.log('longitude==', props?.description);

  const _onReady = () => {
    return (map.initialRegion = {
      latitude: 25.0915,
      longitude: 67.9034,
      latitudeDelta: 3.0,
      longitudeDelta: 3.0,
    });
  };

  return (
    <View
      style={{
        width: '100%',
        height: props.height ? props.height : 140,
        // flex: 1,
        shadowColor: '#000',
        // position: props.absolute ? props.absolute : null,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          overflow: 'hidden',
          borderRadius: 10,
          height: '100%',
          width: '100%',
        }}>
        <MapView
          zoomEnabled={true}
          style={{flex: 1}}
          // onMapReady={() => console.log('helloo')}
          // onMapReady={{
          //   latitude: 25.0915,
          //   longitude: 67.9034,
          //   latitudeDelta: 3.0,
          //   longitudeDelta: 3.0,
          // }}
          initialRegion={{
            //   latitude: data?.latitude ? data?.latitude : '25.0915',
            //   longitude: data?.longitude ? data?.longitude : '67.9034',
            //   latitudeDelta: 3.0,
            //   longitudeDelta: 3.0,
            latitude: 25.0915,
            longitude: 67.9034,
            latitudeDelta: 3.0,
            longitudeDelta: 3.0,
          }}>
          <MapView.Marker
            coordinate={{
              //   latitude: 25.0915,
              //   longitude: 67.9034,
              // latitude={24.8607} longitude={67.0011}

              latitude: props?.latitude ? props?.latitude : 24.8607,
              longitude: props?.longitude ? props?.longitude : 67.0011,
              latitudeDelta: 3.0,
              longitudeDelta: 3.0,
            }}
            title={props.username}
            description={props.description}
          />
          <MapView.Marker
            coordinate={{
              latitude: loginUser?.latitude
                ? parseFloat(loginUser?.latitude)
                : 25.367,
              longitude: loginUser?.longitude
                ? parseFloat(loginUser?.longitude)
                : 67.9034,
              //   latitude: props?.latitude ? props?.latitude : 25.0915,
              //   longitude: props?.longitude ? props?.longitude : 67.9034,
              latitudeDelta: 3.0,
              longitudeDelta: 3.0,
            }}
            title={props.userData?.username}
            description={props.userData?.description}
          />
          <Polyline
            coordinates={[
              {
                latitude: loginUser?.latitude
                  ? parseFloat(loginUser?.latitude)
                  : 25.367,
                longitude: loginUser?.longitude
                  ? parseFloat(loginUser?.longitude)
                  : 67.9034,
              },
              {
                latitude: props?.latitude ? props?.latitude : 24.8607,
                longitude: props?.longitude ? props?.longitude : 67.0011,
              },
            ]}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#7F0000',
              '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000',
            ]}
            strokeWidth={3}
          />

          <MapView.Circle
            center={{
              latitude: props?.latitude ? parseFloat(props?.latitude) : 24.8607,
              longitude: props?.longitude
                ? parseFloat(props?.longitude)
                : 67.0011,
              //   latitudeDelta: 3.0,
              //   longitudeDelta: 3.0,
            }}
            radius={12000}
            strokeWidth={0.9}
            strokeColor="#283747"
            fillColor="transparent"
          />
          <MapView.Circle
            center={{
              latitude: loginUser?.latitude
                ? parseFloat(loginUser?.latitude)
                : 25.367,
              longitude: loginUser?.longitude
                ? parseFloat(loginUser?.longitude)
                : 67.9034,
              //   latitude: props?.latitude ? props?.latitude : 25.0915,
              //   longitude: props?.longitude ? props?.longitude : 67.9034,
              latitudeDelta: 3.0,
              longitudeDelta: 3.0,
            }}
            radius={12000}
            strokeWidth={0.9}
            strokeColor="#283747"
            fillColor="transparent"
          />
        </MapView>

        {/* <MapView
            style={{
              height: '100%',
              width: '100%',
              borderRadius: 10,
            }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                longitude: 67.067364,
                latitude: 24.833064,
              }}
              title="Kahoo digitals"
              description="we develope mobile apps"
            />
          </MapView> */}
      </View>
    </View>
  );
};

const mapStateToProp = (state) => ({
  loader: state.reducers.loader,
  userData: state.reducers.userData,
  token: state.reducers.token,
});
const mapDispatchToProps = {
  FollowUser: Actions.FollowUser,

  // Login: Actions.Login,
};

export default connect(mapStateToProp, mapDispatchToProps)(GoogleMap);
