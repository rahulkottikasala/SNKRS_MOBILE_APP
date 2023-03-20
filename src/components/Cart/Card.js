import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {COLOR} from '../../const/Color';
import {AfterCart} from '../../../src/screen/ViewDetails';

const Card = ({text, description, price, onpress, btntxt , twobtn }) => {
  const [cart, setCart] = useState(1);

  const handleAddToCart = () => {
    setCart(1);
  };
  const handleCartInc = () => {
    setCart(cart + 1);
  };
  const handleCartDec = () => {
    setCart(cart - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row', height: 60}}>
          <Image
            style={styles.bannerImage}
            source={require('../../assets/dummy/force1White.png')}>
            </Image>

          <View style={{left: 25}}>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                color: 'black',
                fontSize: 15,
                fontWeight: '600',
              }}>
              {text}
            </Text>
            <Text numberOfLines={3} style={{fontSize: 9, maxWidth: 160}}>
              {description}
            </Text>
            <Text
              style={{
                fontFamily: 'Lato-Regular',
                color: 'black',
                fontSize: 15,
                top: 10,
                fontWeight: '600',
              }}>
              ${cart > 0 ? price * cart : price}{' '}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            top: 15,
            justifyContent: 'space-between',
          }}>
            {
            twobtn?
             <TouchableOpacity style={styles.count_inc_btn1} onpress={onpress}>
             <Text style={{color: COLOR.primary}}>Buy Now</Text>
           </TouchableOpacity> 
           :
           <View style={{height: 30, width: '30%', left: 20}}>
           {cart >= 1 ? (
             <AfterCart
               decrement={handleCartDec}
               increment={handleCartInc}
               count={cart}
               color={COLOR.black}
               fontSize={16}
             />
           ) : (
             <AfterCart
               increment={handleCartInc}
               count={1}
               color={COLOR.black}
               fontSize={18}
             />
           )}
         </View>
            }
             
        
          <TouchableOpacity style={styles.count_inc_btn} onpress={onpress}>
            <Text style={{color: 'white'}}>{btntxt}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Card;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 140,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  subContainer: {
    width: '100%',
    height: 130,
    backgroundColor: COLOR.secondary_shade,
    borderRadius: 20,
    elevation: 0.5,
    justifyContent: 'space-between',
    padding: 8,
  },
  bannerImage: {
    width: 120,
    height: 95,
    bottom: 30,

    //   resizeMode:"contain" ,
    //   position:'relative',
    //   backgroundColor:'red',
  },
  offerPerc: {
    fontSize: 28,
    fontFamily: 'Lato-Bold',
    color: COLOR.black,
    marginBottom: 5,
  },
  subText: {
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'Lato-Regular',
    color: COLOR.grey,
  },
  count_inc_btn: {
    backgroundColor: COLOR.primary,
    height: '56%',
    width: '30%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
  },
  count_inc_btn1: {
    backgroundColor: COLOR.white,
    height: '60%',
    width: '30%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    left:110
  },
});
