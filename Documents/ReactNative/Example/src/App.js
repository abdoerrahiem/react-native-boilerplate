import React from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { AlertNotificationRoot } from 'react-native-alert-notification'

import Navigation from './navigation'
import { navigationRef } from './navigation/RootNavigation'
import store from './store'

RNBootSplash.hide()

export default function App() {
  return (
    <AlertNotificationRoot>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </AlertNotificationRoot>
  )
}
