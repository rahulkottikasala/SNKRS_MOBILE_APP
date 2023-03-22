import { View} from 'react-native'
import React from 'react'

const ViewHeight = ({color,ext}) => {
  return (
    <View style={{backgroundColor:color,height:ext ? 100 + ext :100}}/>
  )
}

export default ViewHeight