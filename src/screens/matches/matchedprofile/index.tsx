import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView, ImageBackground} from 'react-native';
import GlobalButton from '../../../components/buttons/generalbutton';
import CustomView from '../../../components/customView';
import SliderCom from '../../../components/slider';
import {theme} from '../../../constants/theme';
import Header from '../../../components/header'

const Profile = (props) => {
  return (
    <CustomView scroll>
      <View style={{flex: 1, alignItems: 'center', width: '100%'}}>
        <ImageBackground
          style={{width: '100%', height: 400}}
          resizeMode="stretch"
          source={require('../../../assets/images/profile.png')}
        >
   <Header
        leftArrow={true}
        isTransparent={true}
        searchIcon={true}
        />
        </ImageBackground>
     
        <View
          style={{
            // height: '80%',
            flex: 1,
            paddingVertical: 20,
            // paddingVertical: 10,
            backgroundColor: '#F1F0F2',
            width: '100%',
            marginTop: -180,
            // borderTopLeftRadius: 40,
            borderTopRightRadius: 80,
            // alignItems: 'center',
            paddingHorizontal: 20,
            
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 25,
              fontWeight: '700',
            //   paddingBottom: 10,
            }}>
            Peter
          </Text>
          <Text style={{fontSize: 15,color:'#998FA2'}}>San Francisco, CA</Text>
          <Text style={{fontSize: 13,color:'#998FA2'}}>20 years</Text>
         <View
         style={{width:'100%',overflow:'hidden',flexDirection:'row', height:100,alignSelf:'center',borderRadius:40,marginVertical:10,backgroundColor:'white'}}
         >
             <TouchableOpacity style={{width:'33.33%',borderWidth:0,alignItems:'center',justifyContent:'center'}}
             
             onPress={()=>props.navigation.navigate('allchat')}
             
             >
                 <Image source={require('../../../assets/icons/Chat.png')}
                 style={{height:20,width:20,tintColor:'gray'}}
                 resizeMode="contain"
                 />
                 <Text style={{fontSize:12,marginTop:5}} >Chat  </Text>
              
             </TouchableOpacity>
             <TouchableOpacity style={{width:'33.33%',borderWidth:0,alignItems:'center',justifyContent:'center'}} 
             
            //  onPress={()=>props.navigation.navigate('allchat')}
             
             >

                 <Image source={require('../../../assets/icons/singleuser.png')}
                 style={{height:20,width:20,tintColor:'purple'}}
                 resizeMode="contain"
                 />
                 <Text style={{fontSize:12,marginTop:5}} >Gallery  </Text>
             </TouchableOpacity>
             <TouchableOpacity style={{width:'33.33%',borderWidth:0,alignItems:'center',justifyContent:'center'}} >

                 <Image source={require('../../../assets/icons/userss.png')}
                 style={{height:20,width:20,tintColor:'purple'}}
                 resizeMode="contain"
                 />
                 <Text style={{fontSize:12,marginTop:5}} >Follow  </Text>
             </TouchableOpacity>

         </View>
       
       <View  
       
       style={{width:'100%',overflow:'hidden',borderRadius:40,marginVertical:10,backgroundColor:'white'}}
     >
    <View style={{flex:1,paddingHorizontal:30,paddingVertical:20}}>
    <Text style={{fontSize: 15,color:'black',marginVertical:5}}>Interests</Text>


            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                
                borderWidth:0,marginVertical:5

              }}>
              {['Fitness', 'Beauty', 'Dogs', 'Cats', 'Laundry'].map((val) => (
                <Text style={{fontSize: 10,color:'black'}}>{val}</Text>
              ))}
            </View>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop: 15,
              }}>
              {[
                {name: 'AGE', value: '17'},
                {name: 'Contact', value: 'xxxxxxx'},
                {name: 'City', value: 'XYZ'},
              ].map((val) => (
                <View style={{width: '25%', alignItems: 'center'}}>
                  <Text style={{fontSize: 15,color:'#998FA2',fontWeight:'bold' }}>{val.name}</Text>
                  <Text style={{fontSize: 13, marginTop: 10}}>{val.value}</Text>
                </View>
              ))}
            </View>
          
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                marginTop: 15,
              }}>
              {[
             {name: 'Height', value: '5.9'},
             {name: 'Shape', value: 'slim'},
             {name: 'EyeColor', value: 'Blue'},
              ].map((val) => (
                <View style={{width: '25%', alignItems: 'center'}}>
                  <Text style={{fontSize: 15,color:'#998FA2',fontWeight:'bold'}}>{val.name}</Text>
                  <Text style={{fontSize: 13, marginTop: 10}}>{val.value}</Text>
                </View>
              ))}
            </View>
         
            <Text style={{fontSize: 15, paddingVertical: 10}}>Description</Text>
            <Text style={{lineHeight: 20,color:'gray',fontSize:11}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sodales pulvinar lectus eu consequat. Sed sagittis ex non purus
              porttitor, sit amet posuere justo ultrices.
            </Text>
            <Text style={{fontSize: 18, paddingVertical: 10,}}>Language</Text>
            <SliderCom />
        
          </View>
      
       </View>
      
        </View>
      </View>
    </CustomView>
  );
};

export default Profile;
