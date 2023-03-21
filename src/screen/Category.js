import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import filter from '../assets/icons/filter.png'
import { COLOR } from '../const/Color'
import { HorizontalBar } from '../components/category/HorizontalBar'

const Category = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <HorizontalBar />
      </ScrollView>
    </View>
  )
}

export default Category


const styles ={
  container: {},
}
