import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'

import Socks from './../../assets/images/socks.jpg'
import Laces from './../../assets/images/laces.jpg'
import Protector from './../../assets/images/Protector.jpg'
import Insole from './../../assets/images/insole.jpg'
import { COLOR } from '../../const/Color'




export const Accessories = () => (
    <View style={styles.acceContainer}>
        <Text style={styles.acceTitle}>Accessories</Text>
    <Card image={Socks} name={'Socks'} />
    <Card image={Laces} name={'Laces'} />
    <Card image={Protector} name={'Shoe Protector'} />
    <Card image={Insole} name={'Insole'} />
    </View>
    )


    const Card = ({image, name}) => (
        <View style={styles.accCard}>
        <Image source={image} style={styles.cardImage} />
        <Text style={styles.cartText}>{name}</Text>
      </View>
    )


    
const styles = StyleSheet.create({
    acceContainer :{ width:'100%', paddingHorizontal:20,paddingTop:40, paddingBottom:10, backgroundColor:COLOR.white, marginTop:10, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'},
    acceTitle:{fontSize:20, fontFamily:'Lato-Bold', color:COLOR.black, position:'absolute',top:5, marginLeft:25 },
    accCard: {width:'48%', height:100, backgroundColor:'lightblue', marginBottom:10, borderRadius:10,overflow:'hidden',  backgroundColor:COLOR.secondary_shade, alignItems:'center', justifyContent:'center',},
    cardImage: { width:'100%', height:'100%',resizeMode:'cover',opacity:.8},
    cartText : {fontSize:16, fontFamily:'Bold', position:'absolute',color:COLOR.black }
    })