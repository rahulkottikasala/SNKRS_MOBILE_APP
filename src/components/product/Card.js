import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLOR } from "../../const/Color"
import Snkrs from '../../assets/dummy/running.png'

export const Card = ({ isCart, isDark }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.subContainer, isDark && {backgroundColor:COLOR.black}]}>
                <View style={styles.leftContainer}>
                    <Image source={Snkrs} style={{width:'90%', height:'90%', overflow:'hidden', resizeMode:'contain'}} />
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.textContainer}>
                        <Text ellipsizeMode="tail" style={[styles.title, isDark && {color:COLOR.secondary_alpha}]}>Tittle</Text>
                        <Text numberOfLines={2} ellipsizeMode="tail" style={[styles.subTitle,isDark && {color:COLOR.secondary_alpha}]}>offer applied 50% offer applied 50% offer applied 50% offer applied 50% </Text>
                        <Text style={[styles.price,isDark && {color:COLOR.secondary_alpha}]}>$ 120.</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        {
                            isCart ? (
                                <IncButton isDark={isDark} />
                            ) : <CButton name={"Add To Cart"} color={COLOR.white} />
                        }
                        <CButton name={"Remove"} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const CButton = ({ name, action, color }) => (
    <TouchableOpacity style={[styles.cBtn, color && { backgroundColor:color, borderWidth:1, borderColor:COLOR.primary }]}>
        <Text style={[styles.btnText, color && {color:COLOR.backgroundBlack}]}>{name ? name : "Button"}</Text>
    </TouchableOpacity>
)
const IncButton = ({ count = 1 , isDark}) => (
    <View style={styles.incBtnCont}>
        <TouchableOpacity style={styles.incbtn}><Text style={styles.incBtnText}>-</Text></TouchableOpacity>
        <View style={styles.countCont} >
            <Text style={[styles.countTxt, isDark && {color:COLOR.secondary_alpha}]}>{count}</Text>
        </View>
        <TouchableOpacity style={styles.incbtn}><Text style={styles.incBtnText}>+</Text></TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    countTxt: { fontSize: 15, fontFamily: 'Lato-Bold', color: COLOR.backgroundBlack },
    countCont: { width: '34%', height: '100%', alignItems: 'center', justifyContent: 'center' },
    incbtn: { width: '33%', height: '100%', borderRadius: 7, backgroundColor: COLOR.secondary_shade, alignItems: 'center', justifyContent: 'center' },
    incBtnText: { color: COLOR.backgroundBlack, fontSize: 20, fontWeight: '800' },
    incBtnCont: {  width: 100, height: 30, borderRadius: 7, flexDirection: "row", },
    container: {
        width: '100%',
        height: 130,
        paddingHorizontal: 20,
        marginTop: 10
    },
    subContainer: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
        flexDirection: 'row',
        overflow: 'hidden',
        borderWidth: 1,
        paddingVertical:5,
        borderColor:COLOR.backgroundBlack,
    },
    leftContainer: { width: '33%', height:'100%', alignItems:'center', justifyContent:'center' },
    rightContainer: { width: '67%' },
    textContainer: { height: '65%', width: '100%', paddingHorizontal: 10, justifyContent: 'space-between', paddingVertical: 5 },
    title: { fontSize: 20, fontFamily: 'Lato-Bold', color: COLOR.backgroundBlack },
    subTitle: { fontSize: 10, color: COLOR.black, opacity:.7 },
    price: { fontFamily: 'Lato-Bold', fontSize: 17, color: COLOR.backgroundBlack },
    buttonContainer: { height: '35%', width: '100%', flexDirection: 'row', paddingLeft: 10, paddingRight: 15, alignItems: 'center', justifyContent: 'space-between' },
    cBtn: { width: 100, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 7, backgroundColor: COLOR.primary, opacity: .9 },
    btnText:{fontSize:12, fontFamily:'Lato-Bold', color:COLOR.white}
})