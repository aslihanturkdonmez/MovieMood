import { Text } from 'react-native'
import React from 'react'

const CustomText = ({children, props}) => {
  return (
      <Text 
        {...props} 
        allowFontScaling={false}
      >
        {children}
      </Text>
  )
}

export default CustomText;