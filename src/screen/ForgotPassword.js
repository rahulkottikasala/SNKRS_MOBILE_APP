import { View, Text, StyleSheet, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color';
import BackgroundImage from '../components/BackgroundImage';
import { TitleName } from '../components/auth/TitleName';
import InputText from '../components/auth/InputText';
import Button from '../components/auth/Button';

const ForgotPassword = ({ navigation }) => {
  const isDark = useColorScheme() === 'dark'
  return (<>
    {
      isDark ?
        <StatusBar backgroundColor={COLOR.backgroundBlack} barStyle='light-content' />
        : <StatusBar backgroundColor={COLOR.white} barStyle='dark-content' />
    }
    <BackgroundImage>
      <View style={styles.container}>
        <TitleName name={"Reset Password"} />
        <View style={{ height: 40 }} />
        <InputText placeholder={"Email / Username"} />
        <InputText placeholder={"New Password"} password />
        <InputText placeholder={"Confirm Password"} password />
        <View style={{ height: 40 }} />
        <Button btnName={"Reset"} />
      </View>
    </BackgroundImage>
  </>
  )
}

export default ForgotPassword;

const styles = StyleSheet.create({
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
    color: COLOR.secondary_shade,
    marginBottom:15
  },
  link: {
    color: COLOR.primary,
    fontSize: 14,
    textDecorationLine: "underline"
  },
  forgotLink: {
    color: COLOR.secondary_shade,
    alignSelf:'flex-end',
    fontSize: 14,
    marginRight:50,
    marginTop:5,
    textDecorationLine: "underline"
  }
})