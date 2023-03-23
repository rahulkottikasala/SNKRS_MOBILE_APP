import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/Color'

export const Card = ({ isDark, cardImage, action }) => (

  <TouchableOpacity style={styles.card} onPress={action ? action : console.log("clicked")}>
    <View style={[styles.image_container, isDark && {backgroundColor:COLOR.black}]}>
      <View style={styles.label}><Text style={styles.labelText}>40% OFF</Text></View>
      {cardImage && <Image style={styles.image} source={cardImage} />}
    </View>
    <View style={styles.info_container}>
      <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.product_name, isDark && {color:COLOR.secondary_alpha}]}>Converse All Star Sneakers </Text>
      <View style={styles.price_container}>
        <Text style={styles.offer_price}>$180.00</Text>
        <Text style={styles.current_price}>$200.70</Text>
      </View>
    </View>
  </TouchableOpacity>
)


const styles = StyleSheet.create({

  card: {
    width: '45%',
    height: 260,
    marginBottom: 10
  },
  image_container: {
    width: '100%',
    height: '70%',
    backgroundColor: COLOR.light_grey_alpha,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain'
  },
  label: {
    width: 60,
    height: 25,
    backgroundColor: COLOR.primary,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    right: 0,
    top: 20,
    alignItems: 'center',
    justifyContent: 'center'

  },
  labelText: {
    fontFamily: 'Lato-Bold',
    fontSize: 10,
    color: COLOR.secondary_shade
  },
  info_container: {
    paddingHorizontal: 5,
  },
  product_name: {
    fontFamily: 'SemiBold',
    color: COLOR.black,
    fontSize: 16,
    marginBottom: 5
  },
  price_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10
  },
  offer_price: {
    fontFamily: 'Lato-Regular',
    color: COLOR.primary,
    fontSize: 16
  },
  current_price: {
    fontFamily: 'Lato-Regular',
    color: COLOR.lightGrey,
    fontSize: 13,
    textDecorationLine: 'line-through'
  }

})