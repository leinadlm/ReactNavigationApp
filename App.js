import React from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>
          Hola mundo
        </Text>
      </SafeAreaView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
