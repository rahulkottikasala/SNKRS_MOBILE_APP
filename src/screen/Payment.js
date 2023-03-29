import { StyleSheet, Text, View, useColorScheme, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLOR } from '../const/Color'
import Header from '../components/Header'
import { AtmCardBack, AtmCardFront } from '../components/payment/AtmCard'
import Animated, { BounceInLeft, Extrapolate, FlipInEasyX, FlipInEasyY, interpolate, SlideInLeft, SlideInRight, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'

const Payment = () => {
  const navigation = useNavigation()
  const isDark = useColorScheme() === 'dark';

  const rotateX = useSharedValue(0)
  const rotateY = useSharedValue(0)

  const [cardFace, setCardFace] = useState(true)

  const details = {
    cardNumber: "XXXXXXXXXXXX2090",
    name: "Rahul K",
    expiry: "1224",
    cvv: "XXX"
  }

  const handleBack = () => {
    navigation.pop()
  }

  const handleInsertCard = () => {
    navigation.navigate("CardDetails")
  }

  const gesture = Gesture.Pan()
    .onBegin((event) => {
      rotateX.value = withTiming(interpolate(event.y, [0, 226], [10, -10], Extrapolate.CLAMP));
      rotateY.value = withTiming(interpolate(event.x, [0, 300], [-10, 10], Extrapolate.CLAMP));
    })
    .onUpdate((event) => {
      rotateX.value = interpolate(event.y, [0, 226], [10, -10], Extrapolate.CLAMP);
      rotateY.value = interpolate(event.x, [0, 300], [-10, 10], Extrapolate.CLAMP);

    })
    .onFinalize(() => {
      rotateX.value = withTiming(0);
      rotateY.value = withTiming(0);
    })

  const cardStyle = useAnimatedStyle(() => {
    const rotateXvalue = `${rotateX.value}deg`
    const rotateYvalue = `${rotateY.value}deg`
    return {
      transform: [
        { perspective: 300 },
        { rotateX: rotateXvalue },
        { rotateY: rotateYvalue }
      ]
    }
  })

  return (
    <View style={[{ flex: 1, backgroundColor: COLOR.white, marginBottom: 20 }, isDark && { backgroundColor: COLOR.backgroundBlack }]}>
      <Header backBtn={handleBack} title={"Payment Details"} />
      <ScrollView>
        <View style={{ width: '100%', paddingHorizontal: 20, }}>

          <GestureDetector gesture={gesture}>
            <Animated.View style={[{
              zIndex: 300,
            }, cardStyle]}>

              {
                cardFace ?
                  <AtmCardFront cardNumber={details.cardNumber} name={details.name} expiry={details.expiry} />
                  : <AtmCardBack cvv={details.cvv} />
              }

            </Animated.View>
          </GestureDetector>

          <View style={{ width: '100%', height: 35, alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, flexDirection:'row' }}>
            <Text onPress={handleInsertCard} style={{fontSize:18, fontFamily:'Lato-Black', letterSpacing:1, color:COLOR.secondary}}>VISA CARD</Text>
            <View style={{ width: 100, height: 35, backgroundColor: 'lightgrey', overflow: 'hidden', borderRadius: 10, flexDirection: 'row' }}>
              {
                cardFace ?
                  <Animated.View  style={[{ width: 50, height: 35, borderRadius: 10, backgroundColor: COLOR.primary, position: 'absolute', left: 0 }]} />
                  : <Animated.View style={[{ width: 50, height: 35, borderRadius: 10, backgroundColor: COLOR.primary, position: 'absolute', right: 0 }]} />
              }
              <TouchableOpacity onPress={() => setCardFace(true)} style={{ width: 50, height: 35, justifyContent: "center" }}><Text style={[{ color: COLOR.grey, fontSize: 10, fontFamily: 'Lato-Black', textAlign: "center" }, cardFace && { color: COLOR.secondary_alpha, }]}>Front</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => setCardFace(false)} style={{ width: 50, height: 35, justifyContent: "center", }}><Text style={[{ color: COLOR.grey, fontSize: 10, fontFamily: 'Lato-Black', textAlign: "center" }, !cardFace && { color: COLOR.secondary_alpha, }]}>Back</Text></TouchableOpacity>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>

  )
}

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Payment />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({})