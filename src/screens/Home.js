import React from 'react';
import {Button, Text, View} from 'react-native';

export default function Home(props) {
  console.log(props);
  const {navigation} = props;
  return (
    <View>
      <Text>Estamos en Home</Text>
      <Button title="Ir a about" onPress={() => navigation.navigate('about')} />
      <Button
        title="Ir a Contact"
        onPress={() => navigation.navigate('contact')}
      />
    </View>
  );
}
