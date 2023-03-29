import { View, Text, StyleSheet, StatusBar, Dimensions, useColorScheme, Vibration, ToastAndroid } from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color'
import { Header } from '../components/profile/Header'
import { ScrollView } from 'react-native-gesture-handler'
import { ProfileCard } from '../components/profile/ProfileCard'
import ViewHeight from '../components/ViewHeight'
import Button from '../components/auth/Button'
import { useNavigation } from '@react-navigation/native'
const { height, width } = Dimensions.get('window')

const Profile = ({ }) => {
  const isDark = useColorScheme() === 'dark'
  const navigation = useNavigation()

  const handleLogout = () => {
    Vibration.vibrate(100)
    ToastAndroid.showWithGravity('Logout Successfully Completed', ToastAndroid.LONG, ToastAndroid.BOTTOM,)
    navigation.navigate('Login')
  }

  const handleBack = () => {
    navigation.pop()
  }


  const handlePayment = () => {
    navigation.navigate("Payment")  
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLOR.backgroundBlack} />
        <Header />
        <View style={[styles.scrollContainer, isDark && { backgroundColor: COLOR.backgroundBlack }]}>
          <ProfileCard isDark={isDark} name={"Profile Details"} />
          <ProfileCard isDark={isDark} name={"Edit Yout Address"} />
          <ProfileCard isDark={isDark} name={"Track Your Orders"} />
          <ProfileCard action={handlePayment} isDark={isDark} name={"Payment Method"} />
          <ProfileCard isDark={isDark} name={"Help"} />
          <ProfileCard isDark={isDark} name={"About Us"} />
          <Button action={handleLogout} padZero defFont btnName={"LOGOUT"} />
        </View>
      </View>
      <ViewHeight />
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: { height: height, width: width, },
  scrollContainer: { height: height - 200, backgroundColor: COLOR.white, paddingHorizontal: 20, paddingTop: 10 },
})