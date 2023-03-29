import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../screen/Login'
import { colors } from '../utils/colors'

const Stack = createNativeStackNavigator()

export default function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.background },
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}
