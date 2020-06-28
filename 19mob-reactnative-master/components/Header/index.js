import React from 'react';
import { Platform } from 'react-native';

import Logo from '../../assets/senninha.png';
import HeaderAndroid from './ComponentAndroid';
import HeaderIOS from './ComponentIOS';

const Header = Platform.select({  
    ios: () => <HeaderIOS logo={ Logo } />,
    android: () => <HeaderAndroid logo={ Logo } />,
    default: () => <HeaderAndroid logo={ Logo } />
});

export default Header;

