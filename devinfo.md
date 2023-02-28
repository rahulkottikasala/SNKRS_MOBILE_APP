import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color';
import BackgroundImage from '../components/BackgroundImage';

const Login = () => {
  return (<>
    <StatusBar backgroundColor={COLOR.backgroundBlack} barStyle='default'  />
    <BackgroundImage>
    <View style={styles.container}>
      
    </View>
    </BackgroundImage>
  </>
  )
}

export default Login;

const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    position:'absolute'
   
},
})