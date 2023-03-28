import { View, Text, TextInput, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLOR } from '../const/Color'
import { AtmCardBack, AtmCardFront } from '../components/payment/AtmCard'
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'

const CardDetails = () => {

  const [cardNumber, setCardNumber] = useState("")
  const [name, setName] = useState("")
  const [expiryMonth, setExpiryMonth] = useState("")
  const [expiryYear, setExpiryYear] = useState("")
  const [cvv, setCvv] = useState("")
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    handleMonth()

  }, [expiryMonth])


  const handleMonth = () => {

    if (expiryMonth.length > 1) {

      if (!(Number(expiryMonth) <= 12)) {
        setExpiryMonth("")
        ToastAndroid.showWithGravity('Invalid Month', ToastAndroid.SHORT, ToastAndroid.CENTER,)
      }
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLOR.backgroundBlack }}>
      <Header />
      <ScrollView>
        <View style={{ paddingHorizontal: 20, marginTop: 30, alignItems: "center" }}>
          {focus ?
            <AtmCardBack cvv={cvv} />
            : <AtmCardFront cardNumber={cardNumber} name={name} expiry={expiryMonth.length == 1 ? "0" + expiryMonth + expiryYear : expiryMonth + expiryYear} cvv={cvv} />
          }
          <View style={{ width: '100%', paddingHorizontal: 10, marginTop: 40 }}>
            <Text style={{ fontSize: 12, fontFamily: 'Lato-Bold', marginLeft: 10 }}>Name</Text>
            <TextInput onFocus={() => setFocus(false)} maxLength={25} keyboardType="ascii-capable" value={name} onChangeText={setName} style={{ marginTop: 10, marginBottom: 25, width: '100%', height: 40, backgroundColor: COLOR.black, borderRadius: 10, paddingHorizontal: 25, }} />

            <Text style={{ fontSize: 12, fontFamily: 'Lato-Bold', marginLeft: 10 }}>Card Number</Text>
            <TextInput onFocus={() => setFocus(false)} maxLength={16} keyboardType="phone-pad" value={cardNumber} onChangeText={setCardNumber} style={{ marginTop: 10, marginBottom: 25, width: '100%', height: 40, backgroundColor: COLOR.black, borderRadius: 10, paddingHorizontal: 20, }} />

            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: '50%', }}>
                <Text style={{ fontSize: 12, fontFamily: 'Lato-Bold', marginLeft: 10 }}>Valid Thru.</Text>
                <View style={{ flexDirection: 'row' }}>

                  <TextInput onFocus={() => setFocus(false)} placeholder='MM' placeholderTextColor={COLOR.secondary_alpha} maxLength={2} keyboardType="phone-pad" value={expiryMonth} onChangeText={setExpiryMonth} style={{ marginTop: 10, marginRight: 10, width: '30%', height: 40, backgroundColor: COLOR.black, borderRadius: 10, paddingHorizontal: 10, fontSize: 15, color: COLOR.secondary_alpha }} />
                  <TextInput onFocus={() => setFocus(false)} placeholder='Y Y' placeholderTextColor={COLOR.secondary_alpha} maxLength={2} keyboardType="phone-pad" value={expiryYear} onChangeText={setExpiryYear} style={{ marginTop: 10, width: '30%', height: 40, backgroundColor: COLOR.black, borderRadius: 10, paddingHorizontal: 10, fontSize: 15, color: COLOR.secondary_alpha }} />
                </View>
              </View>
              <View style={{ width: '50%', alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 12, fontFamily: 'Lato-Bold', marginRight: 10 }}>CVV</Text>
                <TextInput onFocus={() => setFocus(true)} maxLength={3} keyboardType="phone-pad" value={cvv} onChangeText={setCvv} style={{ marginTop: 10, marginBottom: 25, width: '70%', height: 40, backgroundColor: COLOR.black, borderRadius: 10, paddingHorizontal: 20, }} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

    </View >
  )
}

export default CardDetails


