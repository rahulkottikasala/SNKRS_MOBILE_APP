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
import Animated, { Easing, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { nativeViewGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
const { width, height } = Dimensions.get('window');


const Cart = ({ navigation }) => {
    const isDark = useColorScheme() === 'dark';

    const handleBackNavigation = () => {
        navigation.pop()
    }

    const [bottomActions, setBottomActions] = useState(null)

    const topEdge = bottomActions?.y - height + bottomActions?.height


    const lastContentOffset = useSharedValue(0);
    const isScrolling = useSharedValue(false);
    const hiddenFont = useSharedValue(false)
    const paymentH = useSharedValue(70)
    const fontSizeTop = useSharedValue(15)
    const fontSizeBottom = useSharedValue(13)

    const scrollY = useSharedValue(0)
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
            scrollY.value = event.contentOffset.y;
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
    }, );

    console.log(borderRemove);

    return (
        <View style={[styles.container, isDark && { backgroundColor: COLOR.backgroundBlack }]}>
            {/* <Header title={"My Cart"} isCart backBtn={handleBackNavigation} /> */}

            {/* <Animated.View style={[styles.locContainer, actionBarStyle]}>
                <View style={[styles.subContainer, isDark && { borderWidth: 0, backgroundColor: COLOR.black }]}>
                    <View style={styles.textWrap}>
                        <Animated.Text ellipsizeMode='tail' numberOfLines={1} style={[styles.topText, isDark && { color: COLOR.secondary_alpha, }, fontZero]}>Deliver to : <Animated.Text style={[{ fontSize: 17 }, fontDec]}>Rahul K , 12345</Animated.Text></Animated.Text>
                        <Animated.Text ellipsizeMode='tail' numberOfLines={1} style={[styles.bottomText, isDark && { color: COLOR.secondary_alpha, opacity: .6 }, fontZero]}>abc, ABC adress, hidden - area  ABC adress, hidden - area</Animated.Text>
                    </View>
                    <View style={styles.btnWrap}>
                        <TouchableOpacity><Animated.View style={[styles.button, isDark && { borderColor: COLOR.secondary_alpha }, borderRemove]}><Animated.Text style={[styles.btnText, , isDark && { color: COLOR.secondary_alpha }]}>Change</Animated.Text></Animated.View></TouchableOpacity>
                    </View>
                </View>
            </Animated.View> */}

            <Animated.ScrollView onScroll={scrollHandler} showsVerticalScrollIndicator={false} >

                <Card isCart isDark={isDark} />
                <Card isCart isDark={isDark} />
                <Card isCart isDark={isDark} />
                <Card isCart isDark={isDark} />
                <Card isCart isDark={isDark} />
                <Card isCart isDark={isDark} />
                <BillCard isDark={isDark} />

                {/* Warning */}
                <View style={placeStyles.safetyCont}>
                    <Text numberOfLines={2} style={placeStyles.bottomText}>Safe and secure payments. Eazy returns. 100% Authentic products.</Text>
                </View>

                {/* Space */}
                <View
                onLayout={ev => {
                    setBottomActions(ev.nativeEvent.layout)
                }}
                 style={{width:'100%', height:80, justifyContent:'center', marginTop:20, paddingHorizontal:20}}>
                    <View style={{backgroundColor:"red",width:'100%', height:60}}>

                    </View>
                </View>


                {/* <PlaceOrderButton isDark={isDark} /> */}
                <FeaturedProduct isDark={isDark} />
                <InterstingProduct isDark={isDark} />

                <ViewHeight />
            </Animated.ScrollView>

            {/* Bottom  */}

         {   
         bottomActions &&
        <Animated.View style={[placeStyles.container,{
            transform: [{translateY :interpolate(scrollY.value, [-1, 0, topEdge - 1, topEdge, topEdge + 1],[0, 0, 0, 0, -1])}]
        }, isDark && { backgroundColor: COLOR.backgroundBlack }]}>
                <View style={[placeStyles.subCont, isDark && { borderColor: COLOR.secondary_alpha }]}>
                    <View style={placeStyles.textWrap}>
                        <Text numberOfLines={1} style={[placeStyles.topText, , isDark && { color: COLOR.secondary_alpha }]}><Text>Total : </Text>$240</Text>

                    </View>
                    <View style={placeStyles.btnWrap}>
                        <TouchableOpacity style={placeStyles.button}><Text style={placeStyles.btnText}>Place Order</Text></TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
}

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

const placeStyles = StyleSheet.create({

    safetyCont: { width: '90%', alignSelf: 'center', marginTop: 20, height: 50, borderWidth: .5, borderColor: COLOR.red, opacity: .8, alignItems: "center", justifyContent: 'center' },
    container: { width: '100%', height: 80, justifyContent: 'center', paddingHorizontal: 20, marginTop: 20, position: 'absolute', bottom: 0, backgroundColor: COLOR.white },
    subCont: { width: '100%', height: 60, borderWidth: 1, borderColor: COLOR.primary, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, flexDirection: 'row' },
    btnText: { fontSize: 13, color: COLOR.secondary_alpha, fontFamily: 'Lato-Black' },
    button: { width: 110, height: 40, borderRadius: 10, alignItems: "center", justifyContent: 'center', backgroundColor: COLOR.primary },
    btnWrap: { width: '40%', height: '100%', alignItems: 'center', justifyContent: 'center' },
    bottomText: { fontSize: 11, color: COLOR.red, fontFamily: 'Lato-Bold', marginHorizontal: 5, },
    topText: { fontSize: 20, color: COLOR.black, fontFamily: 'Lato-Bold', marginLeft: 10 },
    textWrap: { width: '60%', height: '100%', paddingHorizontal: 10, justifyContent: 'center', paddingVertical: 5 },
})