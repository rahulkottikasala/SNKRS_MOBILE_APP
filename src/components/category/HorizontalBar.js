import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import filter from '../../assets/icons/filter.png'
import { COLOR } from '../../const/Color'


export const HorizontalBar = () => (
    <View style={styles.horizontalFilterContainer}>
      <View style={styles.filterBox}>
        <View style={styles.filterImageContainer}>
          <Image source={filter} style={styles.filterImage} />
        </View>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.horizontalFilter}>
        <View style={styles.horizontalFilterCard}><Text style={{ fontWeight: '700' }}>Adidas</Text></View>
        <View style={styles.horizontalFilterCard}><Text style={{ fontWeight: '700' }}>Nike</Text></View>
        <View style={styles.horizontalFilterCard}><Text style={{ fontWeight: '700' }}>Reebok</Text></View>
        <View style={styles.horizontalFilterCard}><Text style={{ fontWeight: '700' }}>New Balance</Text></View>
      </ScrollView>
    </View>
  )
  

  const styles ={
    horizontalFilterContainer: { height: 45, width: '100%', paddingLeft: 10, paddingRight: 20, flexDirection: 'row' },
    filterBox: { width: '18%', height: '100%', alignItems: 'center', },
    horizontalFilter: { width: '82%', height: '100%' },
    filterImageContainer: { width: 45, height: 45, backgroundColor: COLOR.secondary, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
    filterImage: { width: 27, height: 27 },
    horizontalFilterCard: { height: 45, width: 100, marginRight: 10, backgroundColor: COLOR.secondary, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }
  }
  