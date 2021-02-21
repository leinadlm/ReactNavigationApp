import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Contact(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en Contact</Text>
      <Button title="About" onPress={() => navigation.navigate('about')} />
    </View>
  );
}
