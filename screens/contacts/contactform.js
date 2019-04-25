import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { style } from '../../components/Stylesheet';

export class AddContact extends React.Component {
    static navigationOptions = {
        title: 'Add Contact'
    }
    constructor() {
        super()
        this.state = {
            nombre: '',
            telefono: '',
            password: ''
        }
    }
    render() {
        return (
            <View style={style.container}>
                <TextInput
                    placeholder="Nombre contacto"
                />
                <TextInput
                    placeholder="Telefono"
                />
                <TextInput
                    placeholder="Password"
                />
                <Button title='Add Contact' />
            </View>
        )
    }
}