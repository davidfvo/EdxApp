import React from 'react';
import { Button, Text, View } from 'react-native';
import { style } from '../../components/Stylesheet';
import { randomContacts } from './components/apitransform';
import { FlatListContacts } from './components/flatlist';


//anadir pantalla para ver info del contacto

const Contact = props => (
    <View style={{
        flexDirection: 'row',
        alignItems: 'center',}}>
        <Text style={{
            paddingTop: 2
        }}>{props.contact.fullName}</Text>
    </View>
)

export default class Contacts extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Contacts',
            headerRight: (
                <Button
                title = "add" 
                onPress = { () => navigation.navigate('AddContact') } 
            />
        ),
        headerTintColor: 'black'
        }
    }
    constructor() {
        super()
        this.state = {
            contacts: [],
        }
    }

    componentDidMount() {
        // this.getUsers()
        this._localJson();
    }

    _localJson() {
        const results = randomContacts();
        this.setState({ contacts: results })
    }

    // getUsers = async () => {
    //     const results = await randomContacts()
    //     this.setState({ contacts: results})
    // }

    // addContact = newContact => {
    //     this.setState(prevState => ({
    //         contacts: [...prevState.contacts, newContact],
    //     }))
    // }

    render() {
        return (
            <View style={style.contContacts}>
                <FlatListContacts contacts={this.state.contacts} />
            </View>
        );
    }
}