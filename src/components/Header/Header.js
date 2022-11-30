import { View } from 'react-native';
import React from 'react';
import Text from '../Text';
import styles from './Header.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Header = ({ header, containerStyle, headerStyle }) => {
    return (
        <View style={[styles.container({ safeAreaInsets: useSafeAreaInsets() }), containerStyle]}>
            <Text style={[styles.header, headerStyle]}>{header}</Text>
        </View>
    )
}

export default Header;