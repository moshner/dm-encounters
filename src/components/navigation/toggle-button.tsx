import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import theme from '../../theme';

export const NavigationToggleButton = ({navProps}) => {
    const toggleDrawer = () => {
        navProps.toggleDrawer();
    };

    return (
        <TouchableOpacity onPress={toggleDrawer}>
            <FontAwesomeIcon icon={faBars} style={theme.navToggle} />
        </TouchableOpacity>
    );
};

export default NavigationToggleButton;
