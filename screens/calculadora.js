import React from 'react';
import { Button, View, Text } from 'react-native';
import { style } from '../components/Stylesheet';

export default class Calculadora extends React.Component {
    static navigationOptions = {
        title: 'Calculadora',
    };

    render() {
        return (
            <View style={style.container}>
                <Text>Calculadora</Text>
            </View>
        )
    }
}