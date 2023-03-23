import { View, Text, StyleSheet, StatusBar, Dimensions, useColorScheme } from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color'
import { Header } from '../components/profile/Header'
import { ScrollView } from 'react-native-gesture-handler'
import { ProfileCard } from '../components/profile/ProfileCard'
import ViewHeight from '../components/ViewHeight'
import Button from '../components/auth/Button'
const { height, width } = Dimensions.get('window')

const Profile = () => {
  const isDark = useColorScheme() === 'dark'
  return (
         <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.backgroundBlack} />
      <Header />
      <View style={[styles.scrollContainer, isDark && {backgroundColor:COLOR.backgroundBlack}]}>
          <ProfileCard isDark={isDark} name={"Profile Details"} />
          <ProfileCard isDark={isDark} name={"Edit Yout Address"} />
          <ProfileCard isDark={isDark} name={"Track Your Orders"} />
          <ProfileCard isDark={isDark} name={"Payment Method"} />
          <ProfileCard isDark={isDark} name={"Help"} />
          <ProfileCard isDark={isDark} name={"About Us"} />
          <Button padZero defFont btnName={"LOGOUT"}/>
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