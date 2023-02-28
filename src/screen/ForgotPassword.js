import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color';
import BackgroundImage from '../components/BackgroundImage';
import { TitleName } from '../components/Auth/TitleName';
import InputText from '../components/Auth/InputText';
import Button from '../components/Auth/Button';

const ForgotPassword = ({ navigation }) => {
  return (<>
    <StatusBar backgroundColor={COLOR.backgroundBlack} barStyle='default' />
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