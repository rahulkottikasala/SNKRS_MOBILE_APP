import { View,  StyleSheet } from 'react-native'
import React from 'react'
import { COLOR } from '../const/Color'

const BackgroundImage = (props) => {
  return (
    <View style={styles.container}>
     <View style={styles.leftCircle} />
     <View style={styles.rightCircle} />
     {props.children}
    </View>
  )
}

export default BackgroundImage


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.backgroundBlack,
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
        borderColor:COLOR.secondary,
        left:-120,
        top:50
    },
    rightCircle:{
        width:160,
        height:160, 
        borderRadius:160,
        borderWidth:1,
        borderColor:COLOR.secondary,
        right:-120,
        top:-50
    }
    })