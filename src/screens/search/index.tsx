import Icon from 'react-native-vector-icons/Feather';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import GlobalButton from '../../components/buttons/generalbutton';
import CustomView from '../../components/customView';
import App from '../../components/header';
import {theme} from '../../constants/theme';
import Overlay from '../../components/overlays';
import AnimatedLoader from '../../components/loader';

import {connect} from 'react-redux';

import {Actions} from '../../redux/actions/index';
import {stat} from 'fs/promises';
function Search(props) {
  const token = props.token;
  const params = props?.route?.params?.data;

  const [state, setState] = useState({search: '', loader: true});
  const [overlay, setOverlay] = useState(true);
  const _Search = async () => {
    setState({...state, loader: true});
    //ye crushes screen ka name ha jis ye bata chal skhta ha header me konsi screen se aye hain
    if (params === 'crushes') {
      console.log('Crusshes screens');
      let data = 'followings';
      await props.GetAllCrushes(data, token, state.search, props.navigation);
    } else {
      props.GetMatchesData(token, state.search, props.navigation);
    }
  };

  const _GetCrushes = async () => {
    setState({...state, loader: true});
    let data = 'followings';
    let value = await props.GetAllCrushes(data, token);
    if (value) {
      setState({
        ...state,
        CrushesArray: value.map((item, i) => {
          return {
            ...item,

            name: 'Dina Meyer',
            selected: false,
            description: 'Offer updated successfull',
            date: '9 hrs',
            badge: 5,
            l: 8,
          };
        }),
        loader: false,
      });
    } else {
      setState({...state, CrushesArray: [], loader: false});
    }
  };
  useEffect(() => {
    setState({...state, loader: !state.loader});
  }, [props.matches]);
  return (
    // <Overlay toggleOverlay={props.toggleOverlay} visible={overlay}>
    <CustomView
      image={require('../../assets/images/searchImageBg.png')}
      bg={'rgba(255,255,255'}>
      <App
        leftArrow={true}
        sColor="black"
        navigation={props.navigation}
        bgColor="rgba(255,255,255, 0.7)"
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255, 0.7)',
        }}>
        <View
          style={{
            borderBottomWidth: 1,
            width: '90%',
            // borderRadius: 5,
            borderBottomColor: 'black',
            // elevation: 5,
            flexDirection: 'row',
            // backgroundColor: theme.textColor.blackColor,
          }}>
          <TextInput
            style={{
              width: '90%',
              paddingLeft: 10,
              color: 'black',
              fontSize: 18,
            }}
            value={state.search}
            placeholderTextColor="black"
            onChangeText={(text) => {
              setState({...state, search: text.replace(/^\s+|.\s+$/gm, '')});
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
                  style={{fontSize: 24, color: 'black'}}
                />
              </TouchableOpacity>
            ) : (
              <Icon
                name="search1"
                type="AntDesign"
                style={{fontSize: 18, color: 'black'}}
              />
            )}
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 20}}>
          {state.search.length >= 1 ? (
            <GlobalButton
              loader={state.loader}
              buttonText="Search"
              onPress={() => _Search()}
            />
          ) : null}
        </View>
      </View>
    </CustomView>
    // </Overlay>
  );
}

const mapStateToProp = (state) => ({
  loader: state.reducers.loader,
  matches: state.reducers.matchesData,
  alloffers: state.reducers.alloffers,
  token: state.reducers.token,
});
const mapDispatchToProps = {
  GetMatchesData: Actions.GetMatchesData,
  // Login: Actions.Login,
  GetAllOffers: Actions.GetAllOffers,
  GetAllCrushes: Actions.GetAllCrushes,
};

export default connect(mapStateToProp, mapDispatchToProps)(Search);
