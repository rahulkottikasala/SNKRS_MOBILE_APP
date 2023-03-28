import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/Color'
import { Card } from './Card'
import jordan from '../../assets/dummy/jordan.png'
import { ScrollView } from 'react-native-gesture-handler'
import ProductHeader from './ProductHeader'

const FeaturedProduct = ({isDark}) => {
    return (
        <View style={[styles.container]}>
           <ProductHeader isDark={isDark} name={"Featured Products"}/>

            <View style={styles.prodCont}>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    <Card isDark={isDark} isSmall cardImage={jordan} />
                    <Card isDark={isDark} isSmall cardImage={jordan} />
                    <Card isDark={isDark} isSmall cardImage={jordan} />
                    <Card isDark={isDark} isSmall cardImage={jordan} />
                    <Card isDark={isDark} isSmall cardImage={jordan} />
                    <Card isDark={isDark} isSmall cardImage={jordan} />
                    <Card isDark={isDark} isSmall cardImage={jordan} />
                    <Card isDark={isDark} isSmall cardImage={jordan} />
                </ScrollView>
            </View>
        </View>
    )
}

export default FeaturedProduct

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 260,
        poddingHorizontal: 20,
        marginTop: 20,  

    },
    headerCont: {
        width: '100%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    prodCont: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,

    }
})

