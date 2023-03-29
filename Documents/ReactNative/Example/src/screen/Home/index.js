import { Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import DefaultView from '../../components/DefaultView'
import DefaultText from '../../components/DefaultText'
import Distance from '../../components/Distance'

import { styles } from './styles'

export default function Home() {
  return (
    <DefaultView>
      <DefaultText
        title={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      />
      <Distance height={20} />
      <Icon name="magnify" size={50} />
    </DefaultView>
  )
}
