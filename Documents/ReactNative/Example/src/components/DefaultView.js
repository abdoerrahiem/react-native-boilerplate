import { StatusBar, View } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'

import { colors } from '../utils/colors'

const DefaultView = ({
  barStyle,
  children,
  translucent,
  statusbarColor,
  backgroundColor,
}) => {
  const isFocused = useIsFocused()

  const insets = useSafeAreaInsets()

  return (
    <SafeAreaProvider>
      <View
        style={{
          height: translucent ? 0 : insets.top,
          backgroundColor: statusbarColor ?? colors.background,
        }}>
        {isFocused && (
          <StatusBar
            animated={true}
            barStyle={barStyle ?? 'dark-content'}
            backgroundColor={statusbarColor ?? colors.background}
            translucent={translucent ?? false}
          />
        )}
      </View>
      <View style={{ flex: 1, backgroundColor }}>{children}</View>
    </SafeAreaProvider>
  )
}

export default DefaultView
