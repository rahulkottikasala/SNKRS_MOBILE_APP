import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/Color'
import { NormalLine } from '../Line'

export const PlaceOrderButton = ({isDark}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.subCont,isDark && {borderColor:COLOR.secondary_alpha}]}>
                <View style={styles.textWrap}>
                    <Text numberOfLines={1} style={[styles.topText,,isDark && {color:COLOR.secondary_alpha}]}><Text>Total : </Text>$240</Text>
                    <View style={styles.safetyCont}>

                        <Text numberOfLines={2} style={styles.bottomText}>Safe and secure payments. Eazy returns. 100% Authentic products.</Text>
                    </View>
                </View>
                <View style={styles.btnWrap}>
                    <TouchableOpacity style={styles.button}><Text style={styles.btnText}>Place Order</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    safetyCont: { width: '100%', height: 40, borderWidth: .5, borderColor: COLOR.red, opacity: .8, alignItems: "center", justifyContent: 'center' },
    container: { width: '100%', height: 100, paddingHorizontal: 20, marginTop: 20 },
    subCont: { width: '100%', height: 100, borderWidth: 1, borderColor: COLOR.primary, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, flexDirection: 'row' },
    btnText: { fontSize: 13, color: COLOR.secondary_alpha, fontFamily: 'Lato-Black' },
    button: { width: 110, height: 40, borderRadius: 10, alignItems: "center", justifyContent: 'center', backgroundColor: COLOR.primary },
    btnWrap: { width: '40%', height: '100%', alignItems: 'center', justifyContent: 'center' },
    bottomText: { fontSize: 11, color: COLOR.red, fontFamily: 'Lato-Bold', marginHorizontal: 5, },
    topText: { fontSize: 20, color: COLOR.black, fontFamily: 'Lato-Bold', marginLeft: 10 },
    textWrap: { width: '60%', height: '100%', paddingHorizontal: 10, justifyContent: 'space-between', paddingVertical: 5 },
})