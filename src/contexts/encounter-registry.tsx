import React, {useEffect, useState} from 'react';
import isEqual from 'react-fast-compare';

import useStore from '../hooks/use-store';
import EncounterType from '../models/encounter';

export interface EncounterRegistryType {
    encounters: {[key: string]: any};
    addEncounter: (data: EncounterType) => void;
    removeEncounter: (id: string) => void;
    updateEncounter: (id: string, data: any) => void;
}

export const EncounterRegistry = React.createContext({} as EncounterRegistryType);

export const EncounterRegistryProvider = ({children}) => {
    const store = useStore('encounters', {encounters: {}});
    const [encounters, setState] = useState(store.getItem('encounters'));

    useEffect(() => {
        const state = store.getItem('encounters');
        if (!isEqual(encounters, state)) {
            setState(state);
        }
    }, [store.getItem('encounters')]);

    const setEncounters = state => {
        setState(state);
        store.setItem('encounters', state);
    };

    const addEncounter = (data: EncounterType) => setEncounters({...encounters, [data.id]: data});
    const removeEncounter = (id: string) => setEncounters(Object.keys(encounters)
        .filter(encounterId => id !== encounterId)
        .reduce((acc, encounterId) => ({...acc, [encounterId]: encounters[encounterId]}), {}));
    const updateEncounter = (id: string, data: EncounterType) => setEncounters({...encounters, [id]: data});

    const ctx = {
        encounters,
        addEncounter,
        removeEncounter,
        updateEncounter,
    };

    return (
        <EncounterRegistry.Provider value={ctx}>
            {children}
        </EncounterRegistry.Provider>
    );
};

export default EncounterRegistryProvider;
