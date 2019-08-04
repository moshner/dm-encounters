import React from 'react';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import {StyleSheet} from 'react-native';

import theme from './theme';

import NavigationToggleButton from './components/navigation/toggle-button';

import EncounterList from './screens/encounter-list';
import HomeScreen from './screens/home';
import PartyInitiative from './screens/initiative';
import PartyList from './screens/party-list';

const navOptions = ({navigation}) => ({
    title: 'DM Encounters',
    headerLeft: (<NavigationToggleButton navProps={navigation} />),
    headerStyle: theme.nav,
    headerTintColor: '#fff'
});

const stackOptions = {
    cardStyle: {...StyleSheet.absoluteFillObject},
};

const DrawerNavigator = createDrawerNavigator({
    HomeScreen: {
        screen: createStackNavigator({
            Home: {screen: HomeScreen, navigationOptions: navOptions},
        }, stackOptions),
        navigationOptions: {drawerLabel: 'Home'},
    },
    EncounterScreen: {
        screen: createStackNavigator({
            EncounterList: {screen: EncounterList, navigationOptions: navOptions},
            PartyInitiative: {screen: PartyInitiative, navigationOptions: navOptions},
        }, stackOptions),
        navigationOptions: {drawerLabel: 'Encounters'},
    },
    PartyScreen: {
        screen: createStackNavigator({
            PartyList: {screen: PartyList, navigationOptions: navOptions},
        }, stackOptions),
        navigationOptions: {drawerLabel: 'Manage Party'},
    },
});

export default DrawerNavigator;
