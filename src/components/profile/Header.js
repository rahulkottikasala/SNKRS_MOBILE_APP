import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { COLOR } from '../../const/Color'


const pic = 'https://api.time.com/wp-content/uploads/2016/03/mark-zuckerberg-max.jpg'


export const Header = () => {
    return (
        <View source={{uri:pic}} blurRadius={10} style={styles.headerContainer}>
        <ImageBackground source={{uri:pic}} blurRadius={10} style={styles.headerContainerWrap}/>

            <View style={styles.imageContainer}>
                <View source={{ uri: pic }} style={styles.imageWrap}>
                    <Image source={{ uri: pic }} style={styles.image} />
                    <TouchableOpacity style={styles.imageEdit}><Text style={styles.imageEditText}>Edit</Text></TouchableOpacity>
                </View>

            </View>
            <View style={styles.textContainer}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.name}>RAHUL K</Text>
                <Text style={styles.email}>Rahulkottikasala@gmail.com</Text>
                <Text style={styles.mobile}>+1 456 2398233</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: { width: '100%', height: 200, backgroundColor: COLOR.backgroundBlack, flexDirection: 'row',},
    headerContainerWrap: { width: '100%', height: 200, flexDirection: 'row',opacity:.06, position:'absolute'},
    imageContainer: { width: '40%', height: '100%', alignItems: 'flex-end', justifyContent: 'center' },
    imageWrap: { height: 140, width: 140, justifyContent: "center", alignItems: 'center', overflow: 'hidden', },
    image: { height: 120, width: 120, borderRadius: 120,borderWidth:1, borderColor:'#fff' ,backgroundColor: COLOR.secondary_alpha, resizeMode: "contain", overflow: 'hidden' },
    imageEdit: { position: 'absolute', bottom: 10, right: 10, width: 50, height: 20, borderRadius: 10, backgroundColor: COLOR.primary, alignItems: 'center', justifyContent: 'center', },
    imageEditText: { fontSize: 10, fontFamily: 'Lato-Black', color: COLOR.white },
    textContainer: { width: '60%', height: '100%', paddingHorizontal: 20, justifyContent: 'center', paddingTop: 10 },
    name: { fontSize: 20, fontFamily: 'Lato-Black', marginBottom: 6, color: COLOR.secondary_alpha },
    email: { fontSize: 12, fontFamily: 'Lato-Bold', marginBottom: 6, color: COLOR.secondary_alpha, opacity: .6 },
    mobile: { fontSize: 15, fontFamily: 'Lato-Black', color: COLOR.secondary_alpha, opacity: .8 },


})