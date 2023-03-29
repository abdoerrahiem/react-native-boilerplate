import React from 'react'
import { View } from 'react-native'

const Distance = ({ height, width, backgroundColor, ...otherStyles }) => {
  return <View style={{ height, width, backgroundColor, ...otherStyles }} />
}

export default Distance
