import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/Color'

const Button = ({btnName, action, padZero, defFont}) => {
  return (
    <View style={{width:'100%', paddingHorizontal:padZero ? 0 :50, marginVertical:10}}>
    <TouchableOpacity onPress={() =>action ? action() : alert("action does nt exist")} style={{width:'100%', height:50, backgroundColor:COLOR.primary, alignItems:'center', justifyContent:'center', borderRadius:10, marginVertical:10}}>
      <Text style={{fontSize:15, fontFamily:defFont ? "Lato-Bold" :"SemiBold", color:COLOR.secondary_shade}}>{btnName}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Button