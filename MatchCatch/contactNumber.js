import React,{useState} from 'react';
import { CheckBox,StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function PhoneNumber() {
  const [isSelected, setSelection] = useState(false);
  
  return (
    <View style={styles.container}>
     
      <View style={styles.signinContainer}>
     
         
        <Text style={styles.displayText}>Display Name</Text>
        <TouchableOpacity style={styles.button}>
          
          <Text style={styles.buttonText}>Jenny Green</Text>
        </TouchableOpacity>
        <Text style={styles.displayText1}>Your Age</Text>
        <TouchableOpacity style={styles.button}>
         
       
          <Text style={styles.buttonText}>17</Text>
        </TouchableOpacity>
         <Text style={styles.displayText2}>You must be 18 to use MatchCatch</Text>
       <View style={styles.button1}>
       <Text style={styles.displayText3}>Phone Number</Text>
        <TouchableOpacity style={styles.button}>
          
          <Text style={styles.buttonText}>987654321</Text>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>By signing up, you agree to our Terms & Conditions.</Text>
      </View>
      <View style={styles.signupContainer}>
        
      </View>
      <View style={styles.appleButtonContainer}>
        <TouchableOpacity style={[styles.button, styles.appleButton]}>
           <Text> Sign Up</Text>
        </TouchableOpacity>
       
        
      </View>
       <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:30,
    flex: 1,
    backgroundColor: '#841584',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  
  signinContainer: {
    marginTop:5,
    alignItems: 'center',
  },
   
  button: {
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 11,
    borderWidth: 0.5,
    borderColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    marginLeft: 10, // Adds space between the icon and text
  },
  
  signupContainer: {
    marginTop: 20,
  },
  signupText: {
    color: 'white',
  },
  signupLink: {
    color: '#61dafb',
  },
  appleButtonContainer: {
    flexDirection: 'row', // Aligns children in a row
    justifyContent: 'center', // Centers buttons horizontally
  },
  appleButton: {
    width: 125,
    height: 42,
    margin: 10,
    
    backgroundColor: 'cyan', // Change to a color for visibility
    alignItems: 'center',
    justifyContent: 'center', // Centers text vertically
  },
  
  arrow:{
    marginRight:290,
  },
  displayText:{
    color:'white',
    marginRight:210
  },
   displayText1:{
    color:'white',
    marginRight:240
  },
  displayText2:{
    color:'red',
    marginRight:115,
    paddingTop:0.5,
    fontSize:12
    
  },
  button1:{
    padding:15,
    
  },
  displayText3:{
    color:'white',
    marginLeft:10
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color:'white',
    fontSize:11,
    marginTop:0.1
  },
});
