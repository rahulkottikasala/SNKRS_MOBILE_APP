import { View, Text, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color'
import { Header } from '../components/profile/Header'
import { ScrollView } from 'react-native-gesture-handler'
import { ProfileCard } from '../components/profile/ProfileCard'
import ViewHeight from '../components/ViewHeight'
import Button from '../components/auth/Button'
const { height, width } = Dimensions.get('window')

const Profile = () => {
  return (
         <ScrollView showsVerticalScrollIndicator={false}> 
    <View style={styles.container}>
      <StatusBar backgroundColor={COLOR.backgroundBlack} />
      <Header />
      <View style={styles.scrollContainer}>
          <ProfileCard name={"Profile Details"} />
          <ProfileCard name={"Edit Yout Address"} />
          <ProfileCard name={"Track Your Orders"} />
          <ProfileCard name={"Payment Method"} />
          <ProfileCard name={"Help"} />
          <ProfileCard name={"About Us"} />
          <Button padZero defFont btnName={"LOGOUT"}/>
      </View>
    </View>
          <ViewHeight color={COLOR.backgroundBlack} />
         </ScrollView> 
  )
}

export default Profile

const styles = StyleSheet.create({
  container: { height: height, width: width, backgroundColor: COLOR.backgroundBlack, },
  scrollContainer: { height: height - 200, backgroundColor: COLOR.backgroundBlack, paddingHorizontal: 20, paddingTop: 10 },
})