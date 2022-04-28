import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


const VoiceSettings = ({navigation}) => {
  return (
   
    <View style={styles.container}>
    
     <View style = {styles.header}>  
   
     <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
        <Image source = {require('../images/Logo.jpg')}
                  style = {{ width: 30, height: 30,   }}
        />
         
        </TouchableOpacity>   
        
        </View>
      <TouchableOpacity>
       <View style= {styles.navbar}> 
       
       <TouchableOpacity
       onPress={() => navigation.navigate('Settings')}>
      <Image source = {require('../images/BackArrow.jpg')}
                  style = {{ width: 25, height: 13, left: 1, top: 5,}}
       
        />
       </TouchableOpacity>
        <Text style = {{color: "black",}}> Back to Settings </Text>
      </View>

       

      
       
     
    <View style= {styles.container1}>
      <Text style={{fontSize: 14, fontWeight: 5, paddingBottom: 20,}}> This is where you can save and edit your voice for VPS </Text>
    
    <Text style= {{fontSize: 13, fontWeight: 3, paddingBottom: 20,}}> Speaking into the microphone will store your voice data </Text>

  <Text style= {{fontSize: 12, fontWeight: 0, paddingBottom: 30,}}> Once your data is stored, you may create your vocal password </Text>

   <Text style= {{fontSize: 23, fontWeight: 0, color: 'blue', paddingBottom: 50,}}> VPS Password Mic</Text>
   
      <TouchableOpacity
      onPress={() => 
        alert("Please speak so we can record your voice")>
        alert("Once you finish, we will ask to create a voice password by saying any word or phrase and VPS will save this as your password ")}>
           <Image source = {{uri:'https://static.vecteezy.com/system/resources/previews/004/267/711/original/microphone-icon-single-high-quality-outline-symbol-for-web-design-or-mobile-app-thin-line-sign-for-design-logo-black-outline-pictogram-on-white-background-vector.jpg'}}
                style = {{ width: 100, height: 100 }}
         />
      </TouchableOpacity>
     </View> 

    </TouchableOpacity>
        
      <StatusBar style="auto" />
    
    
    </View>
  




  );
}


const styles = StyleSheet.create({
  
  viewcontainer:{
    backgroundColor: 'cyan',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    
   },
  container1: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

    },
  navbar: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    backgroundColor: "#e8e8e8",
    height: 30, 
  },
  header: {
    backgroundColor: "#235f98",
    height: 35,
    color: "white",
  },
});

export default VoiceSettings;