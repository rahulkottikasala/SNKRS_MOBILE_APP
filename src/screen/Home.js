import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, useColorScheme, StatusBar, ToastAndroid } from 'react-native'
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
import InterstingProduct from '../components/home/InterstingProduct'
import FeaturedProduct from '../components/home/FeaturedProduct'

const Home = () => {

  const catProduct = [
    {
      id: '001',
      image: jordan
    },
    {
      id: '002',
      image: force1White
    },
    {
      id: '003',
      image: jordan
    },
    {
      id: '004',
      image: force1Red
    },
    {
      id: '005',
      image: converse
    },
    {
      id: '006',
      image: force1White
    }
  ]

  const isDark = useColorScheme() === 'dark';

  const navigation = useNavigation()
  const [categoryTabIndex, setCategoryTabIndex] = useState(1)

  const handleViewDetails = () => {
    navigation.navigate("ViewDetails")
  }


  return (
    <View style={[styles.container, isDark && { backgroundColor: COLOR.backgroundBlack }]}>
      <Header />
      <ScrollView stickyHeaderIndices={[2]} showsVerticalScrollIndicator={false} >
        <WelcomeText isDark={isDark} />
        <OfferBanner />
        <CategoryTab isDark={isDark} index={categoryTabIndex} setIndex={setCategoryTabIndex} />
        <View style={styles.product_list}>
          {/* -----card----- */}
          {
            catProduct?.slice(0, 6).map((item, i) => (
              <Card key={i} isDark={isDark} action={handleViewDetails} cardImage={item.image} />

            ))
          }
        </View>
        <CategoryTabBottom isDark={isDark} />

        <FeaturedProduct isDark={isDark} />
        <InterstingProduct isDark={isDark} />

        <ViewHeight />
        <ViewHeight />
      </ScrollView>
    </View>
  )
}

export default Home



const CategoryTab = ({ isDark, index, setIndex }) => (
  <View style={[styles.categoryTabContainer, isDark && { backgroundColor: COLOR.backgroundBlack }]}>
    <View style={[styles.categoryTab, isDark && { borderColor: COLOR.primary }]}>
      <TouchableOpacity onPress={() => setIndex(0)} style={[styles.categoryTabItem, index === 0 && styles.categoryTabItemActive]}><Text style={[styles.categoryTabItemText, index === 0 && styles.categoryTabItemTextActive, isDark && index === 0 && { color: COLOR.primary }]}>All</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(1)} style={[styles.categoryTabItem, index === 1 && styles.categoryTabItemActive]}><Text style={[styles.categoryTabItemText, index === 1 && styles.categoryTabItemTextActive, isDark && index === 1 && { color: COLOR.primary }]}>Men</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(2)} style={[styles.categoryTabItem, index === 2 && styles.categoryTabItemActive]}><Text style={[styles.categoryTabItemText, index === 2 && styles.categoryTabItemTextActive, isDark && index === 2 && { color: COLOR.primary }]}>Women</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(3)} style={[styles.categoryTabItem, index === 3 && styles.categoryTabItemActive]}><Text style={[styles.categoryTabItemText, index === 3 && styles.categoryTabItemTextActive, isDark && index === 3 && { color: COLOR.primary }]}>Boy</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(4)} style={[styles.categoryTabItem, index === 4 && styles.categoryTabItemActive]}><Text style={[styles.categoryTabItemText, index === 4 && styles.categoryTabItemTextActive, isDark && index === 4 && { color: COLOR.primary }]}>Girl</Text></TouchableOpacity>
      <View style={styles.categoryTabItem}></View>
    </View>
  </View>
)

const CategoryTabBottom = ({ isDark }) => (
  <View style={styles.catBottWrap}>

    <TouchableOpacity onPress={() => ToastAndroid.showWithGravity('Under Construction', ToastAndroid.LONG, ToastAndroid.BOTTOM,)} style={styles.catBottomCont}>
      <Text style={[styles.catBottomText, isDark && { color: COLOR.secondary_alpha }]}>View All</Text>
    </TouchableOpacity>
  </View>
)




const styles = StyleSheet.create({
  catBottomText: { fontSize: 15, fontStyle: 'Lato-Bold', color: COLOR.backgroundBlack },
  catBottomCont: { width: '100%', height: 30, alignSelf: 'flex-end', justifyContent: 'center', borderWidth: 1, borderColor: COLOR.lightGrey, alignItems: 'center', justifyContent: "center" },
  catBottWrap: { paddingHorizontal: 20, width: '100%', height: 30 },
  container: { flex: 1, backgroundColor: COLOR.white },
  categoryTabItemActive: { borderBottomWidth: 1 },

  //Category Tab 

  categoryTabContainer: {
    width: '100%',
    paddingHorizontal: 20,
    height: 50,
    justifyContent: 'center',
    backgroundColor: COLOR.white
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