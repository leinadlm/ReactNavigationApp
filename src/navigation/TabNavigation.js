import React from 'react';
import About from '../screens/About';
import Contact from '../screens/Contact';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeStack} options={{title: 'Home'}} />
      <Tab.Screen
        name="contact"
        component={ContactStack}
        options={{title: 'Contact'}}
      />
    </Tab.Navigator>
  );
}
