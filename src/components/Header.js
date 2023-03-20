import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ArrowLeft from '../assets/icons/arrow-left.png'
import HeartIcon from '../assets/icons/heart.png'
import CartIcon from '../assets/icons/shopping-cart.png'
import SearchIcon from '../assets/icons/search-normal.png'
import MenuIcon from '../assets/icons/menu.png'
import { COLOR } from '../const/Color'

const Header = ({ backBtn, title, bg }) => {
    return (
        <View style={[styles.container, bg && {backgroundColor:bg}]}>
            {title && <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{title ? "Wishlist" : "Title"}</Text>
            </View>}
            {backBtn ?
                <TouchableOpacity style={styles.logoButton} onPress={() => backBtn()}>
                    <Image style={styles.logo} source={ArrowLeft} />
                </TouchableOpacity>
                : <TouchableOpacity style={styles.logoButton}>
                    <Image style={styles.logo} source={MenuIcon} />
                </TouchableOpacity>
            }
            <View style={styles.rightIconGrp}>

                <TouchableOpacity style={styles.logoButton}>
                    <Image style={styles.logo} source={SearchIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoButton}>
                    <Image style={styles.logo} source={CartIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Header
const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logo: {
        width: 27,
        height: 27,
        resizeMode: 'contain'
    },
    logoButton: {

    },
    rightIconGrp: {
        flexDirection: 'row',
        width: 80,
        justifyContent: 'space-between',
    },
    headerTextContainer:{
        width:'100%',
        position:'absolute',
        alignItems:'center'
    },
    headerText:{
        color:COLOR.black,
        fontSize:20, 
        fontFamily:'Regular'
    }
})