import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/Color'

export const MidBanner = ({isDark}) => {
    return (
        <View style={[styles.container, isDark && {backgroundColor:COLOR.black}]}>
            <Block tag={"sneakers"} />
            <Block tag={"white"} />
            <Block tag={"leather"} />
            <Block tag={"stansmith"} />
            <Block tag={"airforce1"} />
            <Block tag={"oldscool"} />
            <Block tag={"nikeshoes"} />
            <Block tag={"nizza"} />
        </View>
    )
}

const Block = ({ tag }) => (
    <View style={styles.block} >
        <Text style={styles.hashtag} >#{tag}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: { width: '100%', backgroundColor: COLOR.secondary_alpha, paddingHorizontal: 10, paddingVertical: 10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' },
    block: { height: 30, width: '22%', borderRadius: 10, backgroundColor: COLOR.secondary_shade, marginRight: 5, marginBottom: 10, justifyContent: "center", alignItems: 'center' },
    hashtag: { fontSize: 10, color: COLOR.backgroundBlack, fontFamily: 'SemiBold' }
})