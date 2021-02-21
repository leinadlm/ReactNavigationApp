import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import ContactStack from './ContactStack';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator initialRouteName="home">
      <Drawer.Screen
        name="home"
        component={HomeStack}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="contact"
        component={ContactStack}
        options={{title: 'Contact'}}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
