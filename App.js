import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import AppScreen from './screens/appscreen';
import AddContact from './screens/contacts/addcontact';
import Contacts from './screens/contacts/contacts';
import Login from './screens/login';
import Calculadora from './screens/calculadora';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === 'App') {
    iconName = `md-timer`;
  } else if (routeName === 'Contacts') {
    iconName = `ios-contacts`;
  } else if (routeName === 'Calculadora') {
    iconName = `ios-calculator`;
  }
  return <Icon name={iconName} size={34} color={tintColor} />;
};

const ContactsTab = createStackNavigator(
  {
    ContactList: Contacts,
    AddContact: AddContact
  }, {
    initialRouteName: 'ContactList'
  });

const MainTabs = createBottomTabNavigator(
  {
    Calculadora: Calculadora,
    App: AppScreen,
    Contacts: ContactsTab
  }, {
    initialRouteName: 'App',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: 'gray',
      showLabel: false,
      style: {
        backgroundColor: '#000000',
      }
    },
  }
)

const SwitchNavigator = createSwitchNavigator({
  Login: Login,
  BottomTabs: MainTabs,
}, {
    initialRouteName: 'Login'
  });

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    return (
      <AppContainer />
    );
  }
}