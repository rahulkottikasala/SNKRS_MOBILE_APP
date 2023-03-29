import { View, Text, useColorScheme, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header';
import { COLOR } from '../const/Color';
import { Card } from '../components/product/Card';
import ViewHeight from '../components/ViewHeight';
import { BillCard } from '../components/product/BillCard';
import { Location } from '../components/product/Location';
import { PlaceOrderButton } from '../components/product/PlaceOrderButton';
import FeaturedProduct from '../components/home/FeaturedProduct';
import InterstingProduct from '../components/home/InterstingProduct';
import Animated, { Easing, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
const { width, height } = Dimensions.get('window');

const Cart = ({ navigation }) => {
    const isDark = useColorScheme() === 'dark';

    const handleBackNavigation = () => {
        navigation.pop()
    }

    const lastContentOffset = useSharedValue(0);
    const isScrolling = useSharedValue(false);
    const hiddenFont = useSharedValue(false)
    const paymentH = useSharedValue(70)
    const fontSizeTop = useSharedValue(15)
    const fontSizeBottom = useSharedValue(13)


    const actionBarStyle = useAnimatedStyle(() => {
        return {
            height: withTiming(paymentH.value)
        };
    });

    const borderRemove = useAnimatedStyle(() => {
        return {
            borderWidth: withTiming(hiddenFont.value ? 0 : 1)
        }
    })

    const fontDec = useAnimatedStyle(() => {
        return {
            fontSize: withTiming(fontSizeTop.value)
        }
    })
    const fontZero = useAnimatedStyle(() => {
        return {
            fontSize: withTiming(fontSizeBottom.value)
        }
    })


    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            if (
                event.contentOffset.y == 0 || event.contentOffset.y < 3
            ) {
                hiddenFont.value = false
                paymentH.value = 70
                fontSizeTop.value = 15
                fontSizeBottom.value = 13
            } else if (
                lastContentOffset.value < event.contentOffset.y &&
                isScrolling.value
            ) {
                hiddenFont.value = true
                paymentH.value = 40
                fontSizeTop.value = 13
                fontSizeBottom.value = 0
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
        <View style={[styles.container, isDark && { backgroundColor: COLOR.backgroundBlack }]}>
            <Header title={"My Cart"} isCart backBtn={handleBackNavigation} />

            <Animated.View style={[styles.locContainer, actionBarStyle]}>
                <View style={[styles.subContainer, isDark && { borderWidth: 0, backgroundColor: COLOR.black }]}>
                    <View style={styles.textWrap}>
                        <Animated.Text ellipsizeMode='tail' numberOfLines={1} style={[styles.topText, isDark && { color: COLOR.secondary_alpha, }, fontZero]}>Deliver to : <Animated.Text style={[{ fontSize: 17 }, fontDec]}>Rahul K , 12345</Animated.Text></Animated.Text>
                        <Animated.Text ellipsizeMode='tail' numberOfLines={1} style={[styles.bottomText, isDark && { color: COLOR.secondary_alpha, opacity: .6 }, fontZero]}>abc, ABC adress, hidden - area  ABC adress, hidden - area</Animated.Text>
                    </View>
                    <View style={styles.btnWrap}>
                        <TouchableOpacity><Animated.View style={[styles.button, isDark && { borderColor: COLOR.secondary_alpha }, borderRemove]}><Animated.Text style={[styles.btnText, , isDark && { color: COLOR.secondary_alpha }]}>Change</Animated.Text></Animated.View></TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
            <Animated.ScrollView onScroll={scrollHandler} showsVerticalScrollIndicator={false} >

                <Card isCart isDark={isDark} />
                <Card isCart isDark={isDark} />
                <Card isCart isDark={isDark} />
                <Card isCart isDark={isDark} />
                <Card isCart isDark={isDark} />
                <Card isCart isDark={isDark} />
                <BillCard isDark={isDark} />
                <PlaceOrderButton isDark={isDark} />
                <FeaturedProduct isDark={isDark} />
                <InterstingProduct isDark={isDark} />
                <ViewHeight />
            </Animated.ScrollView>

        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLOR.white },
    btnText: { fontSize: 12, color: COLOR.backgroundBlack, fontFamily: 'Lato-Bold' },
    button: { width: 80, height: 30, borderRadius: 10, alignItems: "center", justifyContent: 'center', borderWidth: 1, borderColor: COLOR.backgroundBlack },
    btnWrap: { width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' },
    bottomText: { fontSize: 13, color: COLOR.grey, fontFamily: 'Lato-Bold', marginHorizontal: 5 },
    topText: { marginBottom: 5, fontSize: 15, color: COLOR.black, fontFamily: 'Lato-Bold' },
    textWrap: { width: '70%', height: '100%', paddingHorizontal: 10, paddingVertical: 5, justifyContent: 'center' },
    subContainer: { width: '100%', height: '100%', borderWidth: 1, borderColor: COLOR.grey, borderRadius: 10, flexDirection: 'row' },
    locContainer: { width: '100%', height: 70, marginBottom: 15, paddingHorizontal: 20 },
})