import { Text } from 'react-native'
import React from 'react'

const CustomText = (props) => {
  return (
      <Text 
        {...props}
        allowFontScaling={false}
      >
        {props.children}
      </Text>
  )
}

export default CustomText;