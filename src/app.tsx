import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {createAppContainer} from 'react-navigation';

import theme from './theme';
import AppStore from './store';
import DrawerNavigator from './navigator';
import EncounterRegistryProvider from './contexts/encounter-registry';
import PartyRegistryProvider from './contexts/party-registry';

const AppContainer = createAppContainer(DrawerNavigator);

export const App = () => (
    <SafeAreaView style={{flex: 1}}>
        <AppStore>
            <PartyRegistryProvider>
                <EncounterRegistryProvider>
                    <View style={theme.app}>
                        <AppContainer />
                    </View>
                </EncounterRegistryProvider>
            </PartyRegistryProvider>
        </AppStore>
    </SafeAreaView>
);

export default App;
