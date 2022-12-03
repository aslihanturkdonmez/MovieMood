import { View } from 'react-native'
import React from 'react'
import styles from './InfoBox.style';
import Text from '../Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InfoBox = ({text, containerStyle, textStyle, icon, iconStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
        {
            icon ? 
            <Icon 
                name={icon}
                style={iconStyle}
            /> : null
        }
      <Text style={[styles.text, textStyle]} numberOfLines={1} >{text}</Text>
    </View>
  )
}

export default InfoBox