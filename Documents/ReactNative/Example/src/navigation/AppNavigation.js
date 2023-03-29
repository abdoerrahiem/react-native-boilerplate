import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screen/Home'
import { colors } from '../utils/colors'

const Stack = createNativeStackNavigator()

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}
