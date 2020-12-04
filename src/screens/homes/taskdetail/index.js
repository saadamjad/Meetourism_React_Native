import React, {useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import GlobalButton from '../../../components/buttons/globalbutton';
import Header from '../../../components/header';
import {theme} from '../../../constants/theme';
import Toast from 'react-native-toast-message';
import Toastmessage from '../../../components/toastmessage';
import styles from './styles';

const App = (props) => {
  const [color, setColor] = useState('');
  const [offer, setOffer] = useState('');
  const [isError, setError] = useState(false);

  function _Send() {
    if (offer >= 1) {
      props.navigation.navigate('successtask');
      setError(false);
    } else if (offer == '') {
      setError(true);
      // Toastmessage('Please Make a Offer', '', 'info', 'bottom');
    } else {
      setError(true);
    }
  }
  let item = props.route.params.selectedTask;
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: '#FFF'}}>
      {console.log('NOW I GOT THE DATA', props.route.params.selectedTask)}
      <Header
        text={'Tasks'}
        isTransparent={false}
        isVisibleIcon={true}
        navigation={props.navigation}
        //   drawerIcon={true}
      />
      <View
        style={styles.mainview}>
        {/* ========== first row for profile ========== */}

        <View
          style={styles.firstrowview1}>
          <View
            style={styles.textView}>
            <Text
              style={styles.profiletext}>
              J
            </Text>
          </View>
          <View
            style={styles.profilenameview}>
            <Text
              style={styles.profileText}>
              {item.name}
            </Text>
            <Text
              style={styles.requesttext}>
              15 Request{' '}
            </Text>
          </View>
        </View>
        {/* =============dots view=========== */}
        <View
          style={styles.dotmainview}>
         {/* ===========   yellow============== */}
          <View style={{flexDirection: 'row'}}>
            <View
              style={styles.yellowdot}></View>
            <View>
              {/* ++++++++++++++++++yellow dot text View +++++++++++++++++++++++++ */}
              <Text
                style={styles.yellowdottext}>
                First Gate Dadinkowa
              </Text>
            </View>
          </View>
          {/* +++++++++++++++++++++++ midele small border ++++++++++++++++++++ */}

          <View style={{flexDirection: 'row'}}>
            <View
              style={styles.borderView}></View>
          </View>
          {/* +++++++++++++++++++++++ orange dot view ++++++++++++++++++++ */}
          <View style={{flexDirection: 'row'}}>
            <View
              style={styles.orangedot}></View>

            {/* +++++++++++++++++++++++ orangr text view ++++++++++++++++++++ */}
            <View style={{marginBottom: 30}}>
              <Text
                style={styles.orangetext}>
                Mees Palace Rayfield
              </Text>
            </View>
          </View>
        </View>

        <View style={{width: '90%', marginTop: 20}}>
          <Text
            style={styles.packagedes}>
            Package Description
          </Text>
          <Text
            style={styles.weightdes}>
            Weight:
            <Text>Heavy</Text>
          </Text>
        </View>
        {/* ++++++++++++++++++paragraph view++++++++++++++++ */}
        <View style={styles.paraview}>
          <Text
            style={styles.packagedescription}>
            3 cartons of indome noodles to be deliverd to mees place kitchen
          </Text>
        </View>
       {/* ==========offerview=========== */}
       <View
          style={styles.offerview1}>
          <View
            style={{
              ...styles.makeofferview,
              backgroundColor: color
                ? theme.bordersColor.orangeBorder
                : theme.taskColors.makeOfferBG,
            }}>
            <Text
              style={{...styles.makeoffertext,
                color: color ? '#FFF' : '#000',
              }}>
              MAKE OFFER
            </Text>
          </View>

          <TextInput
            placeholder={'0'}
            placeholderTextColor={theme.textColors.lightGray}
            keyboardType={'number-pad'}
            onChangeText={(offerText) => {
              setOffer(offerText);
            }}
            onFocus={() => setColor(true)}
            onBlur={() => setColor(false)}
            style={styles.offertextinput}
          />
        </View>
        {/* ============warning========== */}
        <View
          style={{
           ...styles.warningview,
            backgroundColor: isError ? '#ffeeee' : null,
          }}>
          <Text style={styles.warningtext}>
            {isError ? 'Please Fill Input Correctly' : null}
          </Text>
        </View>
      </View>

      {/*++++++++++++++++ last button View++++++++++++++++ */}

      <View
        style={styles.buttonview}>
        <GlobalButton title={'Send Request'} onPress={() => _Send()} />
      </View>
      {/* ========== Toast Message ========== */}
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScrollView>
  );
};
export default App;
