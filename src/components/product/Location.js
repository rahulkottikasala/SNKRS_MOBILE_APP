import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/Color'

export const Location = ({isDark}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.subContainer ,isDark && {borderWidth:0, backgroundColor:COLOR.black}]}>
                <View style={styles.textWrap}>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={[styles.topText,isDark && {color:COLOR.secondary_alpha}]}>Deliver to : <Text style={{ fontSize: 17 }}>Rahul K , 12345</Text></Text>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={[styles.bottomText,,isDark && {color:COLOR.secondary_alpha, opacity:.6}]}>abc, ABC adress, hidden - area  ABC adress, hidden - area</Text>
                </View>
                <View style={styles.btnWrap}>
                    <TouchableOpacity style={[styles.button,isDark && {borderColor:COLOR.secondary_alpha}]}><Text style={[styles.btnText,,isDark && {color:COLOR.secondary_alpha}]}>Change</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnText: { fontSize: 12, color: COLOR.backgroundBlack, fontFamily: 'Lato-Bold' },
    button: { width: 80, height: 30, borderRadius: 10, alignItems: "center", justifyContent: 'center', borderWidth: 1, borderColor: COLOR.backgroundBlack },
    btnWrap: { width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' },
    bottomText: { fontSize: 13, color: COLOR.grey, fontFamily: 'Lato-Bold', marginHorizontal:5 },
    topText: {marginBottom: 5, fontSize: 15, color: COLOR.black, fontFamily: 'Lato-Bold' },
    textWrap: { width: '70%', height: '100%', paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center' },
    subContainer: { width: '100%', height: '100%', borderWidth: 1, borderColor: COLOR.grey, borderRadius: 10, flexDirection: 'row' },
    container: { width: '100%', height: 70, marginTop: 15, paddingHorizontal: 20 },
})