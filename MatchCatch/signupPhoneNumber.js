import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.signinContainer}>
        <AntDesign name="arrowleft" size={24} color="cyan" style={styles.arrow} />
        <Text style={styles.signinText}>Signing up is easy</Text>
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
        <Checkbox
          color="#A6EEFE"
          status={isSelected ? 'checked' : 'unchecked'}
          onPress={() => {
            setSelection(!isSelected);
          }}
          uncheckedColor="white" // For the border color of the checkbox
        />
        <Text style={styles.label}>By signing up, you agree to our Terms & Conditions.</Text>
      </View>
      <View style={styles.signupContainer}></View>
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
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  signinText: {
    fontSize: 24,
    color: '#A6F9FE',
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
    fontSize: 15,
    color: 'white',
    marginLeft: 10,  
  },
  signupContainer: {
    marginTop: 20,
  },
  signupText: {
    color: 'white',
    fontFamily:'Lato'
  },
  signupLink: {
    color: '#61dafb',
  },
  appleButtonContainer: {
    flexDirection: 'row',  
    justifyContent: 'center',  
  },
  appleButton: {
    width: 135,
    height: 52,
    margin: 10,
    backgroundColor: '#A6F9FE',  
    alignItems: 'center',
    justifyContent: 'center',  
  },
  arrow: {
    marginRight: 290,
  },
  displayText: {
    color: 'white',
    marginRight: 210,
  },
  displayText1: {
    color: 'white',
    marginRight: 240,
  },
  displayText2: {
    color: '#FB8888',
    marginRight: 115,
    paddingTop: 0.5,
    fontSize: 12,
  },
  button1: {
    padding: 15,
  },
  displayText3: {
    color: 'white',
    marginLeft: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    margin: 8,
    color: 'white',
    fontSize: 11,
    marginTop: 0.1,
  },
});
