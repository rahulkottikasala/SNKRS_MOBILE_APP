import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLOR } from '../const/Color'

const Payment = () => {
    const navigation = useNavigation()
  return (
    <View style={{flex:1, backgroundColor:COLOR.backgroundBlack, alignItems:"center", justifyContent:'center'}}>
      <Text style={{fontSize:35}} onPress={() => navigation.navigate("CardDetails")}>Payment ^</Text>
    </View>

    // <View style={{flex:1, }}>

    // </View>
  )
}

export default Payment

const styles = StyleSheet.create({})