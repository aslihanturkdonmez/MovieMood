import { View,  StatusBar, Platform} from 'react-native'
import React from 'react'
import styles from './Container.style';

const Container = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>
      {
        Platform.OS === 'ios' ? 
        <StatusBar barStyle={'light-content'} />
        : null
      }
        {children}
    </View>
  )
}

export default Container;
