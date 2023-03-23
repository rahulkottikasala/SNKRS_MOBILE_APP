import { View, Text, StyleSheet, Image, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import { COLOR } from '../const/Color'
import { HorizontalBar } from '../components/category/HorizontalBar'
import { Accessories } from '../components/category/Accessories'
import { Types } from '../components/category/Types'
import { PriceBanner } from '../components/category/PriceBanner'
import ViewHeight from '../components/ViewHeight'
import { MidBanner } from '../components/category/MidBanner'



const Category = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={{flex :1}}>
        <Header />
        <HorizontalBar isDark={isDark} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <PriceBanner />
        <Types />
        <Accessories isDark={isDark} />
        <MidBanner isDark={isDark} />
        <ViewHeight />
      </ScrollView>
    </View>
  )
}

export default Category


