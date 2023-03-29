import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import React from 'react'
import { COLOR } from '../../const/Color'

export const ProfileCard = ({ name, action, isDark }) => {
  return (
    <TouchableOpacity onPress={action && action } style={[styles.profileCard, isDark && { borderWidth: 0, backgroundColor: COLOR.black }]}>
      <Text style={[styles.cardTitle, isDark && { color: COLOR.secondary_alpha }]}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  profileCard: { height: 60, width: '100%', borderRadius: 10, backgroundColor: COLOR.white, borderWidth: .8, borderColor: COLOR.primary, justifyContent: 'center', paddingHorizontal: 20, marginTop: 15 },
  cardTitle: { fontSize: 14, fontFamily: 'Lato-Bold', color:COLOR.black }
})

