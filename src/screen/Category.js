import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import { COLOR } from '../const/Color'
import { HorizontalBar } from '../components/category/HorizontalBar'
import { Accessories } from '../components/category/Accessories'
import { Types } from '../components/category/Types'
import { PriceBanner } from '../components/category/PriceBanner'
import ViewHeight from '../components/ViewHeight'



const Category = () => {
  return (
    <ScrollView style={{flex :1}}>
      <ScrollView>
        <Header />
        <HorizontalBar />
        <PriceBanner />
        <Types />
        <Accessories />
        <ViewHeight />
      </ScrollView>
    </ScrollView>
  )
}

export default Category


