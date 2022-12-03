import { Text } from 'react-native';
import React from 'react';
import styles from './Text.style';

const CustomText = ({style, ...props}) => {
  return (
      <Text 
        {...props}
        allowFontScaling={false}
        style={[styles.text, style]}

      >
        {props.children}
      </Text>
  )
}

export default CustomText;