import { View, Text, TextInput, ToastAndroid, StatusBar, useColorScheme } from 'react-native'
import React, { useState, useEffect } from 'react'
import { COLOR } from '../const/Color'
import { AtmCardBack, AtmCardFront } from '../components/payment/AtmCard'
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import ViewHeight from '../components/ViewHeight'
import Button from '../components/auth/Button'

const CardDetails = () => {

  const [cardNumber, setCardNumber] = useState("")
  const [name, setName] = useState("")
  const [expiryMonth, setExpiryMonth] = useState("")
  const [expiryYear, setExpiryYear] = useState("")
  const [cvv, setCvv] = useState("")
  const [focus, setFocus] = useState(false)

  const isDark = useColorScheme() === "dark";

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
    <View style={[{ flex: 1, backgroundColor: COLOR.white }, isDark && { backgroundColor: COLOR.backgroundBlack }]}>
        {
      isDark ?
        <StatusBar backgroundColor={COLOR.backgroundBlack} barStyle='light-content' />
        : <StatusBar backgroundColor={COLOR.white} barStyle='dark-content' />
    }
      <Header />
      <ScrollView>
        <View style={{ paddingHorizontal: 20, marginTop: 30, alignItems: "center" }}>
          {focus ?
            <AtmCardBack cvv={cvv} />
            : <AtmCardFront cardNumber={cardNumber} name={name} expiry={expiryMonth.length == 1 ? "0" + expiryMonth + expiryYear : expiryMonth + expiryYear} cvv={cvv} />
          }
          <View style={{ width: '100%', paddingHorizontal: 10, marginTop: 40 }}>
            <Text style={[{ fontSize: 12, fontFamily: 'Lato-Bold', marginLeft: 10 ,color:COLOR.black }, isDark && {color:COLOR.secondary_alpha}]}>Name</Text>
            <TextInput onFocus={() => setFocus(false)} maxLength={25} keyboardType="ascii-capable" value={name} onChangeText={setName} style={[{ marginTop: 10, marginBottom: 25, width: '100%', height: 40, borderRadius: 10, paddingHorizontal: 25, borderWidth:.8, borderColor:COLOR.grey, color:COLOR.black}, isDark &&  {color:COLOR.secondary_alpha, backgroundColor: COLOR.black,}]} />

            <Text style={[{ fontSize: 12, fontFamily: 'Lato-Bold', marginLeft: 10 ,color:COLOR.black }, isDark && {color:COLOR.secondary_alpha}]}>Card Number</Text>
            <TextInput onFocus={() => setFocus(false)} maxLength={16} keyboardType="phone-pad" value={cardNumber} onChangeText={setCardNumber} style={[{ marginTop: 10, marginBottom: 25, width: '100%', height: 40,  borderRadius: 10, paddingHorizontal: 20, borderWidth:.8, borderColor:COLOR.grey, color:COLOR.black}, isDark &&  {color:COLOR.secondary_alpha, backgroundColor: COLOR.black,}]} />

            <View style={{ flexDirection: 'row', }}>
              <View style={{ width: '50%', }}>
                <Text style={[{ fontSize: 12, fontFamily: 'Lato-Bold', marginLeft: 10, color:COLOR.black }, isDark && {color:COLOR.secondary_alpha}]}>Valid Thru.</Text>
                <View style={{ flexDirection: 'row' }}>

                  <TextInput onFocus={() => setFocus(false)} placeholder='MM' placeholderTextColor={isDark ? COLOR.secondary_alpha : COLOR.grey} maxLength={2} keyboardType="phone-pad" value={expiryMonth} onChangeText={setExpiryMonth} style={[{ marginTop: 10, marginRight: 10, width: '30%', height: 40,borderRadius: 10, paddingHorizontal: 10, fontSize: 15, color: COLOR.black ,borderWidth:.8, borderColor:COLOR.grey}, isDark &&  { color: COLOR.secondary_alpha ,backgroundColor: COLOR.black,}]} />
                  <TextInput onFocus={() => setFocus(false)} placeholder='Y Y' placeholderTextColor={isDark ? COLOR.secondary_alpha : COLOR.grey} maxLength={2} keyboardType="phone-pad" value={expiryYear} onChangeText={setExpiryYear} style={[{ marginTop: 10, width: '30%', height: 40,  borderRadius: 10, paddingHorizontal: 10, fontSize: 15, color: COLOR.black ,borderWidth:.8, borderColor:COLOR.grey}, isDark &&  { color: COLOR.secondary_alpha , backgroundColor: COLOR.black,}]} />
                </View>
              </View>
              <View style={{ width: '50%', alignItems: 'flex-end' }}>
                <Text style={[{ fontSize: 12, fontFamily: 'Lato-Bold', marginRight: 10 , color:COLOR.black }, isDark && {color:COLOR.secondary_alpha}]}>CVV</Text>
                <TextInput onFocus={() => setFocus(true)} maxLength={3} keyboardType="phone-pad" value={cvv} onChangeText={setCvv} style={[{ marginTop: 10, marginBottom: 25, width: '70%', height: 40, borderRadius: 10, paddingHorizontal: 20, borderWidth:.8, borderColor:COLOR.grey, color:COLOR.black}, isDark &&  {color:COLOR.secondary_alpha, backgroundColor: COLOR.black,}]} />
              </View>
            </View>
          </View>

          <Button defFont padding={10}  btnName={"Submit"} />

          <ViewHeight />

        </View>
      </ScrollView>

    </View >
  )
}

export default CardDetails


