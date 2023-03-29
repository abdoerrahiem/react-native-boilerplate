import { StyleSheet, View, ViewStyle, StyleProp } from 'react-native'
import React from 'react'
import Ripple from 'react-native-material-ripple'

import DefaultText from './DefaultText'
import { colors } from '../utils/colors'

export default function Button({
  title,
  rippleColor,
  containerStyle,
  contentContainerStyle,
  titleStyle,
}) {
  return (
    <View
      style={{
        overflow: 'hidden',
        borderRadius: 8,
        backgroundColor: colors.main,
        ...containerStyle,
      }}>
      <Ripple rippleColor={rippleColor ?? colors.background}>
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            alignItems: 'center',
            ...contentContainerStyle,
          }}>
          <DefaultText
            title={title}
            color={colors.background}
            {...titleStyle}
          />
        </View>
      </Ripple>
    </View>
  )
}

const styles = StyleSheet.create({})
