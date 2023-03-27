import { View, Text, StyleSheet, useColorScheme, Dimensions } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { ScrollView } from 'react-native-gesture-handler'
import { Card } from '../components/product/Card'
import ViewHeight from '../components/ViewHeight'
import { COLOR } from '../const/Color'
import Animated, { Easing, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
const { width } = Dimensions.get('window')

const Wishlist = () => {
  const isDark = useColorScheme() === "dark";
  const translateY = useSharedValue(0);
  const borderWidth = useSharedValue(1)
  const font = useSharedValue(17)
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);

  const actionBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(translateY.value, {
            duration: 750,
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
    };
  });

  const borderChange = useAnimatedStyle(() => {
    return {
      borderWidth: withTiming(borderWidth.value, {
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      }),
    }
  })

  const textChange = useAnimatedStyle(() => {
    return {
      fontSize: withTiming(font.value, {
        duration: 750,
        easing: Easing.inOut(Easing.ease),
      }),
    }
  })

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      if (
        event.contentOffset.y == 0 || event.contentOffset.y < 10
      ) {
          translateY.value = 0;
          font.value = 17
          borderWidth.value = 1;
      } else if (
        lastContentOffset.value < event.contentOffset.y &&
        isScrolling.value
      ) {
        translateY.value = -(width / 3);
        font.value = 15
        borderWidth.value = 0
      }
      lastContentOffset.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
      isScrolling.value = false;
    },
  });

  return (
    <View style={styles.container}>
      <Header />
      <Animated.View style={[styles.headerContainer, actionBarStyle]}>
        <Animated.View style={[styles.subHeader, borderChange, isDark && { borderColor: COLOR.secondary_alpha, opacity: .8 }]}>
          <Animated.Text style={[styles.title, textChange, isDark && { color: COLOR.secondary_alpha }]}>Wishlist</Animated.Text>
        </Animated.View>
      </Animated.View>
      <Animated.ScrollView onScroll={scrollHandler} showsVerticalScrollIndicator={false} >
        <Card isDark={isDark} />
        <Card isDark={isDark} />
        <Card isDark={isDark} />
        <Card isDark={isDark} />
        <Card isDark={isDark} />
        <Card isDark={isDark} />
        <Card isDark={isDark} />
        <Card isDark={isDark} />
        <Card isDark={isDark} />
        <Card isDark={isDark} />
        <Card isDark={isDark} />
        <ViewHeight />
      </Animated.ScrollView>

    </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({
  title: { fontSize: 18, fontFamily: 'Lato-Bold', color: COLOR.backgroundBlack, textAlign: "center", marginVertical: 10, },
  subHeader: { width: '100%', height: 40, borderWidth: 1, justifyContent: 'center' },
  headerContainer: { width: '100%', height: 50, paddingHorizontal: 20, alignItems: 'center', },
  container: { flex: 1 }
})