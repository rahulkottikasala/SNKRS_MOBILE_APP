import { View, Text, StyleSheet, StatusBar, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../const/Color';
import BackgroundImage from '../components/BackgroundImage';
import { TitleName } from '../components/auth/TitleName';
import InputText from '../components/auth/InputText';
import Button from '../components/auth/Button';

const Register = ({ navigation }) => {
  const [accept, setAccept] = useState(false)
  const isDark = useColorScheme() === 'dark'
  const handleTerms = () => {
    setAccept(!accept)
  }

  return (
    <>
      <StatusBar backgroundColor={COLOR.backgroundBlack} barStyle='default' />
      <BackgroundImage>
        <View style={styles.container}>
          <TitleName name={"Register"} />
          <View style={{ height: 30 }} />
          <InputText placeholder={"Name"} />
          <InputText placeholder={"Email"} />
          <InputText placeholder={"Password"} password />
          <View style={styles.termsContainer}>
            <TouchableOpacity onPress={handleTerms} style={[styles.termsButton, isDark && {borderColor: COLOR.secondary_shade,}]}>
             {accept && <View style={[styles.termsButtonClick, isDark && {backgroundColor: COLOR.secondary_shade}]} />}
            </TouchableOpacity>
            <Text style={[styles.termsText, isDark && { color: COLOR.secondary_shade }]}>I accept the terms & conditions </Text>
          </View>
          <View style={{ height: 40 }} />
          <Text style={[styles.linkText, isDark && { color: COLOR.secondary_shade,}]}>Already have an accout ?  <Text style={styles.link} onPress={() => navigation.navigate("Login")}>Login</Text></Text>
          <Button btnName={"Register"} />
        </View>
      </BackgroundImage>
    </>
  )
}

export default Register



const styles = StyleSheet.create({
  termsText: { color: COLOR.primary },
  termsButtonClick: { height: 12, width: 12, borderRadius: 12, backgroundColor: COLOR.primary },
  termsButton: { width: 18, marginRight: 15, height: 18, borderRadius: 18, borderWidth: 1, borderColor: COLOR.primary, alignItems: "center", justifyContent: 'center' },
  termsContainer: { width: '100%', paddingHorizontal: 55, marginTop: 10, flexDirection: 'row' },
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20

  },
  linkText: {
    fontSize: 13,
    color: COLOR.backgroundBlack,
    marginBottom: 15
  },
  link: {
    color: COLOR.primary,
    fontSize: 14,
    textDecorationLine: "underline"
  }
})