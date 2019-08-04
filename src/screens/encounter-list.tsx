import React, {
    useContext,
    useRef,
    useState,
} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import uuid from 'uuid';

import theme from '../theme';
import EncounterType from '../models/encounter';
import {EncounterRegistry} from '../contexts/encounter-registry';

export const EncounterList = ({navigation}) => {
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const registry = useContext(EncounterRegistry);

    const addEncounter = () => {
        if (name === '') {
            return;
        }

        const encounter = {
            id: uuid(),
            name: name,
        } as EncounterType;

        registry.addEncounter(encounter);
        setName('');
    };

    return (
        <View style={theme.contentArea}>
            {Object.values(registry.encounters).map(encounter => (
                <View style={theme.inputGroup} key={encounter.id}>
                    <TextInput
                        editable={false}
                        style={theme.inputWithButton}
                        value={encounter.name}
                    />
                    <Button onPress={() => navigation.navigate('PartyInitiative')} title="Select" />
                    <Text> </Text>
                    <Button onPress={() => registry.removeEncounter(encounter.id)} title="Remove" />
                </View>
            ))}
            <View style={theme.inputGroup}>
                <TextInput
                    ref={inputRef}
                    style={theme.inputWithButton}
                    placeholder="Add encounter"
                    onChangeText={(text: string) => setName(text)}
                    value={name}
                    onBlur={addEncounter}
                />
                <Button onPress={addEncounter} title="Add" disabled={name === ''} />
            </View>
        </View>
    );
};

export default EncounterList;
