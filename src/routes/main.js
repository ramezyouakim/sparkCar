
/** Main Route Of The App */


//Imports
import 'react-native-gesture-handler';
import * as React from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import HomeScreen from '../screens/home';
import AddNewScreen from '../screens/AddNew';

//Main Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="screen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddNew" component={AddNewScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}