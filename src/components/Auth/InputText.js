import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../../const/Color'

const InputText = ({value, setValue, placeholder, password}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
setShowPassword(!showPassword)
  } 

  return (
    <View style={{width:'100%', paddingHorizontal:50, marginVertical:10, position:'relative'}}>
    <TextInput secureTextEntry={!showPassword} placeholder={placeholder} placeholderTextColor={COLOR.secondary_shade} style={{opacity:.5, width:'100%', borderBottomWidth:1.5, borderBottomColor:COLOR.secondary_shade,paddingHorizontal:15, color:COLOR.secondary_shade, fontWeight:'500',fontSize:15 }} />
     {password && <Text onPress={() => handlePassword()} style={{position:'absolute',right:70,top:20, color:COLOR.secondary, fontFamily:"italic"}}>{showPassword ? "Hide" : "Show"}</Text>}
    </View>
  )
}

export default InputText