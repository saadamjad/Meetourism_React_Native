import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import App from '../../components/header';
import {theme} from '../../constants/theme';
import Overlay from '../../components/overlays';
import * as Animatable from 'react-native-animatable';
function Search(props) {
  const [state, setState] = useState({search: ''});
  const [overlay, setOverlay] = useState(true);
  return (
    // <Overlay toggleOverlay={props.toggleOverlay} visible={overlay}>
    <CustomView
      image={require('../../assets/images/searchImageBg.png')}
      bg={'rgba(255,255,255'}
      scroll>
      <App
        leftArrow={true}
        sColor="black"
        navigation={props.navigation}
        bgColor="rgba(255,255,255, 0.7)"
      />
      <View
        style={{
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255, 0.7)',
        }}>
        <View
          style={{
            borderBottomWidth: 1,
            width: '90%',
            // borderRadius: 5,
            borderBottomColor: 'white',
            // elevation: 5,
            flexDirection: 'row',
            // backgroundColor: theme.textColor.whiteColor,
          }}>
          <TextInput
            style={{
              width: '90%',
              paddingLeft: 10,
              color: 'white',
              fontSize: 18,
            }}
            value={state.search}
            placeholderTextColor="white"
            onChangeText={(text) => {
              setState({...state, search: text});
            }}
            placeholder="Search"
          />
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {state.search.length >= 1 ? (
              <TouchableOpacity
                onPress={() => setState({...state, search: ''})}>
                <Icon
                  name="circle-with-cross"
                  type="Entypo"
                  style={{fontSize: 24, color: theme.textColor.lightWhiteColor}}
                />
              </TouchableOpacity>
            ) : (
              <Icon
                name="search1"
                type="AntDesign"
                style={{fontSize: 18, color: theme.textColor.whiteColor}}
              />
            )}
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 20}}>
          {state.search.length >= 1 ? (
            <GlobalButton buttonText="Search" />
          ) : null}
        </View>
      </View>
    </CustomView>
    // </Overlay>
  );
}
export default Search;
