import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
         
      </View>
      <View>
        <Text style={styles.siginText}>Let’s sign you in.</Text>
      </View>
      <Text style={styles.phoneNumberText}>Email</Text>
      <TextInput
        style={styles.textInputContainer}
        placeholder='abhiskvrm5@gmail.com'
        placeholderTextColor="#FFFFFF"
        onChangeText={newText => setText(newText)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.signupText1}>
        Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
      </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#841584',
  },
  counterContainer: {
    marginLeft: 10,
    padding: 10,
  },
  phoneNumberText: {
    color: 'white',
    marginLeft: 24,
    marginTop: 15,
    fontSize: 12,
  },
  textInputContainer: {
    color: 'white',
    width: 300,
    padding: 10,
    margin: 10,
    borderRadius: 11,
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: 23,
    paddingTop: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: 300,
    padding: 10,
    borderRadius: 11,
    borderWidth: 0.5,
    alignItems: 'center',
    backgroundColor: '#A6F9FE',
  },
  siginText: {
    color: '#A6F9FE',
    justifyContent: 'center',
    fontSize: 30,
    marginLeft: 15,
  },
  signupText1:{
    color:'white',
    marginTop:10
  },
  signupLink:{
    color:'#A6F9FE',
    
  }
});
