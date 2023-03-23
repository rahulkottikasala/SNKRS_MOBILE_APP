import { View, StyleSheet, Image, Text, Alert, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'

import Socks from './../../assets/images/socks.jpg'
import Laces from './../../assets/images/laces.jpg'
import Protector from './../../assets/images/Protector.jpg'
import Insole from './../../assets/images/insole.jpg'
import { COLOR } from '../../const/Color'




export const Accessories = ({isDark}) => (
    <>
        <View style={styles.titleContainer}>
            <Text style={[styles.acceTitle, isDark && {color:COLOR.secondary_alpha}]}>Accessories</Text>
            <Text onPress={() => ToastAndroid.showWithGravity('Under Construction',ToastAndroid.SHORT,ToastAndroid.BOTTOM,)} style={styles.acceTitleNav}>See More</Text>
        </View>
        <View style={styles.acceContainer}>
            <Card isDark={isDark} image={Socks} name={'Socks'} />
            <Card isDark={isDark} image={Laces} name={'Laces'} />
            <Card isDark={isDark} image={Protector} name={'Shoe Protector'} />
            <Card isDark={isDark} image={Insole} name={'Insole'} />
        </View>
    </>
)


const Card = ({ image, name, isDark }) => (
    <TouchableOpacity  onPress={() => ToastAndroid.showWithGravity('Under Construction',ToastAndroid.SHORT,ToastAndroid.BOTTOM,)} style={styles.accCard}>
        <Image source={image} style={[styles.cardImage, isDark && {opacity:.8, backgroundColor:'#000'}]} />
        <Text style={styles.cardText}>{name}</Text>
    </TouchableOpacity>
)



const styles = StyleSheet.create({
    acceContainer: { width: '100%', paddingHorizontal: 20, paddingTop: 0, paddingBottom: 10, marginTop: 10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
    titleContainer: { width: '100%', paddingHorizontal: 20, flexDirection: 'row' , justifyContent:'space-between', alignItems:"center"},
    acceTitle: { fontSize: 18, fontFamily: 'Lato-Bold', color: COLOR.black },
    acceTitleNav:{fontSize:14, fontFamily:'Lato-Bold', color:COLOR.primary},
    accCard: { width: '48%', height: 100, backgroundColor: 'lightblue', marginBottom: 10, borderRadius: 10, overflow: 'hidden', backgroundColor: COLOR.secondary_shade, alignItems: 'center', justifyContent: 'center', },
    cardImage: { width: '100%', height: '100%', resizeMode: 'cover', opacity: .8 },
    cardText: { fontSize: 16, fontFamily: 'Bold', position: 'absolute', color: COLOR.black }
})