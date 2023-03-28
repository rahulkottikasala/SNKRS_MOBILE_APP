
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/Color'

export default function ProductHeader({name,padding, isDark}) {
    return (
        <View style={[styles.headerCont, padding && {height:padding + 40}]}>
            <Text style={[styles.headerText, isDark && {color:COLOR.secondary_alpha}]}>{name}</Text>
            <Text style={styles.viewAllText}>View All</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerCont: {
        width: '100%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15,
    },
    viewAllText: { fontSize: 15, fontFamily: 'Lato-Bold', color: COLOR.primary },
    headerText: { fontSize: 18, fontFamily: 'Lato-Bold', color: COLOR.black },
})