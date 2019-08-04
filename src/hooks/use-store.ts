import {useContext} from 'react';

import {StorageContext, StorageContextType} from '../store';

export type ComponentStorageType = StorageContextType & {
    globalState: {[key: string]: any};
    getGlobalItem: (key: string) => any;
    setGlobalItem: (key: string, value: any) => void;
};

export const useStore = (prefix: string, defaultState: any = {}) => {
    const {
        state: globalState,
        getItem: getGlobalItem,
        setItem: setGlobalItem,
    } = useContext(StorageContext);

    const state: {[key: string]: any} = globalState[prefix] || defaultState;
    const getItem = (key: string, defaultValue: any = null) => {
        if (typeof state[key] !== 'undefined') {
            return state[key];
        }

        return defaultValue;
    };
    const setItem = (key: string, value: any) => {
        setGlobalItem(prefix, {...state, [key]: value});
    };

    return {
        globalState,
        getGlobalItem,
        setGlobalItem,
        state,
        getItem,
        setItem,
    } as ComponentStorageType;
};

export default useStore;
