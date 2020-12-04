import React from 'react';
import {View, Text, ScrollView, ImageBackground} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GlobalButton from '../../../components/buttons/globalbutton';
import {theme} from '../../../constants/theme';
import styles from './styles';

const App = (props) => {
  function _Done() {
    props.navigation.navigate('home');
  }
  return (
    <View style={{flex: 1, backgroundColor: theme.bgColorWhite}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground
          source={require('../../../assets/images/bgcrop.png')}
          style={styles.imgbackground}
          resizeMode="cover">
         {/* ===============main view flex1============== */}
          <View
            style={styles.mainViewflex}>
            <View>
              <AntDesign
                name="checkcircleo"
                size={80}
                color={theme.iconsColor.white}
              />
            </View>
          </View>
        </ImageBackground>

        {/* +++++++++++++ center View ++++++++ */}

        <View
          style={styles.centermainview}>
          <View style={{marginVertical: 25}}>
            <Text
              style={styles.successtext}>
              SUCCESS
            </Text>
          </View>

          {/* +++++++++++++++ thank you View+++++++++++ */}

          <View style={styles.spacebtwn}>
            <Text
              style={styles.thankyouText}>
              Thank you for{'\n'}your request!
            </Text>
          </View>

          {/* +++++++++++++++++++paragraph +++++++++++++++++++ */}

          <View>
            <Text
              style={styles.parText}>
              Your request has been published{'\n'}and you will be notified if
              offer{'\n'}is accepted by the sender
            </Text>
          </View>
        </View>
        {/* +++++++++++++++++++ button View ++++++++++++++++++ */}
        <View
          style={styles.buttonView}>
          <GlobalButton
            title={'DONE'}
            buttonTheme={'border'}
            buttonStyle={{width: 300}}
            onPress={() => _Done()}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default App;
