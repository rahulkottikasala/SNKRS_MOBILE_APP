import { View, Text,StyleSheet } from 'react-native'
import React from 'react'   
import { COLOR } from '../../const/Color'
import ProductHeader from './ProductHeader'
import { Card } from './Card'
import jordan from '../../assets/dummy/jordan.png'

const arrLen = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
const InterstingProduct = ({isDark}) => {
    return (
        <View style={styles.contWrap}>
            <View style={[styles.container, isDark && {backgroundColor:COLOR.backgroundBlack, borderColor:COLOR.primary, borderWidth:1}]}>
                <ProductHeader isDark={isDark} padding={10} name={"Intersting Find"} />
                <View style={{flexDirection:'row', flexWrap:"wrap", paddingHorizontal:10, justifyContent:'space-between'}}>
                    {
                        arrLen?.slice(0,4).map((item, i) => (
                            <Card isDark={isDark} key={i} bg={COLOR.white} cardImage={jordan}/>

                        ))
                    }
                 
                </View>

            </View>
        </View>
    )
}

export default InterstingProduct

const styles = StyleSheet.create({
    container: { width: '100%', height: 590, backgroundColor: COLOR.secondary_shade, borderRadius:10 },
    contWrap: { width: '100%', height: 590, paddingHorizontal: 20, marginTop:20 },
})