import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color';
import BackgroundImage from '../components/BackgroundImage';
import StartImage from '../assets/images/start.png';

const Start = ({ navigation }) => {
  return (<>
    <StatusBar backgroundColor={COLOR.backgroundBlack} barStyle='default' />
    <BackgroundImage>
      <View style={styles.container}>
        <Text style={styles.title}>Choose Your {'\n'} Favourite <Text style={{ color: COLOR.primary }}>Sneaker</Text></Text>
        <Text style={styles.subTitle}>Sneaker collection with premium quality,
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
    color: COLOR.white,
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20
  },
  subTitle: {
    fontFamily: 'SemiBold',
    fontSize: 16,
    textAlign: 'center',
    color: COLOR.white
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