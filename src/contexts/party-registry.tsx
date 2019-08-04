import React, {useEffect, useState} from 'react';
import isEqual from 'react-fast-compare';

import useStore from '../hooks/use-store';
import PartyMemberType from '../models/party-member';

export interface PartyRegistryType {
    members: {[key: string]: PartyMemberType};
    addMember: (member: PartyMemberType) => void;
    removeMember: (id: string) => void;
    updateMember: (id: string, data: PartyMemberType) => void;
}

export const PartyRegistry = React.createContext({} as PartyRegistryType);

export const PartyRegistryProvider = ({children}) => {
    const store = useStore('party', {members: {}});
    const [members, setParty] = useState(store.getItem('members'));

    useEffect(() => {
        const party = store.getItem('members');
        if (!isEqual(members, party)) {
            setParty(party);
        }
    }, [store.getItem('members')]);

    const setPartyMembers = party => {
        setParty(party);
        store.setItem('members', party);
    };

    const addMember = (member: PartyMemberType) => setPartyMembers({...members, [member.id]: member});
    const removeMember = (id: string) => setPartyMembers(Object.keys(members)
        .filter(memberId => id !== memberId)
        .reduce((acc, memberId) => ({...acc, [memberId]: members[memberId]}), {}));
    const updateMember = (id: string, data: PartyMemberType) => setPartyMembers({...members, [id]: data});

    const ctx = {
        members,
        addMember,
        removeMember,
        updateMember,
    };

    return (
        <PartyRegistry.Provider value={ctx}>
            {children}
        </PartyRegistry.Provider>
    );
};

export default PartyRegistryProvider;
