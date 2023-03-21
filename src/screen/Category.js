import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import { COLOR } from '../const/Color'
import { HorizontalBar } from '../components/category/HorizontalBar'
import { Accessories } from '../components/category/Accessories'



const Category = () => {
  return (
    <View style={{flex :1}}>
      <ScrollView>
        <Header />
        <HorizontalBar />
        <Accessories />
        
      </ScrollView>
    </View>
  )
}

export default Category


