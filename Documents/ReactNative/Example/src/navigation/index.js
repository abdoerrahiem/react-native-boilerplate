import React from 'react'
import { useSelector } from 'react-redux'

import AuthNavigation from './AuthNavigation'
import AppNavigation from './AppNavigation'

export default function Navigation() {
  const { user } = useSelector(state => state.userReducer)

  console.log('user: ', user)

  return user ? <AppNavigation /> : <AuthNavigation />
}
