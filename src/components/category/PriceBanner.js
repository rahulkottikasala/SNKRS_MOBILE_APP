import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/Color'

export const PriceBanner = () => {
  return (
    <View style={styles.container}>
     <TouchableOpacity  onPress={() => ToastAndroid.showWithGravity('Under Construction',ToastAndroid.SHORT,ToastAndroid.BOTTOM,)} style={styles.bannerContainer}>
        <Text style={styles.bannerTitle}>BIG SUPER SALE !</Text>
        <View style={styles.wrap}>

       <View style={styles.timeWrap}>

        <Text style={styles.info}>LIMITED TIME ONLY</Text>
        <Text style={styles.time}>THIS WEEKEND</Text>
        <View style={styles.shopNow}>
        <Text style={styles.shopText}>SHOP NOW</Text>
       </View>
        </View>

        <View style={[styles.offerWrap]}>
        <Text style={styles.offer}>Special offer </Text>
        <Text style={styles.perc}>35% OFF </Text>
        </View>

        </View>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
container:{ height:160, width:'100%', marginTop:10,paddingHorizontal:10,},
bannerContainer: { height:'100%', width:'100%', backgroundColor:COLOR.red, borderRadius:10, padding:10, justifyContent:'space-around'},
bannerTitle: { fontSize:16, fontFamily:'Lato Black',alignSelf:'center', fontWeight:'900', color:COLOR.white},
wrap:{flexDirection:'row', justifyContent:'space-between', alignItems:'center'},
timeWrap: {width:'48%'},
offerWrap: {width:'48%',height:70, backgroundColor:COLOR.white, borderRadius:100, padding:10, alignItems:'center', justifyContent:'center'},
offer:{ fontSize:15, fontFamily:'Bold', color:COLOR.backgroundBlack},
perc:{ fontSize:16, fontFamily:'Black', color:COLOR.backgroundBlack},
info:{ fontSize:18, fontFamily:'Black', color:COLOR.white, marginBottom:5},
time:{ fontSize:14, fontFamily:'Bold', color:COLOR.white, marginBottom:10},
shopNow:{ width:100, height:27, borderWidth:1, borderColor:COLOR.white, justifyContent:'center', alignItems:'center'},
shopText:{ fontSize:10, fontFamily:'Bold', color:COLOR.white, marginBottom:5},
})