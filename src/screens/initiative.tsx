import React, {useContext} from 'react';
import {Button, TextInput, View} from 'react-native';

import theme from '../theme';
import {PartyRegistry} from '../contexts/party-registry';

export const PartyInitiative = ({navigation}) => {
    const party = useContext(PartyRegistry);

    return (
        <View style={theme.contentArea}>
            {Object.values(party.members).map(member => (
                <View key={member.id} style={theme.inputGroup}>
                    <TextInput
                        editable={false}
                        style={theme.inputWithButton}
                        value={member.name}
                    />
                    <TextInput keyboardType="numeric" style={theme.input} />
                </View>
            ))}
            <Button onPress={() => {}} title="Save and continue" />
        </View>
    );
};

export default PartyInitiative;
