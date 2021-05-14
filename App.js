/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Homescreen';
import NumberScreen from './Screens/Number';

const Stack = createStackNavigator();
const App = ({navigation}) => {
  return(
      <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Number" component={NumberScreen} options={{header: () => null}} />
        <Stack.Screen name ="Home" component ={HomeScreen} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;
