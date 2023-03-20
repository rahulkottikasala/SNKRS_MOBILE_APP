import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../const/Color'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import jordan from '../assets/dummy/jordan.png'

const ViewDetails = () => {
    const navigation = useNavigation()
    const [cart, setCart] = useState(0)
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
        {id :0, value:3},
        {id :1, value:3.5},
        {id :2, value:4},
        {id :3, value:4.5},
        {id :4, value:5},
        {id :5, value:5.5},
        {id :6, value:6},
        {id :7, value:6.5},
        {id :8, value:7},
        {id :9, value:7.5},
        {id :10, value:8},
        {id :11, value:8.5},
    ]

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.secondary_alpha} barStyle='default' />
            <Header backBtn={handleBackNavigation} bg={COLOR.secondary_shade} />

            {/* ------------Scroll View------------- */}

            <ScrollView style={styles.details_container}>
                {/* image */}
                <View style={styles.product_image_container}>
                    <Image style={styles.product_image} source={jordan} />
                </View>
                {/* product name */}
                <View style={styles.product_name_container}>
                    <Text style={styles.product_type}>Mens Sneaker</Text>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={styles.product_Name}>Air Jordan One High Top Model</Text>
                </View>
                {/* size */}
                <View style={styles.size_container}>
                    <Text style={styles.size_text}>Size : </Text>
                    <View style={styles.productSizes}>
                       {sizes?.map((item, i) => (

                           <TouchableOpacity style={styles.productSize}>
                            <Text style={styles.size_value_text}>{item.value}</Text>
                        </TouchableOpacity>
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
            {/* -----------------END--------------- */}

            {/* --------Cart Count container-------- */}
            <View style={styles.cart_count_container}>
                <View style={styles.price_container}>
                    <Text style={styles.price_labal_text}>Price :</Text>
                    <Text style={styles.offer_price}>${cart > 0 ? 180.00 * cart : 180.00}    <Text style={styles.current_price}>${cart > 0 ? 230.00 * cart : 230.00}</Text></Text>
                </View>
                <View style={styles.button_container}>
                    {cart > 0 ?
                        <AfterCart decrement={handleCartDec} increment={handleCartInc} count={cart} color={COLOR.white} fontSize={25} />
                        : <BeforeCart addToCart={handleAddToCart} />}
                </View>
            </View>
            {/* ---------------END------------------ */}

        </View>
    )
}

export default ViewDetails

export const BeforeCart = ({ addToCart }) => (
    <TouchableOpacity style={styles.before_cart_button} onPress={addToCart}>
        <Text style={styles.before_cart_btn_text}>Add To Cart</Text>
    </TouchableOpacity>
)

export const AfterCart = ({ increment, decrement, count,color,fontSize }) => (
    <View style={styles.afterCartContainer}>
        <TouchableOpacity onPress={decrement} style={styles.count_dec_btn}><Text style={styles.count_btn_text}>-</Text></TouchableOpacity>
        <View style={styles.item_count_view}><Text style={[styles.count_text, color={ color}, fontSize={fontSize}]}>{count}</Text></View>
        <TouchableOpacity onPress={increment} style={styles.count_inc_btn}><Text style={styles.count_btn_text}>+</Text></TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.white,
        justifyContent: 'space-between'
    },
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
        textDecorationLine: 'line-through'
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
       
        fontFamily: "Lata-Bold",
      
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
    product_name_container:{
        width:'100%',
        minHeight:80,
        paddingHorizontal:20,
        justifyContent:'center'
    },
    product_type:{
        fontSize:13,
        fontFamily:'SemiBold',
        color:COLOR.black,
        marginBottom:10
    },
    product_Name:{
        fontSize:22,
        fontFamily:'ExtraBold',
        color:COLOR.black
    },
    size_container:{
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:10
    },
    size_text:{
        fontSize:16,
         fontFamily:'Bold',
         color:COLOR.black,
         marginBottom:10
    },
    productSizes:{
        width:'100%',     
        flexDirection:'row',
        flexWrap:'wrap', 
        justifyContent:'space-between',
    },
    productSize:{
        width:'15%',
        height:35, 
        borderWidth:.8,
        borderRadius:5, 
        borderColor:COLOR.light_grey, 
        alignItems:'center',
        justifyContent:'center',
        marginBottom:7
    },
    size_value_text:{
        fontSize:14, 
        fontFamily:'Lato-Bold',
        color:COLOR.black
    }


})