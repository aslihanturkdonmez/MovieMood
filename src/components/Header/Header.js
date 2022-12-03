import { View } from 'react-native';
import React from 'react';
import Text from '../Text';
import styles from './Header.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({ header, containerStyle, headerStyle, onPressBack }) => {
    return (
        <View style={[styles.container({ safeAreaInsets: useSafeAreaInsets() }), containerStyle]}>
            {
                onPressBack ? 
                <Icon 
                    name='arrow-left'
                    style={styles.icon}
                    onPress={onPressBack}
                /> 
                : 
                <View style={styles.icon} />
            }
            <Text style={[styles.header, headerStyle]} numberOfLines={1}>{header}</Text>
            <View style={styles.icon} />
        </View>
    )
}

export default Header;