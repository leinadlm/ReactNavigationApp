import React from 'react'
import { Text, View, Button } from 'react-native'

export default function About(props) {
    const {navigation} = props
    return (
        <View>
            <Text>Estamos en About</Text>
            <Button title="Contact" onPress={()=> navigation.navigate('contact')}/>
        </View>
    )
}
