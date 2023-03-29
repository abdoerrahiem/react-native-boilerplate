import { Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import DefaultView from '../../components/DefaultView'
import Button from '../../components/Button'

export default function Login() {
  return (
    <DefaultView>
      <View style={{ padding: 50 }}>
        <Button title={'Button'} />
      </View>
    </DefaultView>
  )
}
