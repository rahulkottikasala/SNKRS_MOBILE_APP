import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/Color'
import High from '../../assets/dummy/jordan.png'
import Low from '../../assets/dummy/force1Red.png'
import Boot from '../../assets/dummy/boot.png'
import Run from '../../assets/dummy/running.png'
import Mid from '../../assets/dummy/mid.png'
import Tennis from '../../assets/dummy/tennis.png'

export const Types = () => 
  (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.typeContainer}>
      <Ball image={High} name={"HIGH TOP"} />
      <Ball image={Low} name={"LOW"} />
      <Ball image={Run} name={"RUNNING"} />
      <Ball image={Boot} name={"BOOT"} />
      <Ball image={Mid} name={"MID"} />
      <Ball image={Tennis} name={"TENNIS"} />
      <View style={{width:30, height:10}}/>
    </ScrollView>
  )


  const Ball = ({image, name}) => (
    <TouchableOpacity onPress={() => ToastAndroid.showWithGravity('Under Construction',ToastAndroid.SHORT,ToastAndroid.BOTTOM,)} style={styles.ballContainer}>
      <Text style={styles.label}>{name}</Text>
      <Image source={image} style={styles.image}/>
    </TouchableOpacity>
  )

  const styles = StyleSheet.create({
    typeContainer:{width:'100%', paddingLeft:20, paddingRight:10, paddingVertical:10,marginTop:20  },
    ballContainer: {width:80, height:80, borderRadius:100, backgroundColor:COLOR.light_grey, marginRight:10, justifyContent:'center', alignItems:'center', overflow:'hidden'},
    image:{ height:'80%', width:'80%', resizeMode:'contain',opacity:.7},
    label:{position:'absolute', fontSize:13, fontFamily:'Lato-Black', color:COLOR.backgroundBlack, marginHorizontal:5}
  })

