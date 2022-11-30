import { TextInput} from 'react-native';
import React from 'react';
import styles from './TextInput.style';

const CustomTextInput = ({onChangeText, style, value, ...props}) => {
  return (
    <TextInput 
        {...props}
        style={[styles.container, style]}
        onChangeText={onChangeText}
        value={value}
    />
  )
}

export default CustomTextInput;