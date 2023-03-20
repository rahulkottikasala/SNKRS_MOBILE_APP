import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import { COLOR } from '../const/Color'
import logo from '../assets/gif/splash.gif';
import StartImage from '../assets/images/start.png';
import { useNavigation } from '@react-navigation/native';



const SplashScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Start')
        },4000)
    },[])
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.backgroundBlack} barStyle={'default'} />
            <Image
                source={logo}
                style={{ width: 300, height: 300 }}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: { backgroundColor: COLOR.backgroundBlack, flex: 1, alignItems: 'center', justifyContent: 'center' }
})