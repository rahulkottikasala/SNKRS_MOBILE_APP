import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} >
        
      </ScrollView>
     
    </View>
  )
}

export default Wishlist

const styles= StyleSheet.create({
  container:{ flex:1}
})