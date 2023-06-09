import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Image, useColorScheme, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../const/Color'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import jordan from '../assets/dummy/jordan.png'
import ViewIcon from '../assets/icons/view.png'
import ViewIconW from '../assets/icons/view-w.png'
import DeliveryAddress from '../components/product/DeliveryAddress'
import ViewHeight from '../components/ViewHeight'
import { STRING } from '../const/String'

const ViewDetails = () => {
    const isDark = useColorScheme() === 'dark';
    const navigation = useNavigation()
    const [cart, setCart] = useState(0)
    const [sizeSts, setSizeSts] = useState(3)
    const [outOfStock, setOutOfStock] = useState(false)

    const handleBackNavigation = () => {
        navigation.pop()
    }

    const handleAddToCart = () => {
        setCart(1)
    }
    const handleCartInc = () => {
        setCart(cart + 1)
    }
    const handleCartDec = () => {
        setCart(cart - 1)
    }

    const sizes = [
        { id: 0, value: 3, qnty: 2 },
        { id: 1, value: 3.5, qnty: 2 },
        { id: 2, value: 4, qnty: 2 },
        { id: 3, value: 4.5, qnty: 2 },
        { id: 4, value: 5, qnty: 0 },
        { id: 5, value: 5.5, qnty: 2 },
        { id: 6, value: 6, qnty: 0 },
        { id: 7, value: 6.5, qnty: 2 },
        { id: 8, value: 7, qnty: 2 },
        { id: 9, value: 7.5, qnty: 0 },
        { id: 10, value: 8, qnty: 0 },
        { id: 11, value: 8.5, qnty: 2 },
    ]

    return (
        <View style={styles.container}>
            <Header backBtn={handleBackNavigation} bg={isDark ? COLOR.backgroundBlack : COLOR.secondary_shade} />
            {
                isDark ?
                    <StatusBar backgroundColor={COLOR.backgroundBlack} barStyle='light-content' />
                    : <StatusBar backgroundColor={COLOR.secondary_shade} barStyle='dark-content' />
            }

            {/* ------------Scroll View------------- */}
            <ScrollView style={[styles.details_container, isDark && { backgroundColor: COLOR.backgroundBlack }]}>
                <View style={[styles.product_image_container, isDark && { backgroundColor: COLOR.black }]}>
                    <TouchableOpacity onPress={() => ToastAndroid.showWithGravity('Under Construction', ToastAndroid.SHORT, ToastAndroid.BOTTOM,)} style={{ width: 25, height: 25, position: 'absolute', bottom: 20, right: 20 }} >
                        <Image source={isDark ? ViewIconW : ViewIcon} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <Image style={styles.product_image} source={jordan} />
                </View>
                <View style={styles.product_name_container}>
                    <Text style={[styles.product_type, isDark && { color: COLOR.secondary_alpha }]}>Mens Sneaker</Text>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={[styles.product_Name, isDark && { color: COLOR.secondary_alpha }]}>Air Jordan One High Top Model</Text>
                </View>
                <SizeSheet setOutOfStock={setOutOfStock} isDark={isDark} sizeSts={sizeSts} sizes={sizes} setSizeSts={setSizeSts} />

                <DeliveryAddress isDark={isDark} />


                <ViewHeight />
            </ScrollView>

            {/* -----------------END--------------- */}

            {/* --------Cart Count container-------- */}
            <View style={[styles.cart_count_container, isDark && { borderTopWidth: 1, borderTopColor: COLOR.primary }]}>
                <View style={styles.price_container}>
                    <Text style={styles.price_labal_text}>Price :</Text>
                    <Text style={styles.offer_price}>{STRING.rupee} {cart > 0 ? 180.00 * cart : 180.00}    <Text style={styles.current_price}>{STRING.rupee} {cart > 0 ? 230.00 * cart : 230.00}</Text></Text>
                </View>
                <View style={styles.button_container}>
                    {cart > 0 && !outOfStock ?
                        <AfterCart decrement={handleCartDec} increment={handleCartInc} count={cart} />
                        : <BeforeCart outOfStock={outOfStock} addToCart={handleAddToCart} />}
                </View>
            </View>
            {/* ---------------END------------------ */}

        </View>
    )
}

export default ViewDetails

