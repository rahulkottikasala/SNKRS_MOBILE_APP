import { View, Text, StyleSheet, Image, TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import filter from '../../assets/icons/filter.png'
import { COLOR } from '../../const/Color'


export const HorizontalBar = ({isDark}) => (
    <View style={styles.horizontalFilterContainer}>
      <View style={styles.filterBox}>
        <View style={styles.filterImageContainer}>
          <Image source={filter} style={styles.filterImage} />
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.horizontalFilter}>
        <Item isDark={isDark} name={"Adidas"} />
        <Item isDark={isDark} name={"Nike"} />
        <Item isDark={isDark} name={"Reebook"} />
        <Item isDark={isDark} name={"New Balance"} />
        <Item isDark={isDark} name={"Puma"} />
        <Item isDark={isDark} name={"Under Armour"} />
        <Item isDark={isDark} name={"Ascis"} />
        <Item isDark={isDark} name={"Jordan"} />
        <Item isDark={isDark} name={"Skechers"} />
        <Item isDark={isDark} name={"Converse"} />
        <Item isDark={isDark} name={"Vans"} />
      </ScrollView>
    </View>
  )
  
  const Item  = ({name, isDark}) => (
    <TouchableOpacity  onPress={() => ToastAndroid.showWithGravity('Under Construction',ToastAndroid.SHORT,ToastAndroid.BOTTOM,)} style={styles.horizontalFilterCard}><Text style={[{ fontFamily:"Black", fontSize:12, color:COLOR.backgroundBlack }, isDark && {color:COLOR.secondary_alpha}]}>{name}</Text></TouchableOpacity>

  )

  const styles ={
    horizontalFilterContainer: { height: 40, width: '100%', paddingLeft: 10, paddingRight: 10, flexDirection: 'row' },
    filterBox: { width: '18%', height: '100%', alignItems: 'center', },
    horizontalFilter: { width: '82%', height: '100%' },
    filterImageContainer: { width: 40, height: 40, backgroundColor: COLOR.secondary_shade, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    filterImage: { width: 27, height: 27 },
    horizontalFilterCard: { height: 40, width: 100, marginRight: 10,borderWidth:1.5, borderColor: COLOR.secondary_shade, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }
  }
  