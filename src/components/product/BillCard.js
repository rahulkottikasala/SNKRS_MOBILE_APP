import { StyleSheet, Text, View } from 'react-native'
import { COLOR } from '../../const/Color'
import { DashLine, NormalLine } from '../Line'
import { STRING } from '../../const/String'

export const BillCard = ({isDark}) => {
    return (
        <View style={styles.container}>
            <View style={[styles.subContainer, isDark && {backgroundColor:COLOR.secondary_alpha}]}>
                <Text style={styles.title}>Price Details</Text>

                <View style={styles.rowCont}>
                    <Text style={styles.rowKey}>Price ( x Items )</Text>
                    <Text style={styles.rowValue}>{STRING.rupee}1200</Text>
                </View>

                <View style={styles.rowCont}>
                    <Text style={styles.rowKey}>Discount</Text>
                    <Text style={styles.rowValue}>- {STRING.rupee}12</Text>
                </View>

                <View style={styles.rowCont}>
                    <Text style={styles.rowKey}>Delivery Charges</Text>
                    <Text style={[styles.rowValue, { fontSize: 12, color: COLOR.green }]}>FREE Delivery |  {STRING.rupee}5</Text>
                </View>
                <DashLine />
                <View style={styles.rowCont}>
                    <Text style={[styles.rowKey, { color: COLOR.backgroundBlack, fontSize: 17 }]}>Total Amount</Text>
                    <Text style={styles.rowValue}>{STRING.rupee}1188</Text>
                </View>
                <NormalLine />

                <View style={{ width: '100%', height: 40, borderWidth: 1 , borderColor:COLOR.green, marginTop:5, opacity:.8,  justifyContent:'center', alignItems:'center'}}>
                    <Text style={{ fontSize: 15, fontFamily: 'Lato-Black', color: COLOR.green }}>You will save {STRING.rupee}12 on this order</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    rowValue: { fontSize: 17, fontFamily: 'Lato-Bold', color: COLOR.black },
    rowKey: { fontSize: 15, fontFamily: 'Lato-Bold', color: COLOR.grey },
    rowCont: { width: '100%', height: 25, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" },
    title: { color: COLOR.backgroundBlack, fontSize: 18, fontFamily: 'Lato-Bold', marginBottom: 20, textDecorationLine: 'underline', textAlign: 'center' },
    container: { width: '100%', height: 250, paddingHorizontal: 20, marginTop: 30 },
    subContainer: { width: '100%', height: '100%', backgroundColor: COLOR.light_grey_alpha, borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10 }
})