const BeforeCart = ({ addToCart, outOfStock }) => (
    <TouchableOpacity style={styles.before_cart_button} onPress={addToCart}>
        <Text style={styles.before_cart_btn_text}>{outOfStock ? "Out of stock" : "Add To Cart"}</Text>
    </TouchableOpacity>
)

const AfterCart = ({ increment, decrement, count }) => (
    <View style={styles.afterCartContainer}>
        <TouchableOpacity onPress={decrement} style={styles.count_dec_btn}><Text style={styles.count_btn_text}>-</Text></TouchableOpacity>
        <View style={styles.item_count_view}><Text style={styles.count_text}>{count}</Text></View>
        <TouchableOpacity onPress={increment} style={styles.count_inc_btn}><Text style={styles.count_btn_text}>+</Text></TouchableOpacity>
    </View>
)

const SizeSheet = ({ isDark, sizeSts, sizes, setSizeSts, setOutOfStock }) => (
    <View style={styles.size_container}>
        <Text style={[styles.size_text, isDark && { color: COLOR.secondary_alpha, opacity: .8 }]}>Size : </Text>
        <View style={styles.productSizes}>
            {sizes?.map((item, i) => (

                <TouchableOpacity onPress={() => {
                    setSizeSts(item.id)
                    if (item?.qnty < 1) {
                        setOutOfStock(true)
                        ToastAndroid.showWithGravity('Out Of Stock', ToastAndroid.LONG, ToastAndroid.BOTTOM,)

                    } else {
                        setOutOfStock(false)
                    }
                }} key={i} style={[styles.productSize, (item.id === sizeSts) && { backgroundColor: COLOR.primary, borderWidth: 0 }, !(item.id === sizeSts) && !isDark && (item.qnty < 1) && { borderWidth: 0, backgroundColor: COLOR.light_grey }, isDark && !(item.qnty < 1) && { borderColor: COLOR.primary }]}>
                    <Text style={[styles.size_value_text, isDark && { color: COLOR.secondary_alpha, opacity: .5 }, (item.id === sizeSts) && { color: COLOR.secondary_alpha, opacity: 1 }]}>{item.value}</Text>
                </TouchableOpacity>
            ))
            }
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white,
        justifyContent: 'space-between'
    },
    details_container: { backgroundColor: COLOR.white },
    cart_count_container: {
        height: 80,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: COLOR.backgroundBlack,
        flexDirection: 'row'
    },
    price_container: {
        paddingVertical: 10,
        width: '50%',
    },
    price_labal_text: {
        color: COLOR.primary,
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        marginBottom: 5
    },
    offer_price: {
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        color: COLOR.white,
    },
    current_price: {
        fontSize: 16,
        color: COLOR.lightGrey,
        textDecorationLine: 'line-through',
    },
    button_container: {
        width: '50%',
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingVertical: 20

    },
    before_cart_button: {
        height: '100%',
        width: '90%',
        backgroundColor: COLOR.primary,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    before_cart_btn_text: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: COLOR.secondary_shade
    },
    afterCartContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%'
    },
    count_dec_btn: {
        backgroundColor: COLOR.white,
        height: '100%',
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    item_count_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    count_inc_btn: {
        backgroundColor: COLOR.primary,
        height: '100%',
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    count_btn_text: {
        fontSize: 22,
        fontFamily: "Lata-Bold",
        color: COLOR.secondary
    },
    count_text: {
        fontSize: 25,
        fontFamily: "Lata-Bold",
        color: COLOR.white
    },
    product_image_container: {
        width: '100%',
        height: 250,
        backgroundColor: COLOR.secondary_shade,
        alignItems: 'center',
        justifyContent: "center"
    },
    product_image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain'
    },
    product_name_container: {
        width: '100%',
        minHeight: 80,
        paddingHorizontal: 20,
        justifyContent: 'center'
    },
    product_type: {
        fontSize: 13,
        fontFamily: 'SemiBold',
        color: COLOR.black,
        marginBottom: 10,
        opacity: .6
    },
    product_Name: {
        fontSize: 22,
        fontFamily: 'ExtraBold',
        color: COLOR.black
    },
    size_container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    size_text: {
        fontSize: 16,
        fontFamily: 'Bold',
        color: COLOR.black,
        marginBottom: 10
    },
    productSizes: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productSize: {
        width: '15%',
        height: 35,
        borderWidth: .7,
        borderRadius: 5,
        borderColor: COLOR.black,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 7
    },
    size_value_text: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: COLOR.black
    }


})