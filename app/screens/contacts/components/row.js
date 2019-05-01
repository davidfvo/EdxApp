import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const Style = StyleSheet.create({
    row: {
        padding: 20
    }
})

export const Row = props => (
    <View style={Style.row}>
        <Text>{props.fullName}</Text>
        <Text>{props.phone}</Text>
    </View>
)