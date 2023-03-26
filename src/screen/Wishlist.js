import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import { Card } from '../components/product/Card'
import ViewHeight from '../components/ViewHeight'
import { COLOR } from '../const/Color'

const Wishlist = () => {
  const isDark = useColorScheme() === "dark"
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.headerContainer}>
        <View style={styles.subHeader}>
          <Text style={styles.title}>Wishlist</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <Card isDark={isDark} />
        <Card isDark={isDark} />
        <ViewHeight />
      </ScrollView>

    </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({
  title: { fontSize: 20, fontFamily: 'Lato-Bold', color: COLOR.backgroundBlack, textAlign: "center", marginVertical: 10, },
  subHeader: { width: '100%', height: 50, borderWidth: 1 },
  headerContainer: { width: '100%', height: 60, paddingHorizontal: 20, alignItems: 'center', },
  container: { flex: 1 }
})