import React, {
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import {Button, TextInput, View} from 'react-native';
import uuid from 'uuid';

import theme from '../theme';
import PartyMemberType from '../models/party-member';
import {PartyRegistry} from '../contexts/party-registry';

export const PartyList = () => {
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const party = useContext(PartyRegistry);

    const addPartyMember = () => {
        if (name === '') {
            return;
        }

        const member = {
            id: uuid(),
            name: name,
        } as PartyMemberType;

        party.addMember(member);
        setName('');
    };

    useEffect(() => {
        if (name === '') {
            inputRef.current.focus();
        }
    }, [name, inputRef]);

    return (
        <View style={theme.contentArea}>
            {Object.values(party.members).map(member => (
                <View style={theme.inputGroup} key={member.id}>
                    <TextInput
                        editable={false}
                        style={theme.inputWithButton}
                        value={member.name}
                    />
                    <Button onPress={() => party.removeMember(member.id)} title="Remove" />
                </View>
            ))}
            <View style={theme.inputGroup}>
                <TextInput
                    ref={inputRef}
                    style={theme.inputWithButton}
                    placeholder="Add party member"
                    onChangeText={(text: string) => setName(text)}
                    value={name}
                    onBlur={addPartyMember}
                />
                <Button onPress={addPartyMember} title="Add" disabled={name === ''} />
            </View>
        </View>
    );
};

export default PartyList;
