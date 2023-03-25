import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import { Card } from '../components/product/Card'
import ViewHeight from '../components/ViewHeight'

const Wishlist = () => {
  const isDark = useColorScheme() === "dark"
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} >
        <Card isDark={isDark} />
        <Card isDark={isDark} />
        <ViewHeight/>
      </ScrollView>
     
    </View>
  )
}

export default Wishlist

const styles= StyleSheet.create({
  container:{ flex:1}
})