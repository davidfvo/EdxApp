import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { style } from '../../components/Stylesheet';
import { buttonColor } from '../../components/Constants';

//Anadir una validacion de los contactos que pueden entrar

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };
    render() {
        return (
            <View style={style.container}>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor='black'
                    textContentType='username'
                
                />
                <TextInput
                    keyboardType="numeric"
                    placeholder="Pin"
                    placeholderTextColor='black'
                    textContentType='password'
                    secureTextEntry={true}
                />
                <Button 
                title='Press to log In' 
                onPress={() => { this.props.navigation.navigate("App")}}
                color={buttonColor}/>
            </View>
        );
    }
}