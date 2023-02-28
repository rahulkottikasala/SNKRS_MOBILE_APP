import { View, Text } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/Color'

export const TitleName = ({name}) => {
  return (
    <Text style={{fontFamily:'Bold', color:COLOR.primary, textDecorationLine:"underline", fontSize:25, marginVertical:10}}>{name}</Text>
  )
}
