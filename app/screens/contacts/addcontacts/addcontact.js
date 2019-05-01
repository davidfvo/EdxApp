import React from 'react';
import { Button, View, TextInput } from 'react-native';
import { style } from '../../../components/Stylesheet';

export default class AddContact extends React.Component {
    static navigationOptions = {
        title: 'Add Contact'
    }
    constructor() {
        super()
        this.state = {
            fullName: '',
            phone: '',
            password: '',
            key: 2,
        }
    }
    submitForm() {
        this.setState(prevState => ({key:prevState.key + 1}))
    }
    getHandler = key => val => {
        this.setState({[key]:val})
    }
    render() {
        return (
            <View style={style.container}>
                <TextInput
                    placeholder="Nombre contacto"
                    onChange={() => this.getHandler('fullName')}
                />
                <TextInput
                    placeholder="Telefono"
                    onChange={() => this.getHandler('Phone')}
                />
                <TextInput
                    placeholder="Password"
                    onChange={() => this.getHandler('password')}
                />
                <Button title='Add Contact' onPress={() => this.submitForm()} />
            </View>
        )
    }
}