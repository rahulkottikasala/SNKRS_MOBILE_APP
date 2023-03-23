import { View, Text, TouchableOpacity, Dimensions, Image, Platform, StyleSheet, StatusBar, useColorScheme } from 'react-native'
import React, { useContext, useState } from 'react'
import { COLOR } from '../const/Color'
import HomeIcon from '../assets/icons/home.png'
import HomeIconW from '../assets/icons/home-w.png'
import HomeActive from '../assets/icons/home_active.png'
import CategoryIcon from '../assets/icons/category.png'
import CategoryIconW from '../assets/icons/grid-w.png'
import CategoryActive from '../assets/icons/category_active.png'
import HeartIcon from '../assets/icons/heart.png'
import HeartIconW from '../assets/icons/heart-w.png'
import HeartActive from '../assets/icons/heart_active.png'
import UserIcon from '../assets/icons/user.png'
import UserIconW from '../assets/icons/user-w.png'
import UserActive from '../assets/icons/user_active.png'
import Home from '../screen/Home'
import Category from '../screen/Category'
import Wishlist from '../screen/Wishlist'
import Profile from '../screen/Profile'



const { width, height } = Dimensions.get('window')

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};


const TabBar = () => {
  const isDark = useColorScheme()==='dark'
  const [tabBar, setTabBar] = useState(1)
  const [screenWidth, setScreenWidth] = useState(width);
  const [orientation, setOrientation] = useState(isPortrait() ? 'portrait' : 'landscape');


  Dimensions.addEventListener('change', () => {
    setOrientation(isPortrait() ? 'portrait' : 'landscape');
    setScreenWidth(isPortrait() ? width : 400);
  });

  return (
    <View style={{ flex: 1 }}>
       {
      isDark ?
        <StatusBar backgroundColor={COLOR.backgroundBlack} barStyle='light-content' />
        : <StatusBar backgroundColor={COLOR.white} barStyle='dark-content' />
    }
      <View style={[styles.container, isDark && {backgroundColor:COLOR.backgroundBlack}]}>
        {
          tabBar === 1 ? <Home /> : tabBar === 2 ? <Category /> : tabBar === 3 ? <Wishlist /> : <Profile />
        }
      </View>
      <View style={[styles.tabbarContainerWrap, orientation == 'landscape' && styles.tabbarLandscape, Platform.OS === 'ios' ? { bottom: 70 } : { bottom: 10 }]}>
        <View style={[styles.tabbarcontainer, Platform.OS === 'ios' && { elevation: 20 }, isDark && {backgroundColor:COLOR.backgroundBlack}]}>
          <View style={styles.tabbarIconContainer}>
            <TouchableOpacity onPress={() => setTabBar(1)}>
              {tabBar === 1 ? <Image style={styles.tabbarIconActive} source={HomeActive} /> :
              isDark ? <Image style={styles.tabbarIcon} source={HomeIconW} />
                :<Image style={styles.tabbarIcon} source={HomeIcon} />}
            </TouchableOpacity>
          </View>
          <View style={styles.tabbarIconContainer}>
            <TouchableOpacity onPress={() => setTabBar(2)}>
              {tabBar === 2 ? <Image style={styles.tabbarIconActive} source={CategoryActive} /> :
              isDark ? <Image style={styles.tabbarIcon} source={CategoryIconW} />
              :
                <Image style={styles.tabbarIcon} source={CategoryIcon} />}
            </TouchableOpacity>
          </View>
          <View style={styles.tabbarIconContainer}>
            <TouchableOpacity onPress={() => setTabBar(3)}>
              {tabBar === 3 ? <Image style={styles.tabbarIconActive} source={HeartActive} /> :
               isDark ? <Image style={styles.tabbarIcon} source={HeartIconW} />
               :
                <Image style={styles.tabbarIcon} source={HeartIcon} />}
            </TouchableOpacity>
          </View>
          <View style={styles.tabbarIconContainer}>
            <TouchableOpacity onPress={() => setTabBar(4)}>
              {tabBar === 4 ? <Image style={styles.tabbarIconActive} source={UserActive} /> :
              isDark ? <Image style={styles.tabbarIcon} source={UserIconW} />
              :
                <Image style={styles.tabbarIcon} source={UserIcon} />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
  container: { height: '100%', width: '100%', backgroundColor: COLOR.white },
  tabbarLandscape: { top: height - 70, width: '50%', alignSelf: 'center' },
  tabbarContainerWrap: { width: "100%", height: 70, borderRadius: 10, alignItems: "center", justifyContent: 'center', position: 'absolute' },
  tabbarcontainer: { width: "90%", height: 60, borderRadius: 18, backgroundColor: COLOR.light_grey, flexDirection: 'row', alignItems: 'center', elevation: 1 },
  tabbarIconContainer: { width: '25%', height: '80%', justifyContent: 'center', alignItems: 'center' },
  tabbarIconActive: { height: 25, width: 25, },
  tabbarIcon: { height: 25, width: 25, opacity: .5 },
})