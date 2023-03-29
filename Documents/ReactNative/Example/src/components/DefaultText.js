import { Platform, Text } from 'react-native'
import React from 'react'

import { colors } from '../utils/colors'
import { fontFamily as fonts } from '../utils/fontFamily'

const DefaultText = ({
  title,
  fontFamily,
  fontSize,
  color,
  numberOfLines,
  selectable,
  children,
  onPress,
  ...otherStyles
}) => {
  return (
    <Text
      adjustsFontSizeToFit
      onPress={onPress}
      numberOfLines={numberOfLines}
      selectable={selectable}
      style={{
        fontFamily: fontFamily ?? fonts.regular,
        fontSize: fontSize ?? 16,
        color: color ?? colors.textPrimary,
        ...otherStyles,
      }}>
      {title}
      {children && children}
    </Text>
  )
}

export default DefaultText
