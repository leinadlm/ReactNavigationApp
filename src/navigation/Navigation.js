import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Home from '../screens/Home';

const Stack = createStackNavigator()

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{title: 'Home'}} />
      <Stack.Screen name="about" component={About} options={{title: 'About'}} />
      <Stack.Screen name="contact" component={Contact} options={{title: 'Contact'}} />
    </Stack.Navigator>
  );
}
