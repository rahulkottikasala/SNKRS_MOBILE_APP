import { View, Text, StyleSheet, TouchableOpacity, Image, useColorScheme } from 'react-native'
import React from 'react'
import ArrowLeft from '../assets/icons/arrow-left.png'
import HeartIcon from '../assets/icons/heart.png'
import CartIcon from '../assets/icons/shopping-cart.png'
import SearchIcon from '../assets/icons/search-normal.png'
import MenuIcon from '../assets/icons/menu.png'
import ArrowLeftW from '../assets/icons/arrow-left-w.png'
import HeartIconW from '../assets/icons/heart-w.png'
import CartIconW from '../assets/icons/shopping-cart-w.png'
import SearchIconW from '../assets/icons/search-normal-w.png'
import MenuIconW from '../assets/icons/menu-w.png'
import Logo from '../assets/icons/logo.png'
import LogoW from '../assets/icons/logo-w.png'
import { COLOR } from '../const/Color'

const Header = ({ backBtn, title, bg }) => {
    const isDark = useColorScheme() === 'dark';
    return (
        <View style={[styles.container, bg && { backgroundColor: bg }]}>
            {title && <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>{title ? "Wishlist" : "Title"}</Text>
            </View>}
            {backBtn ?
                <TouchableOpacity style={styles.logoButton} onPress={() => backBtn()}>
                    {isDark ?
                        <Image style={styles.logo} source={ArrowLeftW} />
                        : <Image style={styles.logo} source={ArrowLeft} />}
                </TouchableOpacity>
                : <TouchableOpacity style={styles.logoButton}>
                    {isDark ?
                        <Image style={styles.appLogo} source={LogoW} />
                        : <Image style={styles.appLogo} source={Logo} />}
                </TouchableOpacity>
            }
            <View style={styles.rightIconGrp}>

                <TouchableOpacity style={styles.logoButton}>
                    {isDark ?
                        <Image style={styles.logo} source={SearchIconW} />
                        : <Image style={styles.logo} source={SearchIcon} />}
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoButton}>
                    {isDark ?
                        <Image style={styles.logo} source={CartIconW} />
                        : <Image style={styles.logo} source={CartIcon} />}
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Header
const styles = StyleSheet.create({
    appLogo: { width: 150, height: '70%', resizeMode: 'contain', marginLeft: -20 },
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
        justifyContent: 'center'
    },
    rightIconGrp: {
        flexDirection: 'row',
        width: 80,
        justifyContent: 'space-between',
    },
    headerTextContainer: {
        width: '100%',
        position: 'absolute',
        alignItems: 'center'
    },
    headerText: {
        color: COLOR.black,
        fontSize: 20,
        fontFamily: 'Regular'
    }
})