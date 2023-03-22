import { View,  StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color'

const BackgroundImage = (props) => {
  const isDark = useColorScheme() === 'dark'
  return (
    <View style={[styles.container, isDark && {backgroundColor:COLOR.backgroundBlack}]}>
     <View style={[styles.leftCircle, isDark && {borderColor:COLOR.secondary,}]} />
     <View style={[styles.rightCircle, isDark && {borderColor:COLOR.secondary,}]} />
     {props.children}
    </View>
  )
}

export default BackgroundImage


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.white,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position:'relative',
    },
    leftCircle:{
        width:160,
        height:160, 
        borderRadius:160,
        borderWidth:1,
        borderColor:COLOR.backgroundBlack,
        left:-120,
        top:50
    },
    rightCircle:{
        width:160,
        height:160, 
        borderRadius:160,
        borderWidth:1,
        borderColor:COLOR.backgroundBlack,
        right:-120,
        top:-50
    }
    })