import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, useColorScheme, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { COLOR } from '../const/Color'
import { WelcomeText } from '../components/home/WelcomeText'
import { OfferBanner } from '../components/home/OfferBanner'
import ViewHeight from '../components/ViewHeight'
import { Card } from '../components/home/Card'
import jordan from '../assets/dummy/jordan.png'
import force1White from '../assets/dummy/force1White.png'
import force1Red from '../assets/dummy/force1Red.png'
import converse from '../assets/dummy/converse.png'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

  const isDark = useColorScheme() === 'dark';

  const navigation = useNavigation()
  const [categoryTabIndex, setCategoryTabIndex] = useState(1)

  const handleViewDetails = () => {
    navigation.navigate("ViewDetails")
  }

  return (
    <View style={[styles.container, isDark && { backgroundColor: COLOR.backgroundBlack }]}>
      <ScrollView>
        <Header />
        <WelcomeText isDark={isDark} />
        <OfferBanner />
        <CategoryTab isDark={isDark} index={categoryTabIndex} setIndex={setCategoryTabIndex} />
        <View style={styles.product_list}>
          {/* -----card----- */}

          <Card isDark={isDark} action={handleViewDetails} cardImage={jordan} />
          <Card isDark={isDark} action={handleViewDetails} cardImage={force1White} />
          <Card isDark={isDark} action={handleViewDetails} cardImage={jordan} />
          <Card isDark={isDark} action={handleViewDetails} cardImage={force1Red} />
          <Card isDark={isDark} action={handleViewDetails} cardImage={converse} />
          <Card isDark={isDark} action={handleViewDetails} cardImage={force1White} />
        </View>
        <ViewHeight />
      </ScrollView>
    </View>
  )
}

export default Home



const CategoryTab = ({isDark, index, setIndex }) => (
  <View style={styles.categoryTabContainer}>
    <View style={[styles.categoryTab, isDark && {borderColor:COLOR.primary}]}>
      <TouchableOpacity onPress={() => setIndex(0)} style={[styles.categoryTabItem, index === 0 && styles.categoryTabItemActive]}><Text style={[styles.categoryTabItemText, index === 0 && styles.categoryTabItemTextActive, isDark && index === 0 && {color:COLOR.primary}]}>All</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(1)} style={[styles.categoryTabItem, index === 1 && styles.categoryTabItemActive]}><Text style={[styles.categoryTabItemText, index === 1 && styles.categoryTabItemTextActive, isDark && index === 1 && {color:COLOR.primary}]}>Men</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(2)} style={[styles.categoryTabItem, index === 2 && styles.categoryTabItemActive]}><Text style={[styles.categoryTabItemText, index === 2 && styles.categoryTabItemTextActive, isDark && index === 2 && {color:COLOR.primary}]}>Women</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(3)} style={[styles.categoryTabItem, index === 3 && styles.categoryTabItemActive]}><Text style={[styles.categoryTabItemText, index === 3 && styles.categoryTabItemTextActive, isDark && index === 3 && {color:COLOR.primary}]}>Boy</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(4)} style={[styles.categoryTabItem, index === 4 && styles.categoryTabItemActive]}><Text style={[styles.categoryTabItemText, index === 4 && styles.categoryTabItemTextActive, isDark && index === 4 && {color:COLOR.primary}]}>Girl</Text></TouchableOpacity>
      <View style={styles.categoryTabItem}></View>
    </View>
  </View>
)




const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLOR.white },
  categoryTabItemActive: { borderBottomWidth: 1 },

  //Category Tab 

  categoryTabContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10
  },
  categoryTab: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLOR.lightGrey,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  categoryTabItem: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: COLOR.primary
  },
  categoryTabItemText: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    color: COLOR.lightGrey
  },
  categoryTabItemTextActive: {
    fontFamily: 'Lato-Bold',
    fontSize: 15,
    color: COLOR.black
  },
  product_list: {
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },


})