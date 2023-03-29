
import { View, StyleSheet, Image, Text } from "react-native";
import { useState, useEffect } from 'react'

import meas from '../../assets/images/payment/meas_card.png';
import visa from '../../assets/images/payment/visa_card.png';
import chip from '../../assets/images/payment/chip_card.png';
import { COLOR } from "../../const/Color";
import Animated, { FlipInEasyX, FlipInEasyY, FlipInXDown, FlipInXUp, FlipOutEasyX, Layout, RollInLeft, RotateInDownLeft } from "react-native-reanimated";



export const AtmCardFront = ({ cardNumber, name, expiry }) => {


    return (
        <Animated.View entering={FlipInEasyY.duration(750)} style={{ height: 186, width: '100%', paddingHorizontal: 10, minWidth: 300 }}>
            <Animated.View style={{ height: 186, width: '100%', backgroundColor: "grey", borderRadius: 20, overflow: 'hidden', backgroundColor: COLOR.primary, }}>
                <View style={{ width: '100%', height: 56, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <Image source={chip} style={{ width: 40, resizeMode: 'contain', height: 35 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={meas} style={{ width: 60, resizeMode: 'contain', height: 30, bottom: 3 }} />
                        <Image source={visa} style={{ width: 60, resizeMode: 'contain', height: 30, bottom: 3 }} />
                    </View>
                </View>
                <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: "flex-end" }}>
                    {
                        cardNumber?.toString().length > 0 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[0]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    {
                        cardNumber?.toString().length > 1 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[1]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    {
                        cardNumber?.toString().length > 2 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[2]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    {
                        cardNumber?.toString().length > 3 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[3]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    <Text style={{ marginRight: 10 }}></Text>
                    {
                        cardNumber?.toString().length > 4 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[4]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    {
                        cardNumber?.toString().length > 5 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[5]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    {
                        cardNumber?.toString().length > 6 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[6]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    {
                        cardNumber?.toString().length > 7 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[7]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    <Text style={{ marginRight: 10 }}></Text>

                    {
                        cardNumber?.toString().length > 8 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[8]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    {
                        cardNumber?.toString().length > 9 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[9]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    {
                        cardNumber?.toString().length > 10 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[10]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    {
                        cardNumber?.toString().length > 11 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[11]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    <Text style={{ marginRight: 10 }}></Text>

                    {
                        cardNumber?.toString().length > 12 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[12]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    {
                        cardNumber?.toString().length > 13 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[13]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    {
                        cardNumber?.toString().length > 14 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[14]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }
                    {
                        cardNumber?.toString().length > 15 ?
                            <Animated.Text entering={FlipInXUp} style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>{cardNumber.toString()[15]}</Animated.Text>
                            : <Text style={{ fontSize: 17, width: 13, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, marginRight: 1 }}>X</Text>
                    }



                </View>

                <View style={{ width: '100%', height: 90, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: "center" }}>
                    <View>
                        <Text style={{ fontSize: 14, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .6, marginBottom: 5, }}>Card Holder Name</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, }}>{name ? name.toUpperCase() : 'Name'}</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .6, marginBottom: 5 }}>Valid Thru</Text>
                        <View style={{ flexDirection: 'row' }}>

                            <Text style={{ width: 13, fontSize: 14, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, }}>{expiry?.toString().length > 0 ? expiry?.toString()[0] : "M"}</Text>
                            <Text style={{ width: 13, fontSize: 14, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, }}>{expiry?.toString().length > 1 ? expiry?.toString()[1] : "M"}</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, }}> / </Text>
                            <Text style={{ width: 13, fontSize: 14, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, }}>{expiry?.toString().length > 2 ? expiry?.toString()[2] : "Y"}</Text>
                            <Text style={{ width: 13, fontSize: 14, fontFamily: 'Lato-Bold', color: COLOR.secondary_alpha, opacity: .8, }}>{expiry?.toString().length > 3 ? expiry?.toString()[3] : "Y"}</Text>
                        </View>
                    </View>
                </View>

            </Animated.View>
        </Animated.View>

    )
}



export const AtmCardBack = ({ cvv }) => {
    return (
        <Animated.View entering={FlipInEasyY.duration(750)} style={{ height: 186, width: '100%', paddingHorizontal: 10, minWidth: 300 }}>
            <View style={{ height: 186, width: '100%', backgroundColor: "grey", borderRadius: 20, overflow: 'hidden', backgroundColor: COLOR.primary, }}>
                <Text style={{ height: 22, fontSize: 10, textAlignVertical: "center", textAlign: "center" }}>For customer service, call +123-456-789 </Text>

                <View style={{ width: '100%', height: 50, backgroundColor: COLOR.black, }} />
                <View style={{ width: '100%', height: 114, paddingHorizontal: 20, paddingVertical: 10, opacity: .8, justifyContent: 'space-between' }}>
                    <View style={{ width: '100%', height: 35, backgroundColor: COLOR.secondary_alpha, flexDirection: 'row' }}>
                        <View style={{ width: '80%', height: '100%', paddingHorizontal: 3 }}>
                            <View style={{ width: '100%', height: 1, marginVertical: 3, backgroundColor: COLOR.black, opacity: .3 }} />
                            <View style={{ width: '100%', height: 1, marginVertical: 3, backgroundColor: COLOR.black, opacity: .3 }} />
                            <View style={{ width: '100%', height: 1, marginVertical: 3, backgroundColor: COLOR.black, opacity: .3 }} />
                            <View style={{ width: '100%', height: 1, marginVertical: 3, backgroundColor: COLOR.black, opacity: .3 }} />
                            <View style={{ width: '100%', height: 1, marginVertical: 3, backgroundColor: COLOR.black, opacity: .3 }} />
                        </View>
                        <View style={{ width: '20%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Text style={{ width: 13, fontSize: 15, fontFamily: 'Lato-BoldItalic', color: COLOR.backgroundBlack }}>{cvv?.toString().length > 0 ? cvv?.toString()[0] : "X"}</Text>
                            <Text style={{ width: 13, fontSize: 15, fontFamily: 'Lato-BoldItalic', color: COLOR.backgroundBlack }}>{cvv?.toString().length > 1 ? cvv?.toString()[1] : "X"}</Text>
                            <Text style={{ width: 13, fontSize: 15, fontFamily: 'Lato-BoldItalic', color: COLOR.backgroundBlack }}>{cvv?.toString().length > 2 ? cvv?.toString()[2] : "X"}</Text>
                        </View>
                    </View>

                    <View style={{ width: '100%', height: 69, paddingVertical: 5, justifyContent: 'center' }}>
                        <Text numberOfLines={3} style={{ fontSize: 10, textAlignVertical: "center", textAlign: "center", marginBottom: 5 }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Text>
                    </View>

                </View>


            </View>
        </Animated.View>
    )
}



const styles = StyleSheet.create({})