import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import React from 'react'
import { COLOR } from '../../const/Color'

export const ProfileCard = ({name, action}) => {
  return (
    <TouchableOpacity style={styles.profileCard}>
            <Text style={styles.cardTitle}>{name}</Text>
          </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    profileCard: { height: 50, width: '100%', borderRadius:10, backgroundColor:COLOR.secondary_alpha, justifyContent:'center', paddingHorizontal:20, marginTop:15 },
    cardTitle:{fontSize:14, fontFamily:'Lato-Bold'}
  })

