import React from 'react';
import { Button, View } from 'react-native';
import { Conteo } from '../components/Conteo';
import { style } from '../components/Stylesheet';
import { buttonColor } from '../components/Constants';

export default class AppScreen extends React.Component {
    static navigationOptions = {
        title: 'Pomodoro',
    };

    render() {
        return (
            <View style={style.container}>
                <Conteo />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.navigate('Login')}
                    color={buttonColor}
                />
            </View>
        )
    }
}
