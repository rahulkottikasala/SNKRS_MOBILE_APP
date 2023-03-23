import { View, useColorScheme} from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color';

const ViewHeight = ({color,ext}) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={{backgroundColor:color ? color :isDark ? COLOR.backgroundBlack: COLOR.white,height:ext ? 100 + ext :100}}/>
  )
}

export default ViewHeight