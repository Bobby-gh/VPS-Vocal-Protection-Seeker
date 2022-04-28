import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Audio } from 'expo-av';

const HomeScreen = ({navigation}) => {

   const [recording, setRecording] = React.useState();

  async function startRecording() {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      }); 
      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync(
         Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  return (
    <View style={styles.container}>
     <View style = {styles.header}>   
     <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
        <Image source = {require('../images/Logo.jpg')}
                  style = {{ width: 35, height: 30, borderRadius:50,  }} 
        />
         
        </TouchableOpacity>   
        
        </View>
      <View style={styles.navbar}>
        <View>
            <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}>
               <Icon name="settings" size ={20}/>
            </TouchableOpacity>
            
        </View>
      </View>
      
      <View style={styles.container1} >
        <Text style= {{color: "blue",fontWeight: 'bold'}}> SECURING YOUR PHONE </Text>
        <Text style= {{fontSize: 12, paddingBottom: 10, }}> Click the Mic to set up your Vocal Recogntion</Text>
        
        <Text style= {{fontSize: 18, paddingBottom: 10, }}> </Text>
        <Text style= {{fontSize: 20,}}></Text> 
        <Image source = {require('../images/Logo.jpg')}
                  style = {{ width: 115, height: 115, borderRadius: 10 }}
        />
        
        <View>
        <Text style={{fontSize: 20, paddingTop:40}}>
         </Text>
         <TouchableOpacity
         onPress={recording ? stopRecording : startRecording}>
         <Icon name="mic-circle-outline" size ={90}  style = {{ width: 90, height: 80, }}/>
         </TouchableOpacity>
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'white',
    
  },
  container1: {
    flex: 2,
    paddingBottom: 20,
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
export default HomeScreen;