import React from 'react';
import {Button, View} from 'react-native';

import theme from '../theme';

export const HomeScreen = ({navigation}) => {
    return (
        <View style={{...theme.contentArea, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
                <Button title="Manage Party" onPress={() => navigation.navigate('PartyScreen')} />
            </View>
            <View style={{flex: 1, marginLeft: '0.5rem'}}>
                <Button title="Manage Encounters" onPress={() => navigation.navigate('EncounterScreen')} />
            </View>
        </View>
    );
};

export default HomeScreen;
