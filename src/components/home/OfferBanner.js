import {StyleSheet, View, Text, Image} from 'react-native'
import { COLOR } from '../../const/Color'
import BannerImage from './../../assets/images/BannerImage.png'

export const OfferBanner  = () => (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.offerPerc}>40% OFF</Text>
        <Text style={styles.subText}>Shop All Our New {'\n'}Markdowns</Text>
      </View>
      <Image style={styles.bannerImage} source={BannerImage} />
    </View>
  )
  
  const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:160,
    paddingHorizontal:20,
    justifyContent:'center',
    marginTop:20
  },
  subContainer:{
  width:'100%',
  height:140,
  backgroundColor:COLOR.secondary_shade, 
  borderRadius:20,
  elevation:.5,
  justifyContent:'center',
  paddingHorizontal:20
  },
  bannerImage:{
    width:140,
    height:140,
    resizeMode:'contain',
    position:'absolute',
    right:5,
    top:-30,
  },
  offerPerc:{
    fontSize:28, 
    fontFamily:'Lato-Bold',
    color:COLOR.black,
    marginBottom:5,
  },
  subText:{
    fontSize:16, 
    marginTop:5, 
    fontFamily:'Lato-Regular',
    color:COLOR.grey
  }
  })