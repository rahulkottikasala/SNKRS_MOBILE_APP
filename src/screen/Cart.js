import { View, Text, useColorScheme, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import { COLOR } from '../const/Color';
import { Card } from '../components/product/Card';
import ViewHeight from '../components/ViewHeight';
import { BillCard } from '../components/product/BillCard';
import { Location } from '../components/product/Location';
import { PlaceOrderButton } from '../components/product/PlaceOrderButton';

const Cart = ({ navigation }) => {
    const isDark = useColorScheme() === 'dark';

    const handleBackNavigation = () => {
        navigation.pop()
    }

    return (
        <View style={[styles.container, isDark && { backgroundColor: COLOR.backgroundBlack }]}>
            <Header title={"My Cart"} isCart backBtn={handleBackNavigation} />
            <ScrollView showsVerticalScrollIndicator={false} >
                <Card isCart isDark={isDark} />
                <Card isCart isDark={isDark} />
                <BillCard isDark={isDark} />
                <Location isDark={isDark} />
                <PlaceOrderButton isDark={isDark}/>
                <ViewHeight />
            </ScrollView>

        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: COLOR.white }
})