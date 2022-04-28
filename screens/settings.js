import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';

import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ImageBackground,
  Switch,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';







const Settings = ({navigation}) => {

  const [isEnabled,setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled (previousState=>!previousState)
  
  const [isEnabled1,setIsEnabled1] = useState(false);
  const togSwitch = () => setIsEnabled1 (previousState=>!previousState)  

  
  
  return (  
  <View style={styles.container}> 
    
       <View style = {styles.header}>  
     <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
        <Image source = {require('../images/Logo.jpg')}
                  style = {{ width: 35, height: 30,   }}
        />
         
        </TouchableOpacity>   
        <Text style = {{color: "black", }}> Settings </Text>
        </View>
      <View style={styles.navbar}>
      
        
        
        
         <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
           <Icon name="chevron-left" size ={24}/> 
       
        </TouchableOpacity>  
     <Text style = {{color: "black", }}>  </Text>
        
      </View>
    
      

     <TouchableOpacity
     onPress={() => navigation.navigate('Profile')}>
    <View style = {styles.settingsText}>
      <Text> Profile </Text>
      <hr style = {{backgroundColor: "white",  width: 300,}}/> 
    </View>
    </TouchableOpacity> 
      

    <View style = {styles.settingsText}>
      <View style={{ flexDirection: "row", justifyContent:"space-between" }}>
      <Text> Mic On/Off  </Text>

      
      <Switch 
      style = {styles.switchStyle}
      trackColor = {{false: "grey", true: "green",}}
      thumbColor = {isEnabled?"grey":"grey"}
      ios_backgroundColor = "blue"
       onValueChange = {toggleSwitch}
       value = {isEnabled}
        /> 
       

      </View>
      <hr style = {{backgroundColor: "white",  width: 300,}}/> 
    </View>



      
      <View style = {styles.settingsText}
      /*onPress={() => 
      }*/>
        <View style={{ flexDirection: "row", justifyContent:"space-between" }}>
         <Text> Dark Mode </Text> 

      <Switch 
      style = {styles.switchStyle}
      trackColor = {{false: "grey", true: "green",}}
      thumbColor = {isEnabled1?"grey":"grey"}
      onValueChange = {togSwitch}
      value = {isEnabled1}
        /> 
        </View>

         <hr style = {{backgroundColor: "white",  width: 300,}}/> 
      </View>
      
      
      <StatusBar style="auto"/>
    
  </View>
    
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    

    
    backgroundColor: "white",
    color: "black",
  },
 
  settingsText: {
     paddingTop: 70,
     margin: 10,
     height:50, 
     width:250,
    
     borderColor: 'black',
     
     fontSize: 14
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

export default Settings;


