import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/Color'
import InputText from '../auth/InputText'

const DeliveryAddress = ({ isDark }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.subContainer, isDark && {backgroundColor:COLOR.black, borderWidth:0}]}>
                <Text style={styles.title} >Delivery</Text>
                <View style={styles.pincodeContainer}>
                    <TextInput placeholder='PINCODE' keyboardType='phone-pad' maxLength={6} placeholderTextColor={isDark ? COLOR.grey :COLOR.secondary} style={[styles.pincodeInput, isDark && {borderColor:COLOR.white}]} />
                    <TouchableOpacity style={styles.pincodeCheckBtn} >
                        <Text style={styles.pincodeCheckBtnText}>Check</Text>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.deliveryDate, isDark && {color:COLOR.secondary_shade}]}>Delivery by30 Mar, Thursday | <Text style={styles.deliveryFee}>Delivery Charge ₹40</Text></Text>
              </View>

        </View>
    )
}

export default DeliveryAddress

const styles = StyleSheet.create({
    container: { width: '100%', height: 150 ,paddingHorizontal: 20,paddingVertical:10,marginTop:10, justifyContent:'center' },
    subContainer: { borderWidth: 2, borderColor: COLOR.secondary_shade, backgroundColor: COLOR.secondary_alpha, height: '100%', borderRadius: 10, padding: 10, justifyContent:'center' },
    title:{ fontSize:15, fontFamily:'Lato-Black', color:COLOR.primary},
    pincodeContainer:{paddingHorizontal:10,paddingVertical:5, width:'100%', height:50,marginTop:5, flexDirection:'row', justifyContent:"space-between"},
    pincodeInput:{width:'67%', height:'100%', borderColor:COLOR.black, borderWidth:.8, borderRadius:10,fontFamily:'Lato-Black', fontSize:15, color:COLOR.primary, paddingHorizontal:10},
    pincodeCheckBtn:{width:'30%', height:'100%', backgroundColor:COLOR.primary, borderRadius:10,alignItems:'center', justifyContent:'center'},
    pincodeCheckBtnText:{fontFamily:'Lato-Bold', fontSize:14, color:COLOR.secondary_alpha},
    deliveryDate:{fontFamily:'Lato-Bold', fontSize:12, color:COLOR.black, marginHorizontal:15, marginTop:5},
    deliveryFee:{color:COLOR.green}
})