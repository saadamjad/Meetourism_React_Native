import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions
} from 'react-native';
import {theme} from '../../../constants/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SliderBox} from 'react-native-image-slider-box';
import Header from '../../../components/header';
import styles from './styles';
console.log('theame');

const App = (props) => {
  function _Send() {
    console.log('Sendes');
    props.navigation.navigate('chooseroute');
  }

  function _Deliver() {
    props.navigation.navigate('task');
  }

  const images = [
    require('../../../assets/images/slide1.png'),
    require('../../../assets/images/slide2.png'),
  ];
  return (
    <ImageBackground
      source={require('../../../assets/images/bg6.png')}
      style={{height: '100%', width: '100%', flex: 1}}
      resizeMode={'cover'}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Header
          text={true}
          navigation={props.navigation}
          isTransparent={true}
          //  isVisibleIcon={true}
          drawerIcon={true}
        />
        {/* ==========Slider========== */}

        <View style={styles.sliderMainView}>
          <SliderBox
            images={images}
            // parentWidth={Dimensions.get('window').width / 1}
            SliderBoxHeight={180}
            // dotColor="#FFF"
            // inactiveDotColor="#90A4AE"
            dotStyle={{display: 'none'}}
            paginationBoxVerticalPadding={0}
            autoplay
            circleLoop
            // disableOnPress={true}
            resizeMode={'contain'}
            resizeMethod={'resize'}
            paginationBoxStyle={styles.paginationBoxStyleS}
            ImageComponentStyle={styles.imagecomponentstyles}
            imageLoadingColor="#FFF"
          />
        </View>

        {/* =========2nd Portion========= */}

        <View
          style={{
            flex: 0.5,
          }}>
          {/* ==========Text row========== */}

          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={styles.rigtharrowview}>
              <AntDesign
                name="right"
                size={22}
                color={theme.iconsColor.yellow}
              />
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text
                style={styles.TextrowText}>
                What do you
              </Text>
              <Text
                style={styles.TextrowText2}>
                want to do
              </Text>
            </View>
          </View>

          {/* ==========Boxes========== */}

          <View
            style={styles.BoxesMainview}>
              {/* ================box1=========== */}
            <TouchableOpacity
              onPress={() => _Send()}
              style={styles.touchBox1}>
              <Image
                source={require('../../../assets/images/package.png')}
                style={styles.touchbox1image}
              />
              <Text
                style={styles.touchbox1Text}>
                Send {'\n'}Package
              </Text>
            </TouchableOpacity>
            {/* ===========box2=========== */}
            <TouchableOpacity
              onPress={() => _Deliver()}
              style={styles.touchbox2}>
              <Image
                source={require('../../../assets/images/box.png')}
                style={styles.touchbox2image}
              />
              <Text
                style={styles.touchbox2text}>
                Deliver {'\n'}Package
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default App;
