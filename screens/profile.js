import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState,} from 'react';

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
import Icon from 'react-native-vector-icons/Ionicons';
import { registerVersion } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword, signOut,} from 'firebase/auth'
import  firebase  from '../firebase/firebase';




const profile = ({navigation}) => {

  const auth = getAuth();
  const user = auth.currentUser;
  


  const handlesLogin = () => {
    signOut(auth)
    .then(() => {
        console.log('logged out');
        navigation.replace('Login');
    })
    .catch((error) => {
        console.log(error);
    });

  }

 
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
              <Icon name = "chevron-back-outline" size ={24} style={{paddingTop:3}}/>
        </TouchableOpacity>  
     
        
      </View>

      
      <View style= {{justifyContent: "center", alignItems: "center", paddingTop:30,}}>
          <Icon name= "person-circle-outline" size={180}/>
      </View>

      <Text style= {{paddingTop: 60}}>Name :   </Text>
      <Text style= {{paddingTop: 30}}>Email : {user.email} </Text>
      <Text style= {{paddingTop:10}}> </Text>
      <View style={{flexDirection:"row"}}>
        <Text>Loging Out : </Text>
        <TouchableOpacity
        onPress={() => handlesLogin()}
      >
        <Text style={{color: "red"}}>Log Out</Text>
      </TouchableOpacity>
      </View>
         
  
 
      
      <StatusBar style="auto" />
    
  </View>
    
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
  },
 
  image: {
     borderRadius: 50,
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

export default profile;