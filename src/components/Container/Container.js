import { View, Text } from 'react-native'
import React from 'react'
import styles from './Container.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = ({children, style}) => {
  return (
    <View style={[styles({safeAreaInsets:useSafeAreaInsets()}).container, style]}>
        {children}
    </View>
  )
}

export default Container;
