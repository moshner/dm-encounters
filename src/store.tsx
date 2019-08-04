import React, {useEffect, useState} from 'react';
import isEqual from 'react-fast-compare';
import {AsyncStorage} from 'react-native';

import useInterval from './hooks/use-interval';

export type StorageContextType = {
    state: {[key: string]: any};
    getItem: (key: string) => any;
    setItem: (key: string, value: any) => void;
}

export const StorageContext = React.createContext({} as StorageContextType);

const STORAGE_KEY = 'DM_ENCOUNTERS';

export const AppStore = ({children}) => {
    const [state, setState] = useState({});

    const getItem = (key: string) => {
        if (typeof state[key] !== 'undefined') {
            return state[key];
        }

        return null;
    };
    const setItem = (key: string, value: any) => {
        setState({...state, [key]: value});
    };

    useEffect(() => {
        const load = async () => {
            try {
                const data = await AsyncStorage.getItem(STORAGE_KEY);

                if (data !== null) {
                    setState(JSON.parse(data))
                }
            }
            catch (e) {
                console.error('Failed to load stored data')
            }
        };

        // noinspection JSIgnoredPromiseFromCall
        load();
    }, []);
    useInterval(() => {
        AsyncStorage.getItem(STORAGE_KEY)
            .then(json => {
                const data = JSON.parse(json);
                if (isEqual(data, state)) {
                    return;
                }

                // noinspection JSIgnoredPromiseFromCall
                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            });
    }, 250);

    return (
        <StorageContext.Provider value={{state, getItem, setItem}}>
            {children}
        </StorageContext.Provider>
    );
};

export default AppStore;
