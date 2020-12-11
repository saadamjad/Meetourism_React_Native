import React, { useState } from 'react';
import {View, Text, TouchableOpacity,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/header';
import GlobalButton from '../../components/buttons/generalbutton'

const App = (props) => {
  const [offer,setOffers]=useState([
    {
    image:'../../assets/images/burgerBackground.png',
     offerName:'whoper Feast' 
  },
  {
    image:'../../assets/images/burgerBackground.png',
     offerName:'whoper Feast' 
  },
  {
    image:'../../assets/images/burgerBackground.png',
     offerName:'whoper Feast' 
  },
  {
    image:'../../assets/images/burgerBackground.png',
     offerName:'whoper Feast' 
  },
  {
    image:'../../assets/images/burgerBackground.png',
     offerName:'whoper Feast' 
  }

  ])
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#241332',
      }}>
      <Header
        leftArrow={true}
        searchIcon={true}
        headerText="MATCHES"
        navigation={props.navigation}
      />
      <View
      style={{height:100,backgroundColor:'white',width:'100%',borderWidth:0}}
      > 
      <ScrollView
      contentContainerStyle={{flexGrow:1}}
      horizontal={true}
      >

        {
          offer.map((item,i)=>{
            return(
              <View 
              style={{alignItems:"center",marginHorizontal:10}}
              >
              <View
              style={{height:55,width:85,borderRadius:40,borderWidth:1,overflow:'hidden',borderColor:'red',backgroundColor:'white'}}
              >
                <Image source={require('../../assets/images/burgerBackground.png')} 
                style={{height:'100%',width:'100%'}}
                resizeMode='cover'
                />
        
              </View>
              <Text
              style={{fontSize:10,color:'#0A0A0A',marginTop:5}}
              >Whopper Feast </Text>
        </View>
           
           
            )
          })
        }
   
    </ScrollView>
      </View>
 
 <ScrollView>
  {
    offer.map((item,i)=>{
      return(
        <View
      style={{flex:1, paddingVertical:15, borderBottomWidth:1,borderColor:'white', backgroundColor:'#423050',justifyContent:'center'}}
      >
       
        <View
        
        style={{borderRadius:30,width:'88%',alignSelf:'center',backgroundColor:'white',paddingVertical:10,marginVertical:10}}
        > 
        <Text
        style={{color:'#FF0606',fontSize:26,textAlign:'center',marginTop:6}}
        > See Your Match </Text>
         <Text
        style={{color:'#707070',marginVertical:10,fontSize:14,textAlign:'center',marginTop:10,lineHeight:20}}
        >  Mutual sympathy. Do not waste  {'\n'} and write to Him</Text>
   
         <View
         
         style={{borderWidth:0,width:'100%'}}
         >
           <Image source={require('../../assets/icons/group.png')}
           style={{height:240,width:'100%'}}
           resizeMode='cover'
           />
  
         </View>
       <View  style={{paddingHorizontal:25,marginBottom:10}}>
         <Text  style={{color:'black',fontWeight:'bold',marginBottom:10}} >Description  </Text>
         <Text  style={{fontSize:12,color:'#707070'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ...  </Text>
         </View>
     <GlobalButton
     
     onPress={()=>props.navigation.navigate('matchprofile')}
     width="60%"
     buttonText="Profile"
     height={45}
     />
       <View
       style={{width:'60%',alignItems:'center',alignSelf:'center'}}
       >
  
   <Text
    style={{fontSize:17,marginVertical:5}}> Back to search</Text>
       </View>
      
        </View>
   
      </View>
  

      )
      
    })
  }
   </ScrollView>
    </View>
  );
};
export default App;
