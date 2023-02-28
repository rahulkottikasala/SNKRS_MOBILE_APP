import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { COLOR } from '../const/Color'
import { WelcomeText } from '../components/home/WelcomeText'
import BannerImage from '../assets/images/BannerImage.png'
import { OfferBanner } from '../components/home/OfferBanner'

const Home = () => {
  return (
    <ScrollView>
      <Header/>
      <WelcomeText/>
      <OfferBanner />
    </ScrollView>
  )
}

export default Home
