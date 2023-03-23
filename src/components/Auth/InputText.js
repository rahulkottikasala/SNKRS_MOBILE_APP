import { View, Text, TextInput, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../../const/Color'

const InputText = ({ value, setValue, placeholder, password }) => {
  const isDark = useColorScheme() === 'dark'
  const [showPassword, setShowPassword] = useState(false);
  const [text, setText] = useState("")
  const handlePassword = () => {
    setShowPassword(!showPassword)
  }

 
  console.log(text);

  return (
    <View style={{ width: '100%', paddingHorizontal: 50, marginVertical: 10, position: 'relative' }}>
      <TextInput value={text} onChangeText={setText} secureTextEntry={password ? !showPassword : false} placeholder={placeholder} placeholderTextColor={isDark ? COLOR.secondary_shade : COLOR.backgroundBlack} style={[{ opacity: .5, width: '100%', borderBottomWidth: 1.5, borderBottomColor: COLOR.backgroundBlack, paddingHorizontal: 15, color: COLOR.backgroundBlack, fontWeight: '500', fontSize: 15 }, isDark && { borderBottomColor: COLOR.secondary_shade, color: COLOR.secondary_shade }]} />
      {password && text.length > 0 &&
        // <Text onPress={() => handlePassword()} style={[{position:'absolute',right:70,top:20, color:COLOR.black, fontFamily:"italic"}, isDark && {color:COLOR.secondary}]}>{showPassword ? "Hide" : "Show"}</Text>
        <TouchableOpacity onPress={() => handlePassword()} style={[{ width: 50, height: 20, borderRadius: 7, backgroundColor: COLOR.secondary, position: 'absolute', right: 50, top: 15, alignItems: 'center', justifyContent: 'center' }, isDark && {backgroundColor:COLOR.primary, opacity:.8}]}><Text style={{ color: COLOR.white, fontSize: 10, fontFamily: 'Lato-Black' }}>{showPassword ? "Hide" : "Show"}</Text></TouchableOpacity>
      }
    </View>
  )
}

export default InputText