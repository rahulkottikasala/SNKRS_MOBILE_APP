import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, useColorScheme } from 'react-native'
import React, { useContext } from 'react'
import { COLOR } from '../const/Color';
import BackgroundImage from '../components/BackgroundImage';
import StartImage from '../assets/images/start.png';

const Start = ({ navigation }) => {

  const isDark = useColorScheme() === 'dark'

  return (<>
    {
      isDark ?
        <StatusBar backgroundColor={COLOR.backgroundBlack} barStyle='light-content' />
        : <StatusBar backgroundColor={COLOR.white} barStyle='dark-content' />
    }
    
    <BackgroundImage >
      <View style={styles.container}>
        <Text style={[styles.title, isDark && {color:COLOR.white}]}>Choose Your {'\n'} Favourite <Text style={{ color: COLOR.primary }}>Sneaker</Text></Text>
        <Text style={[styles.subTitle, isDark && {color:COLOR.white}]}>Sneaker collection with premium quality,
          minimalist and limited edition</Text>
        <Image style={styles.image} source={StartImage} />
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Let's go</Text>
        </TouchableOpacity>
      </View>
    </BackgroundImage>
  </>
  )
}

export default Start;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Bold',
    color: COLOR.backgroundBlack,
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20
  },
  subTitle: {
    fontFamily: 'SemiBold',
    fontSize: 16,
    textAlign: 'center',
    color: COLOR.backgroundBlack
  },
  image: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain'
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: COLOR.primary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: COLOR.secondary_shade,
    fontFamily: 'SemiBold',
  }
})