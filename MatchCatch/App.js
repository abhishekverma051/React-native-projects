import * as React from 'react';
import { Button, View, Text ,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen'
import DetailScreen from './Screens/DetailScreen'
import LoginScreen from './Screens/LoginScreen'
import PhoneNumber from './Screens/PhoneNumber'
import Email from './Screens/Email'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

 function App(){
   return(

     <NavigationContainer>
      

      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
                name="Home"
                component= {HomeScreen}
                />
        <Stack.Screen
                 name="Details"
                 component={DetailScreen}
        />
        <Stack.Screen
                name = "Login"
                component={LoginScreen}
                />
      <Stack.Screen
                name = "ByContact"
                component={PhoneNumber}
                />
       <Stack.Screen
                name = "ByEmail"
                component={Email}
                />         
        </Stack.Navigator>
                
     </NavigationContainer>
     
   )
 }
  

export default App;

