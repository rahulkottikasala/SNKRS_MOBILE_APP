import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color';
import BackgroundImage from '../components/BackgroundImage';
import { TitleName } from '../components/auth/TitleName';
import InputText from '../components/auth/InputText';
import Button from '../components/auth/Button';

const Login = ({ navigation }) => {
  return (<>
    <StatusBar backgroundColor={COLOR.backgroundBlack} barStyle='default' />
    <BackgroundImage>
      <View style={styles.container}>
        <TitleName name={"Login"} />
        <View style={{ height: 40 }} />
        <InputText placeholder={"Email / Username"} />
        <InputText placeholder={"Password"} password/>
        <Text style={styles.forgotLink} onPress={() => navigation.navigate("Forgot")}>Forgot Password ?</Text>
        <View style={{ height: 40 }} />
        <Text style={styles.linkText}>Don't have an accout ?  <Text style={styles.link} onPress={() => navigation.navigate("Register")}>Sign Up</Text></Text>
        <Button action={() => navigation.navigate("TabBar")} btnName={"Login"} />
      </View>
    </BackgroundImage>
  </>
  )
}

export default Login;

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