import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Fontisto } from '@expo/vector-icons';
import HomeScreen from './signUpPage';
import CheckBox from 'react-native-paper';


// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
export default function App() {
  let imageUrl = 'https://s3-alpha-sig.figma.com/img/af39/7df9/a05f50105a5e76b1459348ee996aa56d?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FYSFDCV-Alk2lO~naOttfLo502yBhjd4Z99PSQzGWoZKDnCwa93OR4Psx~Kg0aOCawCIJXxPSTlGUt0eVt2PUJh8M4nc9ZccAyOqenYPUCSX~D1yu1O3aOWcPAAre1nyou16MQQP1u50q1gtyZJAnL~-wYHZu4wpS4SrLfBJZdq9JtwXy7EBFz2J4ijF3DQjJALuBs4~uwf9ToKpQZAw6dKLwpazgQ3Ch2b4unN9PohJfi2rJyVCw6gmtWX8o3MfIpXOsHmzGZTOIZDwbADgLdz6BQgSrOjHN~wZAZOgWngtA8s9AEj5C4rhx6pgX3VZIChCp3ZAM17yXFzyyaI3iQ__';
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: imageUrl }} style={styles.logo} />
        {/*<Text style={styles.title}>Match Catch</Text>*/}
      </View>
      
      <View style={styles.signinContainer}>
        <Text style={styles.signinText}>Sign In</Text>
        <TouchableOpacity style={styles.button} >
          <AntDesign name="user" size={24} color="white" />
          <Text style={styles.buttonText}>Use Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Fontisto name="email" size={24} color="white" style={styles.userEmail} />
          <Text style={styles.buttonText}>Use Email Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Text style={[styles.buttonText, styles.googleButtonText]}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </View>
      <View style={styles.appleButtonContainer}>
        <TouchableOpacity style={[styles.button, styles.appleButton]}>
           <AntDesign name="apple-o" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.appleButton]}>
           <AntDesign name="google" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop:150
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  signinContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  signinText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
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
    fontSize: 18,
    color: 'white',
    marginLeft: 10, // Adds space between the icon and text
  },
  googleButton: {
    backgroundColor: 'white',
    
  },
  googleButtonText: {
    color: '#4285F4',
    justifyContent: 'center',
    marginLeft:45
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
    width: 135,
    height: 52,
    margin: 10,
    
    backgroundColor: '#36454F', // Change to a color for visibility
    alignItems: 'center',
    justifyContent: 'center', // Centers text vertically
  },
  // userLogo: {
  //   marginRight: 10,
  // },
  userEmail: {
    marginRight: 10,
  },
});
